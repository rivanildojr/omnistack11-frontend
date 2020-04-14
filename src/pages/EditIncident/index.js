import React from "react";
import { useLocation, useHistory } from "react-router-dom";

import api from "./../../services/api";

import FormIncident from "../../components/FormIncident";

export default function EditIncident() {
  const { state: incident } = useLocation();
  const history = useHistory();

  const ongId = localStorage.getItem("ongId");

  async function handleEditIncident(data) {
    try {
      await api.put(`incidents/${incident.id}`, data, {
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
      <FormIncident
        titleForm={incident.title}
        descriptionForm={incident.description}
        valueForm={incident.value}
        titlePage="Atualizar"
        titleButton="Atualizar"
        handleSubmit={handleEditIncident}
      />
    </div>
  );
}
