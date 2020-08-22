import React from "react";
import Layout from "../components/layout/Layout";
import Buscar from "../components/ui/Buscar";
import { css } from "@emotion/core";
import Contacto from "../components/layout/Contacto";

export default function Home() {
  return (
    <Layout>
      <div
        css={css`
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0 auto;
          color: #ffff;
          flex-direction: column;
        `}
      >
        <h1
          css={css`
            align-items: center;
            justify-content: center;
            font-size: 50px;
            font-weight: bold;
            color: #ffff;
          `}
        >
          Portatiles Misiones
        </h1>
        <h2
          css={css`
            font-size: 50px;
            font-weight: bold;
            color: #ffff;
          `}
        >
          Bienvenidos
        </h2>
      </div>
      <div
        css={css`
          display: flex;
          justify-content: center;
          align-items: center;
          margin: auto;
        `}
      >
        <Buscar />
      </div>
      <Contacto />
    </Layout>
  );
}
