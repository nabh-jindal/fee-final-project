import { useNavigate } from "react-router";
import Navbar from "./Components/Navbar"
import Newsboard from "./Components/Newsboard"
import React, { useState } from "react";

const App = () => {
  const [category,setCategory]=useState("general");
  const navigate = useNavigate();
  React.useEffect(() => {
    if (!localStorage.getItem("isLoggedIn")) {
      navigate("/login");
    }
  });
  return (
    <div>
      <Navbar setCategory={setCategory}/>
      <h1>News</h1>
      <Newsboard category={category}/>
    </div>
  )
}

export default App
