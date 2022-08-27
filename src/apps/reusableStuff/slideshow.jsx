// this carousel is ready to use
// How does it work?
// when clicking next or prvious, thre items will be ready to move, one in the middle and two on the side which are hidden using overflow-hidden, the same time a the button clicked a set time-out function will will be trigged after the duration of animation, in that funciton the array will of displayed will be reformed and the animation will be cancled
// important note: if you want to control transition-duration you must add it like this ${moveForward && "duration-500"}  , otherwise it going to be buggy
import { useEffect, useMemo, useState } from "react";
import listData from "./data";
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
  //   const mainList = listData;
  const [selectedIndex, setSelectedIndex] = useState(0);

  // this method is used to handle incrase the index number when moving forward and backward to insure it does not go below 0 or above the array length
  function updateSelectedIndex(movement) {
    console.log(movement);
    if (movement === "forward") {
      if (selectedIndex >= mainList.length - 1) return setSelectedIndex(0);
      return setSelectedIndex((prev) => prev + 1);
    }
    if (movement === "backward") {
      if (selectedIndex <= 0) return setSelectedIndex(mainList.length - 1);
      return setSelectedIndex((prev) => prev - 1);
    }
  }

  const handleMoveForward = () => {
    // when this is true the animation starts, and animation will be allowed
    setMoveForward(true);
    setTimeout(() => {
      // this will cancle the animation
      setMoveForward(false);
      //   this will increase the index, and carouselList is watching this value to reform the
      updateSelectedIndex("forward");
    }, 100);
  };

  const handleMoveBackward = () => {
    setMoveBackward(true);
    setTimeout(() => {
      setMoveBackward(false);
      updateSelectedIndex("backward");
    }, 100);
  };

  // this will generete a new array based on the mainList  (from the original array) of three items, for display
  const carouselList = useMemo(() => {
    let listLength = mainList.length;
    let lastItem = mainList[listLength - 1];
    let firstItem = mainList[0];
    let currentSlide = mainList[selectedIndex];
    let previousSlide =
      selectedIndex === 0 ? lastItem : mainList[selectedIndex - 1];
    let nextSlide =
      selectedIndex === listLength - 1
        ? firstItem
        : mainList[selectedIndex + 1];

    return [previousSlide, currentSlide, nextSlide];
  }, [selectedIndex]);
  console.log(selectedIndex);
  console.log(carouselList);

  return (
    <div className="pn-app-container h-screen w-screen bg-slate-50 flex flex-col justify-center items-center ">
      <h1 className=" capitalize text-gray-700 text-4xl h-fit ">
        <span className=" text-red-400">/</span> <span>reviews</span>
      </h1>
      <div className="pn-carousel h-28 w-28 bg-slate-300 relative overflow-hidden">
        <article
          className={`h-full w-full bg-yellow-200 top-0 left-[-100%]   absolute
          ${moveForward && "-translate-x-[100%]"} 
          ${moveForward && "transition-all"}
          ${moveBackward && "translate-x-[100%]"} 
          ${moveBackward && "transition-all"}`}
        >
          {carouselList[0].title}
        </article>
        <article
          className={`h-full w-full bg-yellow-200 absolute    
          ${moveForward && "-translate-x-[100%]"} 
          ${moveForward && "transition-all"} 
          ${moveBackward && "translate-x-[100%]"} 
          ${moveBackward && "transition-all"}`}
        >
          {carouselList[1].title}
        </article>
        <article
          className={`h-full w-full bg-yellow-200 top-0 right-[-100%]  absolute 
          ${moveForward && "-translate-x-[100%]"} 
          ${moveForward && "transition-all"}
          ${moveBackward && "translate-x-[100%]"} 
          ${moveBackward && "transition-all"}
           `}
        >
          {carouselList[2].title}
        </article>
      </div>
      <button onClick={handleMoveBackward}>move backward</button>
      <button onClick={handleMoveForward}>move forward</button>
    </div>
  );
};

export default App7;
