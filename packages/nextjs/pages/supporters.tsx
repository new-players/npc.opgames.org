import React from "react";
import type { NextPage } from "next";

const Supporters: NextPage = () => {
  const supportersList = [
    { name: "OP Games", amount: "10.00 ETH" },
    { name: "Jane Smith", amount: "0.1 ETH" },
    { name: "Alice Johnson", amount: "0.2 ETH" },
    { name: "Bob Wilson", amount: "0.5 ETH" },
  ];

  // Calculate the total amount
  const totalAmount = supportersList.reduce((acc, supporter) => {
    const amountNumber = parseFloat(supporter.amount.replace("ETH", ""));
    return acc + amountNumber;
  }, 0);

  return (
    <div className="m-auto w-[100%] max-w-[42rem]">
      <h1 className="text-center mb-8 text-4xl font-bold p-4">Supporters Page (mockup)</h1>
      <ul>
        {supportersList.map((supporter, index) => {
          const isLastElement = index === supportersList.length - 1;
          return (
            <li className={`flex flex-col gap-1 p-6 ${!isLastElement ? "border-b-2" : ""}`} key={index}>
              <div className="flex flex-row justify-between px-2">
                <div className="w-1/3">
                  <div className="font-bold">{supporter.name}</div>
                  <div className="font-normal mt-2">
                    Contributed to streams: <br />
                    <strong>{supporter.amount}</strong>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      <div className="flex justify-between mt-4 p-6 border-t-2">
        <span className="font-bold">Total Amount:</span>
        <span className="font-bold">{totalAmount.toFixed(2)} ETH</span>
      </div>
    </div>
  );
};

export default Supporters;
