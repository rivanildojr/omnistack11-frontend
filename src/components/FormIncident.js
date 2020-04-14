import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import "./styles.css";

import logoImg from "./../assets/logo.svg";

export default function FormIncident({
  titleForm = "",
  descriptionForm = "",
  valueForm = "",
  titlePage = "",
  titleButton = "",
  handleSubmit,
}) {
  const [title, setTitle] = useState(titleForm);
  const [description, setDescription] = useState(descriptionForm);
  const [value, setValue] = useState(valueForm);

  const handleClick = (event) => {
    event.preventDefault();

    const data = {
      title,
      description,
      value,
    };

    handleSubmit(data);
  };

  return (
    <div className="content">
      <section>
        <img src={logoImg} alt="Be The Hero" />

        <h1>{titlePage} caso</h1>
        <p>
          Descreva o caso detalhadamente para encontrar im herói para resolver
          isso.
        </p>

        <Link className="back-link" to="/profile">
          <FiArrowLeft size={16} color="#e02041" />
          Voltar para a home
        </Link>
      </section>

      <form>
        <input
          placeholder="Título do caso"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <textarea
          placeholder="Descrição"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <input
          placeholder="Valor em reais"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />

        <button onClick={handleClick} className="button">
          {titleButton}
        </button>
      </form>
    </div>
  );
}
