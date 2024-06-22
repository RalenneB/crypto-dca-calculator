export function formatDataForQuery(date) {
  let dateFormatted = new Date(date);
  return dateFormatted.toISOString().slice(0, -1); // get rid of the Z
}

export const INVESTMENT = 100; // it's always 100, static

export function getMonthOnly(date) {
  let newDate = new Date(date);
  const month = newDate.getMonth();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return monthNames[month];
}

export function calculateDca(data) {
  let totalInvestment = 0;
  let totalUnits = 0;

  return data.map((elem) => {
    totalInvestment += elem.investment;
    if (totalUnits === 0) {
      totalUnits = elem.investment / elem.cryptoPrice;
    } else totalUnits += elem.investment / elem.cryptoPrice;

    return {
      ...elem,
      dca: totalUnits.toFixed(5),
      dcaMed: (totalInvestment / totalUnits).toFixed(2),
    };
  });
}
