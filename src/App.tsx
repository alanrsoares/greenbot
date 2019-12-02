import React, { useCallback, useState } from "react";
import { Npm } from "styled-icons/icomoon/Npm";
import styled from "styled-components";

import tw from "tailwind.macro";

import { Package } from "./types";
import { useApi } from "./hooks";
import Dependencies from "./Dependencies";

type TabKind = "dependencies" | "devDependencies";

const Container = styled.div`
  ${tw`flex flex-col bg-gray-900 min-h-screen justify-center items-center`}
`;

interface TabProps {
  onClick(): void;
  active?: boolean;
}

const TabContainer = styled.div`
  display: flex;
`;

const Tab = styled.div<TabProps>`
  ${props =>
    props.active ? tw`flex-1 text-center bg-gray-900` : tw`flex-1 text-center`};
`;

const Header = () => (
  <div className="flex mt-8">
    <h1
      className="flex text-gray-100 font-bold text-6xl font-mono"
      style={{ fontFamily: "Share Tech Mono" }}
    >
      <span className="text-green-500">Green</span>
      <img
        className="h-20"
        style={{ marginLeft: "-0.1em" }}
        alt="bot"
        src="/robot.png"
      />
      <span>Bot</span>
    </h1>
  </div>
);

const App: React.FC = () => {
  const { data, error } = useApi<Package>("/package");
  const [tab, setTab] = useState<TabKind>("dependencies");

  const handleTabClick = useCallback(
    (selectedTab: TabKind) => () => setTab(selectedTab),
    []
  );

  const renderContent = useCallback(() => {
    if (error) {
      const message = "Failed to load package.json";
      if (process.env.NODE_ENV === "development") {
        console.warn(message, error);
      }
      return <div>{message}</div>;
    }

    if (!data) {
      return <div>Loading...</div>;
    }

    const { name, dependencies, devDependencies, version, resolutions } = data;

    const entries = Object.entries(dependencies);
    const devEntries = devDependencies
      ? Object.entries(devDependencies)
      : undefined;

    return (
      <>
        <div className="text-center bg-green-800 px-2 py-1 my-4 rounded-lg font-bold">
          <Npm size="1rem" /> {name} - v{version}
        </div>
        <div className="bg-gray-800 rounded-lg px-3 py-2 mt-2 shadow-md mb-8 min-w-400">
          {devEntries && (
            <TabContainer>
              <Tab
                onClick={handleTabClick("dependencies")}
                active={tab === "dependencies"}
              >
                Dependencies
              </Tab>
              <Tab
                onClick={handleTabClick("devDependencies")}
                active={tab === "devDependencies"}
              >
                Dev Dependencies
              </Tab>
            </TabContainer>
          )}
          <div>
            {tab === "devDependencies" && devEntries ? (
              <Dependencies
                title="(Dev) Dependencies"
                entries={devEntries}
                resolutions={resolutions}
              />
            ) : (
              <Dependencies
                title="Dependencies"
                entries={entries}
                resolutions={resolutions}
              />
            )}
          </div>
        </div>
      </>
    );
  }, [data, error, tab, handleTabClick]);

  return (
    <Container>
      <Header />
      <div className="text-white">{renderContent()}</div>
    </Container>
  );
};

App.displayName = "App";

export default App;
