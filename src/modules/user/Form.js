import React from "react";
import { useI18n } from "../../components/i18n-provider";
import "../../App.css";

function Form({ setFormData }) {
  const [i18n] = useI18n();

  return (
    <table>
      <thead>
        <tr>
          <td colSpan={2}>User Form</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{i18n.getLabel("firstName")}</td>
          <td>
            <input type="text" onChange={setFormData("firstName")} />
          </td>
        </tr>
        <tr>
          <td>{i18n.getLabel("lastName")}</td>
          <td>
            <input type="text" onChange={setFormData("lastName")} />
          </td>
        </tr>
        <tr>
          <td colSpan={2}>
            <button>{i18n.getLabel("Submit", "SUBMIT")}</button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default Form;
