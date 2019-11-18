import React, { useCallback, useEffect, useState } from "react";
import { Refresh } from "styled-icons/remix-line/Refresh";
import { CheckShield } from "styled-icons/boxicons-regular/CheckShield";

import { PackageInfo } from "./types";
import { isLatestVersion, rawVersion } from "./helpers";
import { useApi, postJSON } from "./hooks";

interface Props {
  name: string;
  version: string;
  onVersionCheck?: (isGreen: boolean) => void;
}

const Dependency: React.FC<Props> = props => {
  const path = `/info/${props.name}/${encodeURIComponent(props.version)}`;

  const { data, error } = useApi<PackageInfo>(path);

  const [state, setState] = useState({
    fulfilled: false,
    pending: false,
    error: undefined
  });

  const { version, onVersionCheck, name } = props;

  const upgradePackageVersion = useCallback(() => {
    async function task() {
      if (data) {
        try {
          setState(s => ({ ...s, pending: true }));
          await postJSON(`/upgrade`, {
            name,
            version,
            latest: data.latest
          });
          setState(s => ({ ...s, fulfilled: true }));
          if (onVersionCheck) {
            onVersionCheck(true);
          }
        } catch (error) {
          setState(s => ({ ...s, error }));
        } finally {
          setState(s => ({ ...s, pending: false }));
        }
      }
    }

    task();
  }, [name, version, data, onVersionCheck]);

  useEffect(() => {
    if (data && onVersionCheck) {
      const passed = isLatestVersion(version, data.latest);
      if (passed) {
        onVersionCheck(passed);
      }
    }
  }, [data, version, onVersionCheck]);

  const renderContent = useCallback(() => {
    if (error || state.error) {
      return (
        <div>
          <span className="ml-4">{version}</span>
          <div className="ml-4 text-right">
            <span className="bg-red-900 px-2 py-2 rounded-lg">Failed</span>
          </div>
        </div>
      );
    }

    if (!data || state.pending) {
      return (
        <div className="ml-4 text-right">
          <span className="bg-gray-900 px-2 py-2 rounded-lg">
            {state.pending ? "Upgrading..." : "Loading..."}
          </span>
        </div>
      );
    }

    return (
      <div className="ml-4 text-right">
        {state.fulfilled || isLatestVersion(data.version, data.latest) ? (
          <span className="bg-gray-900 px-2 py-2 pr-1 rounded-lg">
            {state.fulfilled
              ? `${rawVersion(data.version).qualifier}${data.latest}`
              : data.version}{" "}
            <CheckShield size="1.8rem" className="pb-1" color="#68d391" />
          </span>
        ) : (
          <>
            <span>{data.version}</span>
            {` → `}
            <button
              className="bg-green-800 px-2 pr-1 rounded-lg"
              onClick={upgradePackageVersion}
            >
              {data.latest} <Refresh size="1.4rem" className="pb-1" />
            </button>
          </>
        )}
      </div>
    );
  }, [data, error, version, upgradePackageVersion, state]);

  return (
    <li
      className="flex my-1 justify-between h-10 items-center"
      key={props.name}
    >
      <div className="font-bold text-xl mr-12">
        <a href={`https://www.npmjs.com/package/${props.name}`}>{props.name}</a>
      </div>
      {renderContent()}
    </li>
  );
};

export default Dependency;
