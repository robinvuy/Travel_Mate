import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

  function App() {
    return (
      <div>
        <h1>Welcome to Travel Mate</h1>
        <p> This will provide all you need for your travels:</p>
        <ul> 
          <li><a href="">Time and Date </a></li>
          <li> Weather </li>
          <li> Navigation and Maps </li>
        </ul>
      </div>
      
    );
  }
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
