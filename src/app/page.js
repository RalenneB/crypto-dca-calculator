"use client";

import api from "./api/axiosConfig";
import React, { useState, useEffect } from "react";
import CryptoSelector from "./components/CryptoSelector";
import DateInput from "./components/DateInput";

export default function Home() {
  const [cryptocurrencies, setCryptocurrencies] = useState([]);
  const [selectedCrypto, setSelectedCrypto] = useState("BTC");

  useEffect(() => {
    api
      .get("/cryptocurrencies")
      .then((response) => {
        setCryptocurrencies(response.data);
      })
      .catch((error) => {
        console.error("Error fetching cryptocurrencies:", error);
      });
  }, []);

  return (
    <div className="flex flex-col items-center justify-between p-4">
      <h1 className="p-2 text-3xl">Crypto DCA Calculator</h1>
      <p>
        <em>
          This calculator is meant to show you the benefits of monthly DCA
        </em>
      </p>
      <em className="text-xs"> We start from a default 100 $</em>

      <CryptoSelector
        cryptocurrencies={cryptocurrencies}
        selectedCrypto={selectedCrypto}
        onCryptoChange={setSelectedCrypto}
      />
      <DateInput selectedCrypto={selectedCrypto}></DateInput>
    </div>
  );
}
