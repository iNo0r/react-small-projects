import Question from "./Question";
import data from "./data";

const Tut4 = () => {
  return (
    <div className="pn-app-container h-screen w-screen flex justify-center items-center p-5 bg-purple-700">
      <div className="pn-card bg-slate-100 rounded shadow-md  shadow-red-300 space-y-4 md:space-y-0  grid grid-cols-1  md:grid-cols-4 md:gap-x-4 w-full max-w-[800px] p-4">
        <h1 className=" text-xl font-semibold ">
          Questions And Answers About Login
        </h1>
        <section className=" md:col-span-3 flex flex-col space-y-4">
          {/* <article className=" border-[2px] border-solid border-emerald-800"> */}
          {data.map((item) => (
            <Question item={item} />
          ))}
        </section>
      </div>
    </div>
  );
};

export default Tut4;
