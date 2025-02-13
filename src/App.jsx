import React from "react";
import Home from "./Components/Home.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Projects from "./Components/projects.jsx";
import Sales from "./Components/sales.jsx";

function App() {
  return (
    <div className="content">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/sales" element={<Sales />} />

        {/* Add other routes here */}
      </Routes>
    </div>
  );
}

export default App;
