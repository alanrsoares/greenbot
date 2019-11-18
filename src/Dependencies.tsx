import React, { useCallback, useState } from "react";

import Dependency from "./Dependency";

interface Props {
  title: string;
  entries: [string, string][];
}

const Dependencies: React.FC<Props> = props => {
  const [passed, setPasses] = useState(0);

  const handleVersionCheck = useCallback((isGreen: boolean) => {
    setPasses(p => (isGreen ? p + 1 : p));
  }, []);

  return (
    <div>
      <div className="border-b-2 border-gray-400 py-4 px-1 flex justify-between font-mono">
        <h2 className="text-2xl text-green-400">{props.title}</h2>
        <div className="flex text-xl h-16 w-16 rounded-full justify-center items-center bg-green-800">
          {passed}/{props.entries.length}
        </div>
      </div>
      <div className="p-2">
        <ul>
          {props.entries.map(([name, version]) => (
            <Dependency
              name={name}
              version={version}
              onVersionCheck={handleVersionCheck}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dependencies;
