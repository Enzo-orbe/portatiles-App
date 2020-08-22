import React from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import format from "date-fns/format";
import { es } from "date-fns/locale";
import Link from "next/link";

const Articulo = styled.article`
  margin-bottom: 8px;
  background-color: #fff;
  border: 1px solid #a19997;
  display: grid;
  justify-content: space-between;
  flex-direction: column;
  border-radius: 5px;
  box-shadow: -6px 7px 34px 0px rgba(36, 36, 36, 1);
`;

const DescripcionOrden = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px 20px;
  margin-bottom: 5px;
`;

const Titulo = styled.a`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin: 0;
  :hover {
    cursor: pointer;
  }
`;

const TextoDescripcion = styled.p`
  font-size: 1.6rem;
  margin: 0;
  color: black;
  font-weight: bold;
`;

const Imagen = styled.img`
  width: 200px;
`;

export default function DetallesOrden({ orden }) {
  const { nº_orden, estado, propietario, descripcion, creado, id } = orden;

  return (
    <Articulo>
      <DescripcionOrden>
        <div>
          <Imagen src="https://i.ibb.co/vL9fNqX/logo.png" />
        </div>
        <div>
          <Link href="/ordenes/[id]" as={`/ordenes/${id}`}>
            <Titulo>Nº de Orden: {nº_orden}</Titulo>
          </Link>
          <TextoDescripcion> Descripcion: {descripcion}</TextoDescripcion>
          <p>
            Ingresado el:{" "}
            {format(new Date(creado), "dd/MM/yyyy", { locale: es })}
          </p>
          <p>
            {" "}
            <span
              css={css`
                font-weight: bold;
              `}
            >
              Estado:
            </span>{" "}
            {estado}
          </p>
          <p>
            Propietario: <span>{propietario}</span>
          </p>
        </div>
      </DescripcionOrden>
    </Articulo>
  );
}
