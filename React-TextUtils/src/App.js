import React, {useState} from 'react'
import Navbar from "./components/Navbar"
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import About from './components/About';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {

  const [mode, setMode]=useState('light');
  const [alert, setAlert]=useState(null);

  const showAlert=(message, type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  let toggleMode=()=>{
    if(mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor="#042743";
      showAlert("Dark Mode has been enabled", "success");
      document.title="Text Utils App- Dark Mode";
    }
    else{
      setMode("light");
      document.body.style.backgroundColor="white";
      showAlert("Light Mode has been enabled", "success");
      document.title="Text Utils App- Light Mode";
    }
  }

  let changeBgColorYellow=()=>{
    document.body.style.backgroundColor="#e9e90f";
    showAlert("Yello background has been enabled", "success");
  }
  let changeBgColorCyan=()=>{
    document.body.style.backgroundColor="#26bbbb";
    showAlert("Cyan background has been enabled", "success");
  }
  let changeBgColorRed=()=>{
    document.body.style.backgroundColor="#ff6c6c";
    showAlert("Red background has been enabled", "success");
  }
  let changeBgColorPink=()=>{
    document.body.style.backgroundColor="#ffc9d3";
    showAlert("Pink background has been enabled", "success");
  }

  return (
<>
  {/*<Router>*/}
    <Navbar title="TextUtils" main="Home" mode={mode} toggle={toggleMode} bgColorYellow={changeBgColorYellow} 
    bgColorRed={changeBgColorRed} bgColorCyan={changeBgColorCyan} bgColorPink={changeBgColorPink}/>
    <Alert alert={alert}/>
  <div className="container my-3">
    {/* <Routes>
        <Route exact path="/about" element={<About mode={mode}/>}>
        </Route>
        <Route exact path="/" element={<TextForm heading="Enter the Text to Analyze" mode={mode} showAlert={showAlert}/>}></Route>
  </Routes>*/}
  <TextForm heading="Enter the Text to Analyze" mode={mode} showAlert={showAlert}/>
  </div>
  {/*</></Router>*/}
</>
  );
}

export default App;
