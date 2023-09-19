import React from "react";
import type { NextPage } from "next";

const Discussions: NextPage = () => {
  return (
    <div className="flex items-center flex-col flex-grow pt-10">
      <div className="flex-grow w-full mt-8 px-8">
        <iframe
          src="https://github.com/orgs/new-players/discussions"
          width="100%"
          height="100%"
          allow="autoplay"
        ></iframe>
      </div>
    </div>
  );
};

export default Discussions;
