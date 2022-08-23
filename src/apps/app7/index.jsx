import { useState } from "react";

const App7 = () => {
  const [move, setMove] = useState(false);
  return (
    <div className="pn-app-container h-screen w-screen bg-slate-50 flex flex-col justify-center items-center ">
      <h1 className=" capitalize text-gray-700 text-4xl h-fit ">
        <span className=" text-red-400">/</span> <span>reviews</span>
      </h1>
      <div className="pn-carousel h-28 w-28 bg-slate-300 relative overflow-hidden">
        {/* <div className="pn-carousel h-28 w-28 bg-slate-300 relative "> */}
        {/* <div className=" h-full w-full bg-green-200 top-0 left-[-100%]  absolute"></div> */}
        <div
          className={`h-full w-full bg-yellow-200 absolute transition-all  ${
            move && "-translate-x-full"
          } `}
        ></div>
        <div
          className={`h-full w-full bg-red-200 top-0 right-[-100%] transition-all  absolute ${
            move && "-translate-x-full"
          } `}
        ></div>
      </div>
      <button onClick={() => setMove(!move)}>Action</button>
    </div>
  );
};

export default App7;
