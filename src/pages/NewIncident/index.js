import React from "react";

import FormIncident from "../../components/FormIncident";
import { useHistory } from "react-router-dom";

import api from "./../../services/api";

export default function NewIncident() {
  const history = useHistory();
  const ongId = localStorage.getItem("ongId");

  async function handleNewIncident(data) {
    try {
      await api.post("incidents", data, {
        headers: {
          Authorization: ongId,
        },
      });

      history.push("/profile");
    } catch (error) {
      alert("Erro ao cadastrar caso, tente novamente.");
    }
  }

  return (
    <div className="new-incident-container">
      <div className="new-incident-container">
        <FormIncident
          titlePage="Cadastrar novo"
          titleButton="Cadastrar"
          handleSubmit={handleNewIncident}
        />
      </div>
    </div>
  );
}
