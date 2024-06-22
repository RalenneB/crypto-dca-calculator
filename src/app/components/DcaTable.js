import React, { useState } from "react";
import { calculateDca, getMonthOnly } from "./utils";

const DcaTable = ({ data }) => {
  const sortedData = data.sort(
    (a, b) => new Date(a.startDate) - new Date(b.startDate)
  );

  const calculatedData = calculateDca(sortedData);
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
            Date
          </th>
          <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
            Value Invested
          </th>
          <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
            Crypto Price
          </th>
          <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
            Units DCA
            {/* here it's cummulative */}
          </th>
          <th>TOTAL DCA</th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {calculatedData.map((item, index) => (
          <tr key={index}>
            <td className="px-6 py-4 whitespace-nowrap">
              {getMonthOnly(item.startDate)}
            </td>
            <td className="px-6 py-4 whitespace-nowrap">{item.investment} $</td>
            {/* static 100 $ */}
            <td className="px-6 py-4 whitespace-nowrap">
              {item.cryptoPrice} $
            </td>
            <td className="px-6 py-4 whitespace-nowrap">{item.dca}</td>
            <td className="px-6 py-4 whitespace-nowrap">{item.dcaMed}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DcaTable;
