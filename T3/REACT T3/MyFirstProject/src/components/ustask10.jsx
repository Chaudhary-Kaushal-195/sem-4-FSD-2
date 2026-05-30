// Task-10 (US10)

// Create react app which contains form with following fields.

// • Email(Input type email)

// • Password(Input type password)

// • Confirm Password(Input type password)

//  [For Ref.: Add validation using regex to validate email id and password (Must contain at least 8 characters and must contain at least 1 uppercase, 1 lowercase and 1 digit).] Also values of password and confirm password must be same. Display email in alert box. (Using useState Hook)


import { useState } from "react";
import './ustask10.css';

export default function Ustask10() {
  const [data, setdata] = useState({});
  const [errors, setErrors] = useState({});
  
  // Regex patterns
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
  
  const hf = (e) => {
    const { name, value } = e.target;
    setdata({...data,[name]:value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newErrors = {};

    // Email validation
    if (!data.email) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(data.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Password validation
    if (!data.password) {
      newErrors.password = 'Password is required';
    } else if (!passwordRegex.test(data.password)) {
      newErrors.password = 'Password must be at least 8 characters with 1 uppercase, 1 lowercase, and 1 digit';
    }

    // Confirm password validation
    if (!data.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (data.password !== data.confirmPassword) {
      newErrors.confirmPassword = 'Passwords must be the same';
    }

    setErrors(newErrors);

    // Check if valid
    if (Object.keys(newErrors).length === 0) {
      alert(`Welcome user\n\nEmail: ${data.email}`);
      setdata({});
      setErrors({});
    }
  }



  return (
    <div className="ustask10Container">
      <div className="ustask10Content">
        <h1 className="ustask10Title">Registration Form</h1>
        <div className="ustask10FormContainer">
          <form className="ustask10Form" onSubmit={handleSubmit}>
           

           
            <div className="ustask10FormGroup">
              <label className="ustask10Label">Email</label>
              <input 
                type="email" 
                name="email" 
                className="ustask10Input" 
                onChange={hf} 
                value={data.email || ''}
                placeholder="Enter email"
              />
              {errors.email && <span className="ustask10Error">{errors.email}</span>}
            </div>

            <div className="ustask10FormGroup">
              <label className="ustask10Label">Password</label>
              <input 
                type="password" 
                name="password" 
                className="ustask10Input" 
                onChange={hf} 
                value={data.password || ''}
                placeholder="Enter password (min 8 chars, 1 uppercase, 1 lowercase, 1 digit)"
              />
              {errors.password && <span className="ustask10Error">{errors.password}</span>}
            </div>

            <div className="ustask10FormGroup">
              <label className="ustask10Label">Confirm Password</label>
              <input 
                type="password" 
                name="confirmPassword" 
                className="ustask10Input" 
                onChange={hf} 
                value={data.confirmPassword || ''}
                placeholder="Confirm password"
              />
              {errors.confirmPassword && <span className="ustask10Error">{errors.confirmPassword}</span>}
            </div>

                

           

            <div className="ustask10ButtonGroup">
              <button type="submit" className="ustask10Button ustask10ButtonSubmit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
