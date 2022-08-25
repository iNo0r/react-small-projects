// this carousel is ready to use
// How does it work?
// when clicking next or prvious, thre items will be ready to move, one in the middle and two on the side which are hidden using overflow-hidden, the same time a the button clicked a set time-out function will will be trigged after the duration of animation, in that funciton the array will of displayed will be reformed and the animation will be cancled

import { useCallback, useEffect, useMemo, useState } from "react";
import listData from "./data";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
const App7 = () => {
  const transitionDuration = 500; //75, 100, 150, 200,300, 500, 700, 1000
  const [moveForward, setMoveForward] = useState(false);
  const [moveBackward, setMoveBackward] = useState(false);

  const mainList = listData;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [backUp, setBackup] = useState([]);

  // this method is used to handle incrase the index number when moving forward and backward to insure it does not go below 0 or above the array length
  const updateSelectedIndex = (movement) => {
    console.log(movement);

    if (movement === "forward") {
      console.log("the seelectedIndex", selectedIndex);

      console.log(
        `(${selectedIndex} < ${mainList.length - 1})`,
        selectedIndex < mainList.length - 1
      );
      if (selectedIndex < mainList.length - 1)
        return setSelectedIndex((prev) => prev + 1);

      return setSelectedIndex(0);
    }
    if (movement === "backward") {
      if (selectedIndex === 0) return setSelectedIndex(mainList.length - 1);
      return setSelectedIndex((prev) => prev - 1);
    }
  };

  const handleMoveForward = useCallback(() => {
    // console.count("counter");
    // when this is true the animation starts, and animation will be allowed
    setMoveForward(true);
    setTimeout(() => {
      // this will cancle the animation
      setMoveForward(false);
      //   this will increase the index, and carouselList is watching this value to reform the
      updateSelectedIndex("forward");
    }, transitionDuration);
  });

  const handleMoveBackward = () => {
    setMoveBackward(true);
    setTimeout(() => {
      setMoveBackward(false);
      updateSelectedIndex("backward");
    }, transitionDuration);
  };

  // this will generete a new array based on the mainList  (from the original array) of three items, for display
  const carouselList = useMemo(() => {
    if (selectedIndex < 0 || selectedIndex > listData.length - 1) return backUp;
    let listLength = mainList.length;
    let lastItem = mainList[listLength - 1];
    // console.log("last item ", lastItem);
    let firstItem = mainList[0];
    let currentSlide = mainList[selectedIndex];
    // console.log("last item ", mainList[selectedIndex - 1]);
    let previousSlide =
      selectedIndex === 0 ? lastItem : mainList[selectedIndex - 1];
    let nextSlide =
      selectedIndex === listLength - 1
        ? firstItem
        : mainList[selectedIndex + 1];

    setBackup([previousSlide, currentSlide, nextSlide]);

    return [previousSlide, currentSlide, nextSlide];
  }, [selectedIndex]);
  console.log("number", selectedIndex);

  console.log(carouselList);

  useEffect(() => {
    const interval = setInterval(() => {
      handleMoveForward();
      // console.log("hola");
    }, 2000);
    return () => {
      // console.log("mola");
      return clearInterval(interval);
    };
  });

  return (
    <div className="pn-app-container h-screen w-screen bg-slate-50 flex flex-col  items-center pt-[5rem] px-[3%] ">
      <h1 className=" capitalize text-gray-700 text-4xl h-fit mb-8 ">
        <span className=" text-red-400 ">/</span> {"  "} <span>reviews</span>
      </h1>
      <div className="pn-carousel h-96 w-full max-w-3xl bg-slate-100 relative overflow-hidden">
        <article
          className={`h-full w-full  top-0 left-[-100%]   absolute
         flex flex-col justify-center items-center dur
         ${moveForward && "duration-" + transitionDuration}   
         ${moveBackward && "duration-" + transitionDuration}   
          ${moveForward && "-translate-x-[100%]"} 
          ${moveForward && "transition-all"}
          ${moveBackward && "translate-x-[100%]"} 
          ${moveBackward && "transition-all"}`}
        >
          <div
            className={`pn-user-img  h-40 w-40 rounded-full  bg-cover bg-center flex bg-red-400 bg-clip-padding border-[5px] border-slate-200 shadow-xl mb-8 `}
            style={{ backgroundImage: `url(${carouselList[0].image})` }}
          ></div>
          <h2 className=" text-lg font-medium uppercase text-red-900">
            {carouselList[0].name}
          </h2>
          <h4 className=" text-gray-700 capitalize mb-8 ">
            {carouselList[0].title}
          </h4>
          <p className=" text-slate-500  text-center text-sm ">
            {carouselList[0].quote}
          </p>
        </article>
        <article
          className={`h-full w-full  absolute 
          flex flex-col justify-center items-center
          ${moveForward && "duration-" + transitionDuration}   
          ${moveBackward && "duration-" + transitionDuration}   
          ${moveForward && "-translate-x-[100%]"} 
          ${moveForward && "transition-all"} 
          ${moveBackward && "translate-x-[100%]"} 
          ${moveBackward && "transition-all"}
            `}
        >
          <div
            className={`pn-user-img  h-40 w-40 rounded-full  bg-cover bg-center flex bg-red-400 bg-clip-padding border-[5px] border-slate-200 shadow-xl mb-8 `}
            style={{ backgroundImage: `url(${carouselList[1].image})` }}
          ></div>
          <h2 className=" text-lg font-medium uppercase text-red-900">
            {carouselList[1].name}
          </h2>
          <h4 className=" text-gray-700 capitalize mb-8 ">
            {carouselList[1].title}
          </h4>
          <p className=" text-slate-500  text-center text-sm ">
            {carouselList[1].quote}
          </p>
        </article>
        <article
          className={`h-full w-full  top-0 right-[-100%]  absolute 

          flex flex-col justify-center items-center
          ${moveForward && "duration-" + transitionDuration}   
          ${moveBackward && "duration-" + transitionDuration}    
          ${moveForward && "-translate-x-[100%]"} 
          ${moveForward && "transition-all"}
          ${moveBackward && "translate-x-[100%]"} 
          ${moveBackward && "transition-all"}
           `}
        >
          <div
            className={`pn-user-img  h-40 w-40 rounded-full  bg-cover bg-center flex bg-red-400 bg-clip-padding border-[5px] border-slate-200 shadow-xl mb-8 `}
            style={{ backgroundImage: `url(${carouselList[2].image})` }}
          ></div>
          <h2 className=" text-lg font-medium uppercase text-red-900">
            {carouselList[2].name}
          </h2>
          <h4 className=" text-gray-700 capitalize mb-8 ">
            {carouselList[2].title}
          </h4>
          <p className=" text-slate-500  text-center text-sm ">
            {carouselList[2].quote}
          </p>
        </article>
        <button
          onClick={handleMoveBackward}
          className=" bg-slate-400 p-2 rounded absolute top-[50%] text-white  "
        >
          <FiChevronLeft />
        </button>
        <button
          onClick={handleMoveForward}
          className=" bg-slate-400 p-2 rounded absolute top-[50%] right-0 text-white  "
        >
          <FiChevronRight />
        </button>
        {/* <button onClick={() => Test()}>add</button> */}
      </div>
    </div>
  );
};

export default App7;
