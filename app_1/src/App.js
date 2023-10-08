// App.js
import React from 'react';
import './App.css';
import Header from './components/Header';


function App() {
  return (
    <div className="App">
      <Header />
      <div id="home">Home Content</div>
      <div id="about">About Content</div>
      <div id="footer">
        <h2>Contact Information</h2>
        {/* Include your contact information here */}
      </div>
    </div>
  );
}

export default App;
