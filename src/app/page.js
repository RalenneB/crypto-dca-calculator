"use client";
// import Image from "next/image";
import api from "./api/axiosConfig";
// import CryptoSelector from "./components/CryptoSelector";
import React, { useState, useEffect } from "react";
import CryptoSelector from "./components/CryptoSelector";
import InvestmentTable from "./components/InvestmentTable";
import DateInput from "./components/DateInput";

export default function Home() {
  const [cryptocurrencies, setCryptocurrencies] = useState([]);
  const [selectedCrypto, setSelectedCrypto] = useState("BTC");

  const [investmentData, setInvestmentData] = useState([]);

  useEffect(() => {
    api
      .get("/cryptocurrencies")
      .then((response) => {
        // const curr = response.data[0].symbol;
        setCryptocurrencies(response.data);
        // console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching cryptocurrencies:", error);
      });
  }, []);

  // example request, pay attention it's HTTP not HTTPS!
  // http://localhost:5066/api/dca?CryptoType=BTC&StartDate=2024-06-22T07%3A28%3A25.867&EndDate=2024-06-22T07%3A28%3A25.867&InvestedAmount=0&CryptoPrice=232

  // const handleCalculate = () => {
  //   console.log(startDate);
  //   api
  //     .get(`/dca?CryptoType=${selectedCrypto}&StartDate=${startDate}&EndDate`)
  //     .then((response) => {
  //       setInvestmentData(response.data);
  //     })
  //     .catch((error) => {
  //       console.error("Error calculating DCA:", error);
  //     });
  // };

  return (
    <div className="flex flex-col items-center justify-between p-4">
      <h1 className="p-2 text-3xl">Crypto DCA Calculator</h1>
      <p>
        <em>
          This calculator is meant to show you the benefits of monthly DCA
        </em>
        <em>We start from a default 100 $</em>
      </p>
      {/* <CryptoSelector
        cryptocurrencies={cryptocurrencies}
        selectedCrypto={selectedCrypto}
        onCryptoChange={setSelectedCrypto}
      /> */}
      {/* <DateInput startDate={startDate} onDateChange={setStartDate} /> */}
      {/* <button onClick={handleCalculate}>Calculate</button> */}

      <CryptoSelector
        cryptocurrencies={cryptocurrencies}
        selectedCrypto={selectedCrypto}
        onCryptoChange={setSelectedCrypto}
      />
      <DateInput selectedCrypto={selectedCrypto}></DateInput>

      {/* <InvestmentTable investmentData={investmentData} /> */}
    </div>
  );
}
//  export default Home;
