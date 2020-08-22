import React, { useContext } from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import Boton from "../ui/Boton";
import Navegacion from "./Navegacion";
import { FirebaseContext } from "../../firebase";

const ContenedorHeader = styled.div`
  display: flex;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
`;

const Logo = styled.a`
  color: #ffffff;
  font-size: 4rem;
  line-height: 0;
  font-weight: 700;
  font-family: "Roboto", serif;
  margin-right: 2rem;
  cursor: pointer;
`;

export default function Header() {
  const { usuario, firebase } = useContext(FirebaseContext);
  return (
    <header
      css={css`
        border-bottom: 2px solid #b1afaf;
        padding: 1rem 0;
        background-color: rgba(14, 14, 47, 100);
      `}
    >
      <ContenedorHeader>
        <div
          css={css`
            display: flex;
            align-items: center;
          `}
        >
          <Link href="/">
            <Logo>PM</Logo>
          </Link>
          <Navegacion />
        </div>

        {usuario ? (
          <div
            css={css`
              display: flex;
              align-items: center;
              @media (min-width: 768px) {
                padding-bottom: 0;
              }
            `}
          >
            <p
              css={css`
                margin-right: 2rem;
                color: #ffffff;
              `}
            >
              Hola: {usuario.displayName}
            </p>

            <Boton onClick={() => firebase.cerrarSesion()}>Cerrar Sesion</Boton>
          </div>
        ) : (
          <div
            css={css`
              display: flex;
              align-items: center;
              margin-left: 10vh;
              @media (min-width: 768px) {
                flex-direction: column;
                padding-bottom: 0;
              }
            `}
          >
            <Link href="/login">
              <Boton bgColor="true">Login</Boton>
            </Link>
          </div>
        )}
      </ContenedorHeader>
    </header>
  );
}
