// actions/dateActions.js
export const setDate = (date) => {
  return {
    type: "SET_DATE",
    payload: date,
  };
};

export default setDate;
