// src/App.tsx
import "./style.css";
import Home from "./pages/home";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Projects from "./pages/projects";
import Layout from "./Layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
