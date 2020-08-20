import React from "react";
import styled from "@emotion/styled";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { es } from "date-fns/locale";
import Link from "next/link";

const Orden = styled.li`
  padding: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e1e1e1;
`;
const DescripcionOrden = styled.div`
  flex: 0 1 600px;
  display: grid;
  grid-template-columns: 1fr 3fr;
  column-gap: 2rem;
`;

const Titulo = styled.a`
  font-size: 2rem;
  font-weight: bold;
  margin: 0;
  :hover {
    cursor: pointer;
  }
`;

const TextoDescripcion = styled.p`
  font-size: 1.6rem;
  margin: 0;
  color: #888;
`;

const Comentarios = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  div {
    display: flex;
    align-items: center;
    border: 1px solid #e1e1e1;
    padding: 0.3rem 1rem;
    margin-right: 2rem;
  }
  img {
    width: 2rem;
    margin-right: 2rem;
  }
  p {
    font-size: 1.6rem;
    margin-right: 1rem;
    font-weight: 700;
    &:last-of-type {
      margin: 0;
    }
  }
`;

const Imagen = styled.img`
  width: 200px;
`;

export default function DetallesOrden({ orden }) {
  const { nº_orden, estado, propietario, descripcion, creado, id } = orden;

  return (
    <Orden>
      <DescripcionOrden>
        <div>
          <Imagen src="https://i.ibb.co/vL9fNqX/logo.png" />
        </div>
        <div>
          <Link href="/ordenes/[id]" as={`/ordenes/${id}`}>
            <Titulo>{nº_orden}</Titulo>
          </Link>
          <TextoDescripcion>{descripcion}</TextoDescripcion>
          <p>
            Ingresado hace:{" "}
            {formatDistanceToNow(new Date(creado), { locale: es })}
          </p>
          <p>Estado: {estado}</p>
          <p>
            Propietario: <span>{propietario}</span>
          </p>
        </div>
      </DescripcionOrden>
    </Orden>
  );
}
