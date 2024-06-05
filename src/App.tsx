// src/App.tsx
import "./App.css";
import Home from "./pages/home";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Projects from "./pages/projects";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;
