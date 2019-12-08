import React from "react";
import { useI18n } from "../../components/i18n-provider";
import "../../App.css";

function View({ form }) {
  const [i18n] = useI18n();

  return (
    <table>
      <thead>
        <tr>
          <td colSpan={2}>User Details</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{i18n.getLabel("firstName")}:</td>
          <td>{form.firstName}</td>
        </tr>
        <tr>
          <td>{i18n.getLabel("lastName")}:</td>
          <td>{form.lastName}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default View;
