// ChooseMonthAndYear.js
import React from "react";
import { useDispatch } from "react-redux";
import { setDate } from "../redux/action/dateAction";

function ChooseMonthAndYear() {
  const dispatch = useDispatch();

  const handleDateChange = (e) => {
    const newDate = new Date(e.target.value);
    dispatch(
      setDate({
        year: newDate.getFullYear(),
        month: newDate.getMonth() + 1,
      })
    );
  };

  return (
    <div>
      <h3>選擇月份</h3>
      <input type="month" id="ChooseDate" onChange={handleDateChange} />
    </div>
  );
}

export default ChooseMonthAndYear;
