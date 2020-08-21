import React from "react";
import Layout from "../components/layout/Layout";
import DetallesOrden from "../components/layout/DetallesOrden";
import useOrden from "../hooks/useOrden";
import { css } from "@emotion/core";

export default function Home() {
  const { ordenes } = useOrden("creado");

  return (
    <div
      css={css`
        margin: 0;
        padding: 0;
        height: 100vh;
        display: flex;
        flex-direction: column;
      `}
    >
      <Layout>
        <div className="listado-productos">
          <div className="contenedor">
            <ul className="bg-white">
              {ordenes.map((orden) => (
                <DetallesOrden key={orden.id} orden={orden} />
              ))}
            </ul>
          </div>
        </div>
      </Layout>
    </div>
  );
}
