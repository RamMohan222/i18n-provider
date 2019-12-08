import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import en from "./i18n/en.json";
import de from "./i18n/de.json";
import { I18nProvider } from "./components/i18n-provider";

const labels = { en, de };
const MainApp = () => (
  <I18nProvider labels={labels} defaultLocale="en">
    <App />
  </I18nProvider>
);

ReactDOM.render(<MainApp />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
