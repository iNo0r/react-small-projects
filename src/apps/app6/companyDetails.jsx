import { FaAngleDoubleRight } from "react-icons/fa";
const CompanyDetails = ({ data }) => {
  return (
    <article className=" w-[90%] flex flex-col gap-y-4 mx-auto">
      <h3 className=" text-2xl uppercase font-semibold tracking-wider">
        {data.company}
      </h3>
      <h4 className="text-base px-3 py-2 w-fit  text-slate-500 rounded bg-slate-300">
        {data.title}
      </h4>
      <p className="pn-job-date text-slate-400">{data.dates} </p>
      <div className="pn-person-info p-4 flex flex-col gap-y-4">
        <div className="flex gap-x-6 items-center">
          <FaAngleDoubleRight className=" text-cyan-500 " />
          <p className=" text-slate-700 text-base">
            Tote bag sartorial mlkshk air plant vinyl banjo lumbersexual poke
            leggings offal cold-pressed brunch neutra. Hammock photo booth
            live-edge disrupt.
          </p>
        </div>
        <div className="flex gap-x-6 items-center">
          <FaAngleDoubleRight className=" text-cyan-500 " />
          <p className=" text-slate-700 text-base">
            Post-ironic selvage chambray sartorial freegan meditation. Chambray
            chartreuse kombucha meditation, man bun four dollar toast street art
            cloud bread live-edge heirloom.
          </p>
        </div>
      </div>
    </article>
  );
};

export default CompanyDetails;
