import React, { useCallback } from "react";
import useSWR from "swr";

const unwrapJSON = (res: Response) => res.json();
const fetchJSON = (path: string) => fetch(path).then(unwrapJSON);

const styles = {
  container: "flex flex-col bg-gray-900 h-screen justify-center items-center",
  title: "text-gray-100 font-bold text-4xl font-mono",
  card: "bg-gray-800 rounded-lg px-3 py-2 mt-2 shadow-md flex-grow"
};

interface DependencyItemProps {
  name: string;
  version: string;
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
      return <div>loading...</div>;
    }
    return (
      <>
        <div className="font-bold text-xl">{props.name}</div>
        <div className="ml-4 text-right">
          <span>{props.version}</span>
          {` → `}
          <span className="bg-green-800 px-2 py-1 rounded-lg">
            {data.latest}
          </span>
        </div>
      </>
    );
  }, [data, error]);

  return (
    <li className="flex justify-between h-10 items-center" key={props.name}>
      {renderContent()}
    </li>
  );
};

interface DependenciesProps {
  title: string;
  entries: [string, string][];
}

const Dependencies: React.FC<DependenciesProps> = props => (
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

const useApi = (path: string) => {
  const fetcher = () => fetchJSON(path);

  return useSWR(path, fetcher);
};

const App: React.FC = () => {
  const { data, error } = useApi("/package");

  const renderContent = useCallback(() => {
    if (error) {
      return <div>{JSON.stringify(error)}</div>;
    }

    if (!data) {
      return <div>Loading...</div>;
    }

    const { name, dependencies, devDependencies, version } = data;

    const dependencyEntries = Object.entries(dependencies);
    const devEntries = Object.entries(devDependencies);

    return (
      <>
        <div className="text-center">
          Package: {name} <span className="font-bold">v{version}</span>
        </div>
        <div className={styles.card}>
          <Dependencies
            title="Dependencies"
            entries={dependencyEntries as any}
          />

          <Dependencies
            title="(Dev) Dependencies"
            entries={devEntries as any}
          />
        </div>
      </>
    );
  }, [data, error]);

  return (
    <div className={styles.container}>
      <div>
        <h1
          className={styles.title}
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
