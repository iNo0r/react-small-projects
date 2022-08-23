import { useMemo, useRef } from "react";

const CompanyBtn = ({ companyName, toggleCompany, selectedCompanyName }) => {
  const isActive = useMemo(() => {
    return selectedCompanyName === companyName;
  }, [companyName, selectedCompanyName]);
  const myRef = useRef(null);

  return (
    <>
      {isActive ? (
        <button
          onClick={() => toggleCompany(companyName)}
          className={`uppercase relative group spacing tracking-wider text-lg text-cyan-400 transition-colors`}
        >
          {companyName}
          <div className=" border-b-2  border-cyan-400 absolute h-fit w-full  transition-all duration-300 lg:hidden"></div>
          <div className=" border-l-2  border-cyan-400 absolute w-fit h-full  transition-all duration-300 top-0 left-[-1rem] hidden lg:block "></div>
        </button>
      ) : (
        <button
          onClick={() => toggleCompany(companyName)}
          className={`uppercase relative group spacing tracking-wider text-lg hover:text-cyan-400 transition-colors`}
        >
          {companyName}
          <div className=" border-b-2  border-cyan-400 absolute h-fit w-full opacity-0 group-hover:opacity-100 transition-all duration-300 lg:hidden"></div>
          <div className=" border-l-2  border-cyan-400 absolute w-fit h-full opacity-0 group-hover:opacity-100 transition-all duration-300 top-0 left-[-1rem] hidden lg:block "></div>
        </button>
      )}
    </>
  );
};
export default CompanyBtn;
