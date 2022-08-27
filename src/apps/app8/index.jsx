import { useState } from "react";
import data from "./data";

const App8 = () => {
  const [pNumber, setPNumber] = useState(3);

  const [pCount, setPCount] = useState(0);

  const handlePNumberChange = (e) => {
    setPNumber(e.target.value);
  };
  const updateParagraphsCount = () => {
    setPCount(pNumber);
  };
  return (
    <div className="pn-app-container w-screen h-screen bg-blue-100  text-gray-700 fixed top-0 left-0">
      <div className="pn-main-container w-full bg-slate-100 max-w-2xl mx-[5%] mt-20 sm:mx-auto p-3 rounded shadow ">
        <h1 className=" text-2xl font-medium text-center mb-5">
          TIRED OF BORING LOREM IPSUM?
        </h1>
        <div className="flex gap-x-2 justify-center mb-10">
          <span className=" capitalize">Paragraphs:</span>
          <input
            type="number"
            value={pNumber}
            onChange={handlePNumberChange}
            className=" w-16 rounded text-center"
          />
          <button
            className=" uppercase text-sm py-1 px-3 bg-cyan-200 rounded  "
            onClick={updateParagraphsCount}
          >
            GENERATE
          </button>
        </div>
        <div className="flex flex-col gap-y-6 text-xs text-slate-500">
          {data.map((item, index) => {
            if (index < pCount)
              return <p className=" text-justify "> {item} </p>;
          })}
        </div>
      </div>
    </div>
  );
};

export default App8;
