import React from "react";

function CryptoSelector({ cryptocurrencies, selectedCrypto, onCryptoChange }) {
  return (
    <div className="p-3">
      <select
        value={selectedCrypto}
        onChange={(e) => onCryptoChange(e.target.value)}
      >
        {cryptocurrencies.map((crypto, index) => (
          <option key={index} value={crypto.symbol}>
            {crypto.symbol}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CryptoSelector;
