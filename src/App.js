import "./App.css";
import React, { useState } from "react";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
    }, 2000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "darkslategray";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };
  return (
    <>
    <BrowserRouter>
      <Alert alert={alert} />
      <Navbar
          title="Textutils"
          aboutText="About"
          mode={mode}
          toggleMode={toggleMode}
        />
        <div className="container">
      <Routes>
        <Route exact path="/" element={
          // <About/>
        <TextForm
                showAlert={showAlert}
                heading="Enter the text here to analyze"
                mode={mode}
              />
              }>
        
        </Route>
          <Route exact path="about" element={<About />} />
         
      </Routes>
        </div>
    </BrowserRouter>
    
    </>
  );
}

export default App;
