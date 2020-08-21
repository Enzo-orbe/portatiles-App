import React from "react";
import { css } from "@emotion/core";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      css={css`
        align-self: center;
        width: 100%;
      `}
    >
      <p
        css={css`
          align-items: center;
          text-align: center;
          color: #ffff;
          background-color: rgba(14, 14, 47, 100);
          margin-bottom: 0;
          padding: 1rem;
        `}
      >
        Portatiles-Misiones. Todos los derechos reservados {year} &copy;{" "}
      </p>
    </footer>
  );
}
