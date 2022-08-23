import { FaAngleDoubleRight } from "react-icons/fa";
const companyDuty = ({ duty }) => {
  return (
    <div className="flex gap-x-6 items-center ">
      <FaAngleDoubleRight className=" text-cyan-500 " />
      <p className=" text-slate-700 text-base">{duty}</p>
    </div>
  );
};

export default companyDuty;
