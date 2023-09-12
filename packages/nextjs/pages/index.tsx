import Link from "next/link";
import type { NextPage } from "next";
import {
  // BugAntIcon,
  CircleStackIcon,
  HeartIcon,
  MagnifyingGlassIcon,
  RssIcon,
  SparklesIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import { MetaHeader } from "~~/components/MetaHeader";

const Home: NextPage = () => {
  return (
    <>
      <MetaHeader />
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5">
          <h1 className="text-center mb-8">
            <span className="block text-2xl mb-2">Welcome to the</span>
            <span className="block text-4xl font-bold">New Players Cooperative</span>
          </h1>
          <div className="max-w-[42rem] m-auto w-[100%] bg-secondary px-8 py-4 rounded-2xl">
            <p>
              We are a group of builders, artists and dreamers using <strong>ERC-6551 and AI</strong> to create more
              playful futures.
            </p>
            <p>
              The future of games is <u>already</u> non-playable characters (NPCs) with AI. As our new AI friends start
              joining the servers, what kinds of games should we be building?
            </p>
            <p>
              Read <strong>The New Players</strong> brief to learn more 👇
            </p>
          </div>
          {/*
          <p className="text-center text-lg">
            Get started by editing{" "}
            <code className="italic bg-base-300 text-base font-bold max-w-full break-words break-all inline-block">
              packages/nextjs/pages/index.tsx
            </code>
          </p>
          <p className="text-center text-lg">
            Edit your smart contract{" "}
            <code className="italic bg-base-300 text-base font-bold max-w-full break-words break-all inline-block">
              YourContract.sol
            </code>{" "}
            in{" "}
            <code className="italic bg-base-300 text-base font-bold max-w-full break-words break-all inline-block">
              packages/hardhat/contracts
            </code>
          </p>
          */}
        </div>

        <div className="flex-grow w-full mt-8 px-8">
          <iframe
            src="https://drive.google.com/file/d/1AlIeO6PrUPa2orDKpQlO4edmWl6l_nVV/preview"
            width="100%"
            height="480px"
            allow="autoplay"
          ></iframe>
        </div>

        <div className="flex-grow bg-base-300 w-full mt-16 px-8 py-12">
          <div className="flex justify-center items-center gap-12 flex-col sm:flex-row">
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <CircleStackIcon className="h-8 w-8 fill-secondary" />
              <p>
                Members of the cooperative are funded via{" "}
                <Link href="/streams" passHref className="link">
                  Streams
                </Link>
                , a new way to fund open source projects.
              </p>

              {/*
              <BugAntIcon className="h-8 w-8 fill-secondary" />
              <p>
                Tinker with the smart contract using the{" "}
                <Link href="/debug" passHref className="link">
                  Debug Contract
                </Link>{" "}
                tab.
              </p>
        */}
            </div>
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <UserGroupIcon className="h-8 w-8 fill-secondary" />
              <p>
                We believe in playing and building games in co-op mode.<br></br>
                <br></br>
                <Link href="/projects" passHref className="link">
                  Projects
                </Link>{" "}
                are open-sourced, and members imagine the future together on the{" "}
                <Link href="/roadmap" passHref className="link">
                  Roadmap
                </Link>{" "}
                and on public{" "}
                <Link href="/discussions" passHref className="link">
                  Discussions.
                </Link>
              </p>
            </div>
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <HeartIcon className="h-8 w-8 fill-secondary" />
              <p>
                We are building the future of play with an awesome group of{" "}
                <Link href="/supporters" passHref className="link">
                  Supporters,
                </Link>{" "}
                companies and individuals who believe in our mission.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
