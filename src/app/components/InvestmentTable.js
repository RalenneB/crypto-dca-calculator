import React from "react";

function InvestmentTable({ investmentData }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Invested Amount</th>
          <th>Cryptocurrency Amount</th>
          <th>Value Today</th>
        </tr>
      </thead>
      <tbody>
        {/* {investmentData.map((data, index) => (
          <tr key={index}>
            <td>{data.date}</td>
            <td>{data.investedAmount}</td>
            <td>{data.cryptoAmount}</td>
            <td>{data.valueToday}</td>
          </tr>
        ))} */}
      </tbody>
    </table>
  );
}

export default InvestmentTable;
