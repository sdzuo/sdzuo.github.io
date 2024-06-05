import Navbar from "./Components/navbar";
import { Outlet } from "react-router-dom";
import "./style.css";

export const Layout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
};
