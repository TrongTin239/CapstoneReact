import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import Index from "./pages/Index/Index";
// import { store } from "./redux/configStore";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { store } from "./Redux/configStore";
import { createBrowserHistory } from "history";
import "./assets/style.scss";

import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
export const history = createBrowserHistory({ window });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <HistoryRouter history={history}>
      <Routes>
        <Route path="" element={<App />}>
          <Route index path="" element={<Index />}></Route>
        </Route>
      </Routes>
    </HistoryRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
