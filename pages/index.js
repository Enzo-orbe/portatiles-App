import React from "react";
import Layout from "../components/layout/Layout";
import Buscar from "../components/ui/Buscar";
import { css } from "@emotion/core";

export default function Home() {
  return (
    <Layout>
      <div
        css={css`
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 2rem;
          margin-bottom: 4rem;
          color: #ffff;
        `}
      >
        <h1
          css={css`
            font-size: 50px;
            font-weight: bold;
            color: #ffff;
          `}
        >
          Bienvenidos
        </h1>
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
    </Layout>
  );
}
