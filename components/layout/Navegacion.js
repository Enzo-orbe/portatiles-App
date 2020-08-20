import React, { useContext } from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import { FirebaseContext } from "../../firebase";

const Nav = styled.nav`
  padding-left: 2rem;

  a {
    font-size: 1.8rem;
    margin-left: 2rem;
    color: #ffff;
    font-family: "PT Sans", sans serif;
    font-weight: bold;

    &:last-of-types {
      margin-right: 0;
    }
  }
`;

export default function Navegacion() {
  const { usuario } = useContext(FirebaseContext);

  return (
    <Nav>
      <Link href="/">
        <a>Inicio</a>
      </Link>
      {usuario && (
        <>
          <Link href="/ordenes">
            <a>Ordenes</a>
          </Link>
          <Link href="/nueva-orden">
            <a>Nueva Orden</a>
          </Link>
        </>
      )}
    </Nav>
  );
}
