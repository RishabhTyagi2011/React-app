import "./App.css";
//import About from "./component/About";
import Navbar from "./component/Navbar";
import Textform from "./component/Textform";
import React, { useState } from "react";
import Alert from "./component/Alert";
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#1a1234";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };
  return (
    <>{
    /*
      <Router>
    */}
        <Navbar
          title="TextUtils"
          about="About us"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container">
         {/* <Routes>
            <Route
              exact
              path="/"
              element={
                />
              */}
               <Textform
                  showAlert={showAlert}
                  heading="Enter the text "
                  mode={mode}
                />
           
             </div>
            {/*
            <Route exact path="/about" element={<About />} />
          </Routes>
       
      </Router>
      */}
    </>
  );
}

export default App;
