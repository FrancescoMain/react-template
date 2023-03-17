import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Jumbo from "./components/jumbo/Jumbo";

function App() {
  const [links, setLinks] = useState([
    { name: "Home", link: "#" },
    { name: "About", link: "#" },
    { name: "Services", link: "#" },
    { name: "Portfolios", link: "#" },
    { name: "Blog", link: "#" },
    { name: "Contact", link: "#" },
  ]);

  return (
    <>
      <Navbar links={links}></Navbar>
      <Jumbo></Jumbo>
    </>
  );
}

export default App;
