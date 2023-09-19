import React from "react";
import Link from "next/link";
import type { NextPage } from "next";
import { BlockieAvatar } from "~~/components/scaffold-eth";

type Project = {
  id: string;
  name: string;
  description: string;
  bannerBackgroundColor: string;
  users: string[];
};

const projects: Project[] = [
  {
    id: "1",
    name: "ERC-6551 Streams Upgrade",
    description:
      "Upgrade the Streams contract to support ERC-6551, allowing organizations to customize how they distribute their streams among several builders.",
    bannerBackgroundColor: "#FF6B61", // Example color
    users: ["0x1e55C85801a2C4F0beC57c84742a8eF3d72dE57B", "0x34aA3F359A9D614239015126635CE7732c18fDF3"],
  },
  {
    id: "2",
    name: "Infinitely Generative Comics",
    description:
      "Plays with using natural language input generative AI to create recursive comics, NFTs holding NFTs of comics pages. Includes articles and example code on how to generate renders.",
    bannerBackgroundColor: "#FF6B61", // Example color
    users: [
      "0x1e55C85801a2C4F0beC57c84742a8eF3d72dE57B",
      "0x34aA3F359A9D614239015126635CE7732c18fDF3",
      "0x41146FcA1872EB57963375e62aC9B1C5F704fAE9", // 0xbg.eth
      "0x149D46eC060e75AE188876AdB6b24024637003C7", // radarcommunity.eth
    ],
  },
  {
    id: "2",
    name: "Values-tuned TBA NPCs",
    description:
      "NPCs trained on forks of the Institute for Meaning values cards. NPCs interactable with smart contracts that behave according to a moral graph.",
    bannerBackgroundColor: "#FF6B61", // Example color
    users: [
      "0x1e55C85801a2C4F0beC57c84742a8eF3d72dE57B",
      "0x34aA3F359A9D614239015126635CE7732c18fDF3",
      "0x41146FcA1872EB57963375e62aC9B1C5F704fAE9", // 0xbg.eth
      "0x149D46eC060e75AE188876AdB6b24024637003C7", // radarcommunity.eth
    ],
  },
];

const Projects: NextPage = () => {
  return (
    <div className="flex items-center flex-col flex-grow pt-10">
      <div className="px-5 w-full">
        <h1 className="text-center mb-8 text-4xl font-bold">Example Projects (None of these are in progress)</h1>
        <div className="grid grid-cols-3 gap-4">
          {projects.map(project => (
            <div key={project.id} className="bg-white p-4 shadow rounded">
              <div
                style={{ backgroundColor: project.bannerBackgroundColor }}
                className="w-full h-48 flex items-center justify-center text-white rounded-t text-2xl"
              >
                {project.name}
              </div>
              <p>{project.description}</p>
              <div className="flex justify-center items-center mt-4 space-x-2">
                {project.users.map((user, index) => (
                  <div key={index} className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                    <Link href={"/profile/" + user} passHref>
                      <BlockieAvatar address={user} size={24} ensImage={null} />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
