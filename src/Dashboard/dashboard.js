import React, { useState } from "react";
import DayVisitsReport from "./dayVisitsReport";
import CountriesReport from "./countriesReport";
import PageviewsReport from "./pageviewReport";
import SourceReport from "./sourceReport";
import BrowsersReport from "./browsersReport";
import DevicesReport from "./devicesReport";
import Header from "../Components/header";
import { LastRow } from "./styles";
import InputField from "../Components/input";

const DashBoard = () => {
  const [viewID, setViewID] = useState(null);

  return (
    <>
      <Header />
      {viewID ? (
        <>
          
          <CountriesReport viewID={viewID} />
         
        </>
      ) : (
        <InputField submitViewId={(id) => setViewID(id)} />
      )}
    </>
  );
};

export default DashBoard;
