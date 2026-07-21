import React, { useState } from 'react';
import axios from 'axios';

function Pb469() {
  const [username, setUsername] = useState('');

  const handleSignup = async(e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/signup', { username });
      alert('Welcome ' + username);
      setUsername('');
    } catch (error) { console.error('Error signing up:', error); alert('An error occurred.'); }
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSignup}>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
        <button type="submit">Sign Up</button>
        <h1>{username}</h1>
      </form>
    </div>
  );
}

export default Pb469;
