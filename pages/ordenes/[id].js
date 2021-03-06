import React, { useEffect, useContext, useState } from "react";
import { useRouter } from "next/router";
import { FirebaseContext } from "../../firebase";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { es } from "date-fns/locale";
import Error404 from "../../components/layout/404";
import Layout from "../../components/layout/Layout";
import { Campo, InputSubmit } from "../../components/ui/Formulario";
import Boton from "../../components/ui/Boton";

const ContenedorOrden = styled.div`
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 2fr 1fr;
    column-gap: 2rem;
  }
`;

const Container = styled.div`
  display: flex;
  width: 80%;
  height: 80%;
  margin: auto;
  margin-top: 2rem;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
`;

export default function Orden() {
  //state del componente
  const [orden, guardarOrden] = useState({});
  const [error, guardarError] = useState(false);
  const [consultarDb, guargarConsultarDb] = useState(true);
  //routing para obtener el id actual
  const router = useRouter();
  const {
    query: { id },
  } = router;

  //Context de firebase
  const { firebase, usuario } = useContext(FirebaseContext);

  useEffect(() => {
    if (id && consultarDb) {
      const obtenerOrden = async () => {
        const ordenQuery = await firebase.db.collection("ordenes").doc(id);
        const orden = await ordenQuery.get();
        if (orden.exists) {
          guardarOrden(orden.data());
          guargarConsultarDb(false);
        } else {
          guardarError(true);
          guargarConsultarDb(false);
        }
      };
      obtenerOrden();
    }
  }, [id]);

  if (Object.keys(orden).length === 0 && !error) return "Cargando...";

  const { nº_orden, estado, propietario, descripcion, creado } = orden;

  //Funcion que revisa que el autor del producto sea el mismo que esta autenticado
  const puedeBorrar = () => {
    if (!usuario) return false;

    if (usuario.uid) return true;
  };

  //Elimina el producto
  const eliminarOrden = async () => {
    if (!usuario) return router.push("/login");

    try {
      await firebase.db.collection("ordenes").doc(id).delete();
      router.push("/ordenes");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <Container>
        {error ? (
          <Error404 />
        ) : (
          <div>
            <h1
              css={css`
                text-align: start;
                margin-top: 5rem;
              `}
            >
              Nº de Orden: {nº_orden}
            </h1>
            <ContenedorOrden>
              <div>
                <p
                  css={css`
                    font-weight: bold;
                  `}
                >
                  Publicado hace:{" "}
                  {formatDistanceToNow(new Date(creado), { locale: es })}
                </p>
                <p
                  css={css`
                    font-weight: bold;
                  `}
                >
                  Propietario: {propietario}
                </p>
                <h3>Descripcion del equipo:</h3>
                <p>{descripcion}</p>
              </div>
              <aside>
                <div
                  css={css`
                    margin-top: 5rem;
                  `}
                >
                  <p
                    css={css`
                      text-align: center;
                    `}
                  >
                    <span
                      css={css`
                        font-weight: bold;
                      `}
                    >
                      Estado del Equipo:{" "}
                    </span>
                    {estado}
                  </p>
                </div>
              </aside>
            </ContenedorOrden>
            <div
              css={css`
                display: flex;
                justify-content: end;
                align-items: center;
                border-radius: 5px;
              `}
            >
              {puedeBorrar() && (
                <button
                  css={css`
                    width: 100%;
                    height: 50px;
                    font-weight: bold;
                    border-radius: 5px;
                    background-color: red;
                    border: none;
                    margin-bottom: 5px;
                  `}
                  onClick={eliminarOrden}
                >
                  {" "}
                  Eliminar Orden{" "}
                </button>
              )}
            </div>
          </div>
        )}
      </Container>
    </Layout>
  );
}
