import { useEffect, useMemo, useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import _ from "lodash";

const URL = "https://course-api.com/react-tabs-project";
const App6 = () => {
  const [usersData, setUsersData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const fetchData = async (data, setter, url) => {
    const response = await fetch(url);
    const newData = await response.json();
    setter(newData);
  };

  const companis = useMemo(() => {
    if (_.isEmpty(usersData)) return;
    return [...new Set(usersData.map((item) => item.company))];
  }, [usersData]);

  useEffect(() => {
    // fetchData("", setUsersData, URL);
  }, []);
  useEffect(() => {
    console.log(usersData);
  }, [usersData]);
  isLoading && <div> Loading </div>;

  return (
    <div className="h-screen w-screen bg-slate-100 py-[80px] ">
      <section className="pn-app-container w-[90vw] max-w-5xl  mx-auto  flex flex-col items-center">
        <h1 className=" text-3xl font-semibold mb-5"> Experiences </h1>
        <div className=" border-b-4 border-blue-500 w-32 mb-8 "></div>

        <div className="pn-content-c flex flex-col items-center lg:flex-row lg:justify-between">
          <div className="pn-btns-container  flex gap-x-7 lg:flex-col lg:self-start lg:gap-y-4 lg:items-start lg:w-2/12 ">
            <button className=" uppercase relative group spacing tracking-wider text-lg hover:text-cyan-400 transition-colors ">
              Tommy
              <div className=" border-b-2  border-cyan-400 absolute h-fit w-full opacity-0 group-hover:opacity-100 transition-all duration-300 lg:hidden"></div>
              <div className=" border-l-2  border-cyan-400 absolute w-fit h-full opacity-0 group-hover:opacity-100 transition-all duration-300 top-0 left-[-1rem] hidden lg:block "></div>
            </button>
            <button className=" uppercase relative group spacing tracking-wider text-lg hover:text-cyan-400 transition-colors">
              bigdrop
              <div className=" border-b-2  border-cyan-400 absolute h-fit w-full opacity-0 group-hover:opacity-100 transition-all duration-300 lg:hidden"></div>
              <div className=" border-l-2  border-cyan-400 absolute w-fit h-full opacity-0 group-hover:opacity-100 transition-all duration-300 top-0 left-[-1rem] hidden lg:block "></div>
            </button>
            <button className=" uppercase relative group spacing tracking-wider text-lg hover:text-cyan-400 transition-colors">
              cuker
              <div className=" border-b-2  border-cyan-400 absolute h-fit w-full opacity-0 group-hover:opacity-100 transition-all duration-300 lg:hidden"></div>
              <div className=" border-l-2  border-cyan-400 absolute w-fit h-full opacity-0 group-hover:opacity-100 transition-all duration-300 top-0 left-[-1rem] hidden lg:block "></div>
            </button>
          </div>
          <div className="pn-articles-list lg:w-10/12 ">
            <article className=" w-[90%] flex flex-col gap-y-4 mx-auto">
              <h3 className=" text-2xl uppercase font-semibold tracking-wider">
                Tommy
              </h3>
              <h4 className="text-base px-3 py-2 w-fit  text-slate-500 rounded bg-slate-300">
                Full Stack Web Developer
              </h4>
              <p className="pn-job-date text-slate-400">
                December 2015 - Present{" "}
              </p>
              <div className="pn-person-info p-4 flex flex-col gap-y-4">
                <div className="flex gap-x-6 items-center">
                  <FaAngleDoubleRight className=" text-cyan-500 " />
                  <p className=" text-slate-700 text-base">
                    Tote bag sartorial mlkshk air plant vinyl banjo lumbersexual
                    poke leggings offal cold-pressed brunch neutra. Hammock
                    photo booth live-edge disrupt.
                  </p>
                </div>
                <div className="flex gap-x-6 items-center">
                  <FaAngleDoubleRight className=" text-cyan-500 " />
                  <p className=" text-slate-700 text-base">
                    Post-ironic selvage chambray sartorial freegan meditation.
                    Chambray chartreuse kombucha meditation, man bun four dollar
                    toast street art cloud bread live-edge heirloom.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App6;
