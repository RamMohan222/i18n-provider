import React, { useState } from "react";
import { useI18n } from "./components/i18n-provider";
import "./App.css";

import Form from "./modules/user/Form";
import View from "./modules/user/View";

function App() {
  const [form, setForm] = useState({ firstName: "", lastName: "" });
  const [, setLocale] = useI18n();

  const setFormData = name => event => {
    setForm({ ...form, [name]: event.target.value });
  };

  return (
    <div className="App">
      <header className="App-header">
        <Form setFormData={setFormData} />
        <View form={form} />
        <span>
          <button onClick={() => setLocale("en")}>English</button>{" "}
          <button onClick={() => setLocale("de")}>French</button>
        </span>
      </header>
    </div>
  );
}

export default App;
