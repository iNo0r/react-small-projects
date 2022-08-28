import { useState } from "react";

import { BsTwitch, BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
const App11 = () => {
  const [NavIsOpen, setNav] = useState(false);
  return (
    <div className="pn-app-c h-screen w-screen bg-slate-300 absolute top-0 left-0">
      <div className="pn-navbar-c flex justify-between px-6 items-center h-10 bg-slate-100 shadow ">
        <h1 className=" text-2xl ">
          Coding <span className="text-blue-400 ">Addict</span>
        </h1>

        <div className="flex gap-x-10 w-0 overflow-hidden md:w-auto">
          <div className=" flex gap-x-2 ">
            <div>Home</div>
            <div>About</div>
            <div>Projects</div>
            <div>Contact</div>
            <div>Profile</div>
          </div>

          <div className=" flex gap-x-2 items-center">
            <BsFacebook />
            <BsTwitch />
            <BsInstagram />
            <BsTwitter />
          </div>
        </div>
        <div
          className={`pn-nav-btn flex flex-col h-6 justify-between cursor-pointer group relative  transition-all w-8 ${
            NavIsOpen && "rotate-90 w-4 h-10 -translate-x-2  origin-center"
          } md:w-0 md:overflow-hidden md:hidden`}
          onClick={() => setNav(!NavIsOpen)}
        >
          <div className=" w-full rounded border-b-4 border-slate-900  "></div>
          <div className=" w-full rounded border-b-4 border-slate-900 "> </div>
          <div className=" w-full rounded border-b-4 border-slate-900 "></div>
        </div>
      </div>
      <div
        className={` flex flex-col gap-y-3 shadow  bg-slate-100 w-full overflow-hidden  h-0 transition-all  ease-out duration-500 ${
          NavIsOpen && " h-32"
        }  md:h-0  `}
      >
        <div className={`w-full max-w-xl mx-auto transition-all `}>
          <div>Home</div>
          <div>About</div>
          <div>Projects</div>
          <div>Contact</div>
          <div>Profile</div>
        </div>
      </div>
    </div>
  );
};

export default App11;
