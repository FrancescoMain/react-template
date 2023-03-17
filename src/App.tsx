import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";

function App() {
  const [links, setLinks] = useState([
    { name: "Home", link: "#" },
    { name: "About", link: "#" },
    { name: "Services", link: "#" },
    { name: "Portfolios", link: "#" },
    { name: "Blog", link: "#" },
    { name: "Contact", link: "#" },
  ]);

  return <Navbar links={links}></Navbar>;
}

export default App;
