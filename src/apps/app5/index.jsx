import { useReducer } from "react";
import data from "./data";
import ManuItem from "./ManuItem";
// import ManuItem from "./ManuItem";

const manuReducer = (state, action) => {
  switch (action.type) {
    case "all":
      return data;
    case "breakfast":
      return data.filter((item) => item.category === "breakfast");
    case "lunch":
      return data.filter((item) => item.category === "lunch");
    case "shakes":
      return data.filter((item) => item.category === "shakes");
    default:
      return state;
  }
};

const Tut5 = () => {
  const [manuData, dispatch] = useReducer(manuReducer, data);
  return (
    <div className="pn-main-container my-[80px] mx-[5%] flex flex-col justify-center items-center gap-y-5 ">
      <h1 className=" text-5xl  ">Our Manu</h1>
      <div className="border-b-[4px] mt-2 border-yellow-400 w-40"></div>

      <div className="pn-control-btns flex w-full max-w-md justify-around flex-wrap ">
        <button
          onClick={() => dispatch({ type: "all" })}
          className=" text-yellow-500 px-4 py-2 hover:bg-yellow-500 hover:text-white rounded transition-all duration-300"
        >
          All
        </button>
        <button
          onClick={() => dispatch({ type: "all" })}
          className=" text-yellow-500 px-4 py-2 hover:bg-yellow-500 hover:text-white rounded transition-all duration-300"
        >
          Breakfast
        </button>
        <button className=" text-yellow-500 px-4 py-2 hover:bg-yellow-500 hover:text-white rounded transition-all duration-300">
          Lunch
        </button>
        <button className=" text-yellow-500 px-4 py-2 hover:bg-yellow-500 hover:text-white rounded transition-all duration-300">
          Shakes
        </button>
      </div>
      <div className="pn-manu-list w-full  flex flex-col gap-y-7  justify-center items-center xl:flex-row xl:justify-between xl:flex-wrap">
        {manuData.map((item) => (
          <ManuItem item={item} key={item.id}></ManuItem>
        ))}
      </div>
    </div>
  );
};

export default Tut5;
