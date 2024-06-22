import React, { useState } from "react";
import { formatDataForQuery } from "./utils";
import api from "../api/axiosConfig";
import DcaTable from "./DcaTable";

function DateInput({ selectedCrypto }) {
  const [startDate, setStartDate] = useState("");
  const [data, setData] = useState([]);
  const [showTable, setShowTable] = useState(false);

  const handleCalculate = () => {
    setShowTable(true);
  };

  // we don't need end day, we will use present day
  const handleSubmit = async (e) => {
    e.preventDefault();
    api
      .get(
        `http://localhost:5066/api/dca?CryptoType=${selectedCrypto}&StartDate=${formatDataForQuery(
          startDate
        )}&EndDate=${formatDataForQuery(new Date())}`
      )
      .then((response) => {
        // console.log("here: ", response.data);
        // setData([...response.data]);
        const formattedData = response.data.map((item) => ({
          ...item,
          investment: 100, // Add the static investment value here
        }));
        console.log("formatted data in date input", formattedData);
        setData(formattedData);
        handleCalculate();
      })
      .catch((error) => {
        console.error("Error fetching DCA value:", error);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Start Date:</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
          />
        </div>
        <div className="flex flex-col items-center justify-center p-2">
          <button
            // onClick={handleCalculate}
            className="p-2 m-3 text-white bg-purple-400 rounded-md "
            type="submit"
          >
            Calculate
          </button>
        </div>
      </form>
      {showTable && <DcaTable data={data}></DcaTable>}
    </div>
  );
}

export default DateInput;
