import CompnayDuty from "./companyDetails/companyDuty";
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
        {data.duties.map((duty) => (
          <CompnayDuty duty={duty} />
        ))}
      </div>
    </article>
  );
};

export default CompanyDetails;
