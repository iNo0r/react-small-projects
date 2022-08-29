import { useEffect, useReducer, useState } from "react";

const pageData = {
  isModal: false,
  isModalAnim: false,
  isNav: false,
  isNavAnim: false,
  testData: "some data to test ",
};

const pageReducer = (state, action) => {
  switch (action.type) {
    case "showModal":
      return { ...state, isModal: true };
    case "allowModalAnim":
      return { ...state, isModalAnim: true };
    case "showNav":
      return { ...state, isNav: true };
    case "allowNavAnim":
      console.log("is allowed");
      return { ...state, isNavAnim: true };
    case "unshowModal":
      return { ...state, isModal: false };
    case "disallowModalAnim":
      return { ...state, isModalAnim: false };
    case "unshowNav":
      return { ...state, isNav: false };
    case "disallowNavAnim":
      return { ...state, isNavAnim: false };
  }
};

const App12 = () => {
  // const [isNav, setNav] = useState(false);
  // const [isModal, setModal] = useState(false);
  // const [isAnimation, setAnimation] = useState(false);

  const [pageState, dispatch] = useReducer(pageReducer, pageData);

  // function handleModel() {
  //   setModal(true);
  //   setTimeout(() => {
  //     setAnimation(true);
  //   }, 1);
  // }
  console.log(pageState.isNavAnim);
  const handleModal = () => {
    if (!pageState.isModal) {
      dispatch({ type: "showModal" });

      setTimeout(() => {
        dispatch({ type: "allowModalAnim" });
      }, 10);
      return;
    }
    dispatch({ type: "disallowModalAnim" });
    setTimeout(() => {
      dispatch({ type: "unshowModal" });
    }, 700);
  };

  const handleNav = () => {
    if (!pageState.isNav) {
      dispatch({ type: "showNav" });

      setTimeout(() => {
        dispatch({ type: "allowNavAnim" });
      }, 10);
      return;
    }
    dispatch({ type: "disallowNavAnim" });
    setTimeout(() => {
      dispatch({ type: "unshowNav" });
    }, 700);
  };

  return (
    <div className="pn-app-c  w-screen h-screen bg-slate-300 p-6 relative flex justify-center items-center">
      <div
        className={` h-8 w-8 flex flex-col justify-between  transition-all absolute top-0 left-0 m-4 ${
          pageState.isNav && "rotate-90"
        }`}
        onClick={handleNav}
      >
        <div className=" border-b-4 border-black  rounded  "></div>
        <div className=" border-b-4 border-black  rounded  "></div>
        <div className=" border-b-4 border-black  rounded  "></div>
      </div>
      {pageState.isNav && (
        <div
          className={`pn-side-nav absolute top-0 left-0 w-96 h-full bg-blue-200 transition-all -translate-x-[100%]  ${
            pageState.isNavAnim && "translate-x-[0%] "
          }`}
        >
          <div
            className=" font-extrabold text-red-800 text-2xl absolute top-0 right-0 px-5 py-3 cursor-pointer"
            onClick={handleNav}
          >
            X
          </div>
        </div>
      )}
      <button onClick={handleModal}> open modal</button>

      {pageState.isModal && (
        <div
          className={`h-screen w-screen bg-[rgba(234,90,12,0.32)]  fixed top-0 left-0 right-0 flex justify-center items-center transition-all duration-700 opacity-0 ${
            pageState.isModalAnim && " opacity-100 "
          }`}
        >
          <div
            className="h-screen w-screen   fixed top-0 left-0 right-0 flex -z-20"
            onClick={handleModal}
          ></div>
          <div className=" w-[30%] rounded-lg p-7 h-96 bg-white flex justify-center items-center relative">
            <div
              className=" font-extrabold text-red-800 text-2xl absolute top-0 right-0 px-5 py-3 cursor-pointer"
              onClick={handleModal}
            >
              X
            </div>
            your modal
          </div>
        </div>
      )}
    </div>
  );
};

export default App12;
