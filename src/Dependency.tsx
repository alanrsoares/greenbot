import React, { useCallback, useEffect, useState } from "react";
import { Refresh } from "styled-icons/remix-line/Refresh";
import { CheckShield } from "styled-icons/boxicons-regular/CheckShield";

import { PackageInfo } from "./types";
import { isLatestVersion, rawVersion } from "./helpers";
import { postJSON } from "./hooks";

interface Props {
  name: string;
  version: string;
  latest: string;
  onVersionCheck?: (isGreen: boolean) => void;
}

const Dependency: React.FC<Props> = props => {
  const [state, setState] = useState({
    fulfilled: false,
    pending: false,
    error: undefined
  });

  const { version, onVersionCheck, name, latest } = props;

  const upgradePackageVersion = useCallback(() => {
    async function task() {
      try {
        setState(s => ({ ...s, pending: true }));
        await postJSON<PackageInfo, PackageInfo>(`/upgrade`, {
          name,
          version,
          latest
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

    task();
  }, [name, version, latest, onVersionCheck]);

  useEffect(() => {
    if (onVersionCheck) {
      const passed = isLatestVersion(version, latest);
      if (passed) {
        onVersionCheck(passed);
      }
    }
  }, [version, latest, onVersionCheck]);

  const renderContent = useCallback(() => {
    if (state.error) {
      return (
        <div>
          <span className="ml-4">{version}</span>
          <div className="ml-4 text-right">
            <span className="bg-red-900 px-2 py-2 rounded-lg">
              Failed to upgrade
            </span>
          </div>
        </div>
      );
    }

    if (state.pending) {
      return (
        <div className="ml-4 text-right">
          <span className="bg-gray-900 px-2 py-2 rounded-lg">Upgrading...</span>
        </div>
      );
    }

    return (
      <div className="ml-4 text-right">
        {state.fulfilled || isLatestVersion(version, latest) ? (
          <span className="bg-gray-900 px-2 py-2 pr-1 rounded-lg">
            {state.fulfilled
              ? `${rawVersion(version).qualifier}${latest}`
              : version}{" "}
            <CheckShield size="1.8rem" className="pb-1" color="#68d391" />
          </span>
        ) : (
          <>
            <span>{version}</span>
            {` → `}
            <button
              className="bg-green-800 px-2 pr-1 rounded-lg"
              onClick={upgradePackageVersion}
            >
              {latest} <Refresh size="1.4rem" className="pb-1" />
            </button>
          </>
        )}
      </div>
    );
  }, [latest, version, upgradePackageVersion, state]);

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

Dependency.displayName = "Dependency";

export default Dependency;
