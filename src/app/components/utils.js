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

// export function calculateDca(investments) {
//   let totalInvested = 0;
//   let totalUnits = 0;

//   // Iterăm prin fiecare investiție din array
//   investments.forEach((investment) => {
//     // Destructurăm obiectul investiție
//     const { investedAmount, cryptoPrice } = investment;

//     // Calculăm numărul de unități achiziționate pentru această investiție
//     const unitsPurchased = investedAmount / cryptoPrice;

//     // Actualizăm totalurile
//     totalInvested += investedAmount;
//     totalUnits += unitsPurchased;

//     // Adăugăm DCA calculat în obiectul investiție
//     investment.dca = unitsPurchased.toFixed(6); // DCA este numărul de unități achiziționate în acest caz
//   });

//   // Calculăm DCA mediu
//   const averageDca = totalInvested / totalUnits;

//   // Returnăm atât array-ul actualizat cu DCA-urile calculate, cât și DCA-ul mediu
//   return { investments, averageDca };
// }
