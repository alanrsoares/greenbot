import React, { useCallback } from "react";
import { Npm } from "styled-icons/icomoon/Npm";

import { Package } from "./types";
import { useApi } from "./hooks";
import Dependencies from "./Dependencies";

const App: React.FC = () => {
  const { data, error } = useApi<Package>("/package");

  const renderContent = useCallback(() => {
    if (error) {
      const message = "Failed to load package.json";
      if (__DEV__) {
        console.warn(message, error);
      }
      return <div>{message}</div>;
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
        <div
          className="bg-gray-800 rounded-lg px-3 py-2 mt-2 shadow-md mb-8"
          style={{ minWidth: 400 }}
        >
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
