import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {routeList} from "./routing/Routes";
import {Provider} from "react-redux";
import {store} from "./store/Store";

const router = createBrowserRouter(routeList.map(el=>{return {path: el.path, element: el.element}}))

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
  // </React.StrictMode>
);


reportWebVitals();
