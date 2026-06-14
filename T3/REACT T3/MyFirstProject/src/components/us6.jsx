import { useState } from "react";
import "./us6.css";

export default function Us6() {
  const [data, setdata] = useState({});
  const hf = (e) => {
    const { name, value } = e.target;
    setdata({ ...data, [name]: value });
  };
  return (
    <div className="us6Container">
      <div className="us6Content">
        <h1 className="us6Title">User Form</h1>
        <form className="us6Form">
          <div className="us6FormGroup">
            <label className="us6Label">First Name</label>
            <input
              type="text"
              name="fname"
              className="us6Input"
              onChange={hf}
              placeholder="Enter your first name"
            />
          </div>
          <div className="us6FormGroup">
            <label className="us6Label">Last Name</label>
            <input
              type="text"
              name="lname"
              className="us6Input"
              onChange={hf}
              placeholder="Enter your last name"
            />
          </div>
        </form>
        <div className="us6Output">
          <div className="us6OutputItem">
            <span className="us6OutputLabel">First Name: </span>
            <span className="us6OutputValue">{data.fname || "N/A"}</span>
          </div>
          <div className="us6OutputItem">
            <span className="us6OutputLabel">Last Name: </span>
            <span className="us6OutputValue">{data.lname || "N/A"}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
