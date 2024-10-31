import React, { useState, useEffect } from "react";
import { getDataService } from "../services/getDataService";
import AppTitle from './AppTitle';
import InputFilter from './InputFilter';
import AppTable from './AppTable';
import "./App.css";

const App = () => {
  const [data, setData] = useState([]);
  const [fileName, setFileName] = useState("");
 
  const getData = async () => {
    const result = await getDataService(fileName);
    setData(result);
  };

  useEffect(() => {
    getData();
  }, [fileName]);

  return (
    <div className="App">
      <AppTitle title={"React Test App"} />
      <InputFilter fileName={fileName} setFileName={setFileName} />
      <AppTable data={data} />
    </div>
  );
};

export default App;
