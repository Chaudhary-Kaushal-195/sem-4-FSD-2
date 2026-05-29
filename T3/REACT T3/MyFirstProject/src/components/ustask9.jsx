import { useState } from "react";
import './ustask9.css';

export default function Ustask9() {
  const [data, setdata] = useState({});
  
  const hf = (e) => {
    const { name, value } = e.target;
    setdata({...data,[name]:value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(data.fname && data.lname && data.email && data.password && data.message && data.gender && data.city) {
      alert(`
Form Submitted Successfully!

First Name: ${data.fname}
Last Name: ${data.lname}
Email: ${data.email}
Password: ${data.password}
Message: ${data.message}
Gender: ${data.gender}
City: ${data.city}
      `);
      setdata({});
    } else {
      alert('Please fill all fields!');
    }
  }

  const handleReset = () => {
    setdata({});
  }

  return (
    <div className="ustask9Container">
      <div className="ustask9Content">
        <h1 className="ustask9Title">Registration Form</h1>
        <div className="ustask9FormContainer">
          <form className="ustask9Form" onSubmit={handleSubmit}>
            <div className="ustask9FormGroup">
              <label className="ustask9Label">First Name</label>
              <input 
                type="text" 
                name="fname" 
                className="ustask9Input" 
                onChange={hf} 
                value={data.fname || ''}
                placeholder="Enter first name"
              />
            </div>

            <div className="ustask9FormGroup">
              <label className="ustask9Label">Last Name</label>
              <input 
                type="text" 
                name="lname" 
                className="ustask9Input" 
                onChange={hf} 
                value={data.lname || ''}
                placeholder="Enter last name"
              />
            </div>

            <div className="ustask9FormGroup">
              <label className="ustask9Label">Email</label>
              <input 
                type="email" 
                name="email" 
                className="ustask9Input" 
                onChange={hf} 
                value={data.email || ''}
                placeholder="Enter email"
              />
            </div>

            <div className="ustask9FormGroup">
              <label className="ustask9Label">Password</label>
              <input 
                type="password" 
                name="password" 
                className="ustask9Input" 
                onChange={hf} 
                value={data.password || ''}
                placeholder="Enter password"
              />
            </div>

            <div className="ustask9FormGroup">
              <label className="ustask9Label">Message</label>
              <textarea 
                name="message" 
                className="ustask9Textarea" 
                onChange={hf} 
                value={data.message || ''}
                placeholder="Enter your message"
              ></textarea>
            </div>

            <div className="ustask9FormGroup">
              <label className="ustask9Label">Gender</label>
              <div className="ustask9RadioGroup">
                <label>
                  <input 
                    type="radio" 
                    name="gender" 
                    value="male" 
                    onChange={hf}
                    checked={data.gender === 'male'}
                  /> 
                  Male
                </label>
                <label>
                  <input 
                    type="radio" 
                    name="gender" 
                    value="female" 
                    onChange={hf}
                    checked={data.gender === 'female'}
                  /> 
                  Female
                </label>
              </div>
            </div>

            <div className="ustask9FormGroup">
              <label className="ustask9Label">City</label>
              <select 
                name="city" 
                className="ustask9Select" 
                onChange={hf}
                value={data.city || ''}
              >
                <option value="">Select city</option>
                <option value="newyork">New York</option>
                <option value="london">London</option>
                <option value="tokyo">Tokyo</option>
              </select>
            </div>

            <div className="ustask9ButtonGroup">
              <button type="submit" className="ustask9Button ustask9ButtonSubmit">Submit</button>
              <button type="button" className="ustask9Button ustask9ButtonReset" onClick={handleReset}>Reset</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
