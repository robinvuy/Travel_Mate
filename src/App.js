import React from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from "./backend/components/Home";
import Clock from "./backend/components/Clock";
import Weather from "./backend/components/Weather";

  function App() {  
    return (
      <Routes>
        <Route path="/" element={<Home />}  />
        <Route path="/clock" element={<Clock />} />
        <Route path="/weather" element={<Weather />} />
      </Routes>
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
