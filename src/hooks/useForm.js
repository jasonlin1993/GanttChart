import { useState } from "react";

const useForm = (initValue) => {
  const [values, setValues] = useState(initValue);
  const setFormState = (e) => {
    if (e.target && e.target.name) {
      setValues({
        ...values,
        [e.target.name]: e.target.value,
      });
    }
  };

  return [values, setFormState];
};

export default useForm;
