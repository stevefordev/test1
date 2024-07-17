// client/src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api/hello')
      .then(response => response.json())
      .then(data => setMessage(data.message));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>{message}</h1>
      </header>
      <form>
        <input type="text" placeholder="Enter some text" />
        <button type="submit">Submit</button>
      </form>
      <div className="response">
        This is where the response from the server will be displayed.
      </div>
    </div>
  );
}

export default App;
