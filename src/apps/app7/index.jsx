import { useEffect, useMemo, useState } from "react";

const App7 = () => {
  const [moveForward, setMoveForward] = useState(false);

  function reformItems() {
    setItems((prev) => {
      let someArr = [...prev];
      const firstItem = someArr.shift();
      someArr.push(firstItem);
      return someArr;
    });
  }

  const handleMoveForward = () => {
    setMoveForward(true);
    setTimeout(() => {
      setMoveForward(false);
      reformItems();
    }, 500);
  };
  let someArr = [1, 2, 3];
  const firstItem = someArr.shift();
  someArr.push(firstItem);
  console.log(someArr);
  const [items, setItems] = useState(["one", "two", "three"]);

  useEffect(() => {}, []);

  return (
    <div className="pn-app-container h-screen w-screen bg-slate-50 flex flex-col justify-center items-center ">
      <h1 className=" capitalize text-gray-700 text-4xl h-fit ">
        <span className=" text-red-400">/</span> <span>reviews</span>
      </h1>
      {/* <div className="pn-carousel h-28 w-28 bg-slate-300 relative overflow-hidden"> */}
      <div className="pn-carousel h-28 w-28 bg-slate-300 relative ">
        <article
          className={`h-full w-full bg-green-200 top-0 left-[-100%]   absolute 
          ${moveForward && "-translate-x-[100%]"} 
          ${moveForward && "transition-all"}`}
        >
          {items[0]}
        </article>
        <article
          className={`h-full w-full bg-yellow-200 absolute    ${
            moveForward && "-translate-x-[100%]"
          } 
          ${moveForward && "transition-all"} `}
        >
          {items[1]}
        </article>
        <article
          className={`h-full w-full bg-red-200 top-0 right-[-100%]  absolute 
          ${moveForward && "-translate-x-[100%]"} 
          ${moveForward && "transition-all"} `}
        >
          {items[2]}
        </article>
      </div>
      <button onClick={handleMoveForward}>Action</button>
    </div>
  );
};

export default App7;
