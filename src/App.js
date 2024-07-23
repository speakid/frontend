import * as React from "react";
import RegisterPage from "./pages/authorization/RegisterPage";
import LoginPage from "./pages/authorization/LoginPage";
import * as ReactDOM from "react-dom/client";
import AuthorizationBase from "./pages/authorization/AuthorizationBase";
import RecoveryPage from "./pages/authorization/RecoveryPage";
import {createBrowserRouter, RouterProvider, Swi} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <RegisterPage/>
    </div>
  );
}

export default App;
