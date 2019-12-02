import React, { useCallback, useState, useEffect } from "react";

import Dependency from "./Dependency";

interface Props {
  title: string;
  entries: [string, string][];
  resolutions: Record<string, string>;
}

const Dependencies: React.FC<Props> = props => {
  const { resolutions, entries, title } = props;
  const passed = entries.filter(
    ([key, version]) => key in resolutions && version === resolutions[key]
  );

  return (
    <div>
      <div className="border-b-2 border-gray-400 py-4 px-1 flex justify-between font-mono">
        <h2 className="text-2xl text-green-400">{title}</h2>
        <div className="flex text-xl h-16 w-16 rounded-full justify-center items-center bg-green-800">
          {passed.length}/{entries.length}
        </div>
      </div>
      <div className="p-2">
        <ul>
          {entries.map(([name, version]) => (
            <Dependency
              name={name}
              version={version}
              latest={resolutions[name]}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dependencies;
