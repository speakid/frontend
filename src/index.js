import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {routeList} from "./routing/Routes";
import {Provider} from "react-redux";
import {store} from "./store/Store";
import * as Sentry from "@sentry/react";
import Config from "./Config";

Sentry.init({
  dsn: Config.SENTRY_DSN,
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration(),
  ],
  // Tracing
  tracesSampleRate: 1.0, //  Capture 100% of the transactions
  // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
  tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});



const router = createBrowserRouter(routeList.map(el=>{return {path: el.path, element: el.element}}), {basename: Config.PUBLIC_URL})

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
    <Provider store={store}>
        <RouterProvider router={router}/>
    </Provider>
  // </React.StrictMode>
);


reportWebVitals();
