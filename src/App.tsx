import React, { useCallback } from "react";
import useSWR from "swr";

import { Npm } from "styled-icons/icomoon/Npm";
import { Refresh } from "styled-icons/remix-line/Refresh";
import { CheckShield } from "styled-icons/boxicons-regular/CheckShield";

interface Package {
  name: string;
  version: string;
  dependencies: Record<string, string>;
  devDependencies: Record<string, string>;
}

const unwrapJSON = (res: Response) => res.json();
const fetchJSON = (path: string) => fetch(path).then(unwrapJSON);

interface DependencyItemProps {
  name: string;
  version: string;
  onVersionCheck?: (isGreen: boolean) => void;
}

const DependencyItem: React.FC<DependencyItemProps> = props => {
  const path = `/info/${props.name}/${encodeURIComponent(props.version)}`;
  const { data, error } = useApi(path);

  const renderContent = useCallback(() => {
    if (error) {
      return (
        <>
          <div className="font-bold text-xl">{props.name}</div>
          <div>
            <span className="ml-4">{props.version}</span>
            <span className="ml-4">failed</span>
          </div>
        </>
      );
    }
    if (!data) {
      return (
        <>
          <div className="font-bold text-xl">{props.name}</div>
          <div className="ml-4 text-right">
            <span className="bg-gray-900 px-2 py-2 rounded-lg">Loading...</span>
          </div>
        </>
      );
    }

    const isGreen = props.version.replace(/[\^\~]/, "") === data.latest;

    if (props.onVersionCheck) {
      props.onVersionCheck(isGreen);
    }

    return (
      <>
        <div className="font-bold text-xl">{props.name}</div>
        <div className="ml-4 text-right">
          {isGreen ? (
            <span className="bg-gray-900 px-2 py-2 pr-1 rounded-lg">
              {props.version}{" "}
              <CheckShield size="1.8rem" className="pb-1" color="#68d391" />
            </span>
          ) : (
            <>
              <span>{props.version}</span>` → `
              <button className="bg-green-800 px-2 pr-1 rounded-lg">
                {data.latest} <Refresh size="1.4rem" className="pb-1" />
              </button>
            </>
          )}
        </div>
      </>
    );
  }, [data, error]);

  return (
    <li
      className="flex my-1 justify-between h-10 items-center"
      key={props.name}
    >
      {renderContent()}
    </li>
  );
};

interface DependenciesProps {
  title: string;
  entries: [string, string][];
}

const Dependencies: React.FC<DependenciesProps> = props => {
  return (
    <div>
      <div className="border-b-2 border-gray-400 py-4 px-1 flex justify-between font-mono">
        <h2 className="text-2xl text-green-400">{props.title}</h2>
        <div className="flex text-2xl h-12 w-12 rounded-full justify-center items-center bg-green-800">
          {props.entries.length}
        </div>
      </div>
      <div className="p-2">
        <ul>
          {props.entries.map(([name, version]) => (
            <DependencyItem name={name} version={version} />
          ))}
        </ul>
      </div>
    </div>
  );
};

function useApi<T, E = Error>(path: string) {
  const fetcher = () => fetchJSON(path);

  return useSWR<T, E>(path, fetcher);
}

const App: React.FC = () => {
  const { data, error } = useApi<Package>("/package");

  const renderContent = useCallback(() => {
    if (error) {
      return <div>An error occured: {JSON.stringify(error)}</div>;
    }
    if (!data) {
      return <div>Loading...</div>;
    }

    const { name, dependencies, devDependencies, version } = data;

    const dependencyEntries = Object.entries(dependencies);
    const devEntries = Object.entries(devDependencies);

    return (
      <>
        <div className="text-center bg-green-800 px-2 py-1 my-4 rounded-lg font-bold">
          <Npm size="1rem" /> {name} - v{version}
        </div>
        <div className="bg-gray-800 rounded-lg px-3 py-2 mt-2 shadow-md mb-8">
          <Dependencies title="Dependencies" entries={dependencyEntries} />
          <Dependencies title="(Dev) Dependencies" entries={devEntries} />
        </div>
      </>
    );
  }, [data, error]);

  return (
    <div className="flex flex-col bg-gray-900 min-h-screen justify-center items-center">
      <div>
        <h1
          className="text-gray-100 font-bold text-4xl font-mono"
          style={{ fontFamily: "Share Tech Mono", fontSize: "4em" }}
        >
          <span className="text-green-500">Green</span>Bot
        </h1>
      </div>
      <div className="text-white">{renderContent()}</div>
    </div>
  );
};

export default App;
