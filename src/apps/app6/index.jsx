import { useCallback, useEffect, useMemo, useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import _ from "lodash";
import CompanyBtn from "./companyButton";
import CompanyDetails from "./companyDetails";
import { fetchData } from "./actions";

const URL = "https://course-api.com/react-tabs-project";
const App6 = () => {
  const [isReady, setReady] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [usersData, setUsersData] = useState([]);
  const [selectedCompanyName, setSelectedCompanyName] = useState("");

  // to produce a computed list of companies
  const companis = useMemo(() => {
    if (_.isEmpty(usersData)) return;

    return [...new Set(usersData.map((item) => item.company))];
  }, [usersData]);

  const toggleCompany = (companyName) => {
    setSelectedCompanyName(companyName);
  };

  // to produce a reactive selected company object
  const selectedCompany = useMemo(() => {
    if (_.isEmpty(usersData)) return {};
    if (_.isEmpty(selectedCompanyName)) return usersData[0];
    return usersData.find((company) => selectedCompanyName == company.company);
  }, [selectedCompanyName, usersData]);

  useEffect(() => {
    fetchData("", setUsersData, URL).then(() => {
      setReady(true);
    });
  }, []);

  isLoading && <div> Loading </div>;
  return (
    isReady && (
      <div className="h-screen w-screen bg-slate-100 py-[80px] ">
        <section className="pn-app-container w-[90vw] max-w-5xl  mx-auto  flex flex-col items-center">
          <h1 className=" text-3xl font-semibold mb-5"> Experiences </h1>
          <div className=" border-b-4 border-blue-500 w-32 mb-8 "></div>

          <div className="pn-content-c flex flex-col items-center lg:flex-row lg:justify-between">
            <div className="pn-btns-container  flex gap-x-7 lg:flex-col lg:self-start lg:gap-y-4 lg:items-start lg:w-2/12 ">
              {companis.map((companyName) => (
                <CompanyBtn
                  toggleCompany={toggleCompany}
                  companyName={companyName}
                  key={companyName}
                />
              ))}
            </div>
            <div className="pn-articles-list lg:w-10/12 ">
              {!_.isEmpty(selectedCompany) && (
                <CompanyDetails data={selectedCompany} />
              )}
            </div>
          </div>
        </section>
      </div>
    )
  );
};

export default App6;
