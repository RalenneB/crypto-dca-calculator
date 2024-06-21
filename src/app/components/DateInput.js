import React from "react";

function DateInput({ startDate, onDateChange }) {
  return (
    <input
      type="date"
      value={startDate}
      onChange={(e) => onDateChange(e.target.value)}
    />
  );
}

export default DateInput;
