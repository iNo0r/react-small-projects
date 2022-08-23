import { useEffect, useMemo, useState } from "react";

const App7 = () => {
  const [moveForward, setMoveForward] = useState(false);
  const [moveBackward, setMoveBackward] = useState(false);
  const [mainList, setMainList] = useState([
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const carouselList = useMemo(() => {
    let listLength = mainList.length;
    let lastItem = mainList[listLength - 1];
    let firstItem = mainList[0];
    // if(selectedIndex <)

    let currentSlide = mainList[selectedIndex];
    let previousSlide =
      selectedIndex === 0 ? lastItem : mainList[selectedIndex - 1];
    let nextSlide =
      selectedIndex === listLength - 1
        ? firstItem
        : mainList[selectedIndex + 1];

    return [previousSlide, currentSlide, nextSlide];
  }, [selectedIndex]);

  const [items, setItems] = useState(["one", "two", "three"]);

  // this method is used to handle incrase the index number when moving forward and backward to insure it does not go below 0 or above the array length
  function updateSelectedIndex(movement) {
    if ((movement = "forward")) {
      if (selectedIndex >= mainList.length - 1) return setSelectedIndex(0);
      return setSelectedIndex((prev) => prev + 1);
    }
    if ((movement = "backward")) {
      if (selectedIndex <= 0) return setSelectedIndex(mainList.length - 1);
      return setSelectedIndex((prev) => prev - 1);
    }
  }

  const handleMoveForward = () => {
    function reformItems() {
      setItems((prev) => {
        let someArr = [...prev];
        const firstItem = someArr.shift();
        someArr.push(firstItem);
        return someArr;
      });
    }
    setMoveForward(true);
    updateSelectedIndex("forward");
    setTimeout(() => {
      setMoveForward(false);
      reformItems();
    }, 500);
  };

  const handleMoveBackward = () => {
    function reformItems() {
      setItems((prev) => {
        let someArr = [...prev];
        const lastItem = someArr.pop();
        someArr.unshift(lastItem);
        return someArr;
      });
    }
    setMoveBackward(true);
    updateSelectedIndex("backward");
    setTimeout(() => {
      setMoveBackward(false);
      reformItems();
    }, 500);
  };
  console.log(selectedIndex);
  console.log(carouselList);
  useEffect(() => {}, [selectedIndex]);

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
          ${moveForward && "transition-all"}
          ${moveBackward && "translate-x-[100%]"} 
          ${moveBackward && "transition-all"}`}
        >
          {items[0]}
        </article>
        <article
          className={`h-full w-full bg-yellow-200 absolute    
          ${moveForward && "-translate-x-[100%]"} 
          ${moveForward && "transition-all"} 
          ${moveBackward && "translate-x-[100%]"} 
          ${moveBackward && "transition-all"}`}
        >
          {items[1]}
        </article>
        <article
          className={`h-full w-full bg-red-200 top-0 right-[-100%]  absolute 
          ${moveForward && "-translate-x-[100%]"} 
          ${moveForward && "transition-all"}
          ${moveBackward && "translate-x-[100%]"} 
          ${moveBackward && "transition-all"}
           `}
        >
          {items[2]}
        </article>
      </div>
      <button onClick={handleMoveBackward}>move backward</button>
      <button onClick={handleMoveForward}>move forward</button>
    </div>
  );
};

export default App7;
