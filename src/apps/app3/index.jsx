import QuotationSVG from "./qouationSVG";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import peopleData from "./data";
import { useMemo, useState } from "react";
const Tutorial3 = () => {
  const [personIndex, setPersonIndex] = useState(0);

  const person = useMemo(() => {
    return peopleData[personIndex];
  }, [personIndex]);

  const handleMovement = (movement) => {
    if (movement) {
      if (peopleData.length - 1 === personIndex) return setPersonIndex(0);
      return setPersonIndex((prev) => prev + 1);
    }
    if (!movement) {
      if (personIndex === 0) return setPersonIndex(peopleData.length - 1);
      return setPersonIndex((prev) => prev - 1);
    }
  };

  return (
    <>
      <div className="flex flex-col bg-slate-100 h-screen w-screen justify-center  items-center px-4">
        <h1 className="pn-page-title w-fit  font-bold text-[3rem] text-slate-800 pb-4 border-b-2 border-blue-500  mb-16  ">
          Our Reviews
        </h1>
        <div className="pn-card bg-white w-full max-w-[620px] shadow-md rounded flex flex-col items-center p-7 ">
          <div className="pn-img-holder flex relative p-4 h-[182px]  w-[182px]">
            <img
              src={person.image}
              className=" h-[150px] w-[150px] object-top object-cover rounded-full  absolute z-10"
              alt=""
            />
            <div className="h-[150px] w-[150px] bg-blue-500 rounded-full absolute top-[5px] left-[30px]"></div>
            <div className=" bg-blue-400 p-2 h-fit rounded-full absolute z-20 ">
              <QuotationSVG />
            </div>
          </div>
          <div className="pn-person-name capitalize font-medium ">
            {person.name}
          </div>
          <div className="pn-person-job text-blue-500 text-xs uppercase mb-4 ">
            {person.job}
          </div>
          <div className="pn-person-text text-center text-gray-500 text-sm">
            {person.text}
          </div>
          <div className="pn-icons flex gap-5 mt-5">
            <FaChevronLeft
              className="  text-blue-300 cursor-pointer active:text-blue-500"
              onClick={() => handleMovement(true)}
            />
            <FaChevronRight
              className="text-blue-300 cursor-pointer active:text-blue-500"
              onClick={() => handleMovement(false)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Tutorial3;
