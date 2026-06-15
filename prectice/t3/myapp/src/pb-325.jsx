import { useState } from "react";
const Hook4 = () => {
  const [cb, setCb] = useState("");
  const handleChange = (e) => {
    setCb(e.target.value);
  };
  const handleChange1 = (e) => {
    setCb(e.target.value);
  };
  return (
    <div>
      <input type="radio" value="Male" onChange={handleChange} name="gender" />
      Male
      <input
        type="radio"
        value="Female"
        onChange={handleChange1}
        name="gender"
      />
      Female
      <p>{cb}</p>
    </div>
  );
};
export default Hook4;
