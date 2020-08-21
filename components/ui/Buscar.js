import React, { useState } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import Router from "next/router";

const InputText = styled.input`
  border: none;
  border-radius: 5px;
  padding: 1rem;
  min-width: 300px;
`;

const InputSubmit = styled.button`
  height: 3rem;
  width: 3rem;
  display: block;
  background-size: 4rem;
  background-image: url("/static/img/buscar.png");
  background-repeat: no repeat;
  position: absolute;
  right: 1rem;
  top: 1px;
  background-color: white;
  border: 1px solid #fff;
  text-indent: -9999px;

  &:hover {
    cursor: pointer;
  }
`;

export default function Buscar() {
  const [busqueda, guardarBusqueda] = useState("");

  const buscarOrden = (e) => {
    e.preventDefault();

    if (busqueda.trim() === "") return;
    //redireccionar al usuario a /buscar
    Router.push({
      pathname: "/buscar",
      query: {
        q: busqueda,
      },
    });
  };
  return (
    <form
      css={css`
        position: relative;
      `}
      onSubmit={buscarOrden}
    >
      <InputText
        onChange={(e) => guardarBusqueda(e.target.value)}
        type="text"
        placeholder="Consulta el estado de tu equipo"
      />

      <InputSubmit type="submit">Buscar</InputSubmit>
    </form>
  );
}
