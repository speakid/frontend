import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import CheckBoxMain from "./components/controls/check-boxes/CheckBoxMain";
import AccordionButton from "./components/controls/AccordionButton";
import {
  Button
} from "./components/controls/Button/ButtonNew";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button>ButtonBigText</Button>
        <Button size={"Small"}>ButtonSmallText</Button>
        <Button size={"Small"} isOutlined={true}>ButtonSmallOutlinedText</Button>
        <Button>ButtonBigOutlinedText</Button>
        <CheckBoxMain onActivate={()=>alert("activate")} onDeactivate={()=>alert("deactivate")} isInactive={false}/>
        <AccordionButton onActivate={()=>alert("activate")} onDeactivate={()=>alert("deactivate")}/>
        {/*<Button> asd </Button>*/}
      </header>
    </div>
  );
}

export default App;
