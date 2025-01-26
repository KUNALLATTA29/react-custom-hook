import React, { useState } from "react";

export default function useLocalHost(key, initialvalue) {
  const [value, setValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialvalue;
    } catch (err) {
      console.log(err);
      return initialvalue;
    }
  });

  const setitem = (value) => {
    try {
      setValue(value);
      localStorage.setItem(key, Json.stringify(value));
    } catch (err) {
      console.log(err);
    }
  };

  const removeitem = () => {
    try {
      localStorage.removeItem(key);
      setValue(undefined);
    } catch (err) {
      console.log(err);
    }
  };
  return [value, setitem, removeitem];
}
