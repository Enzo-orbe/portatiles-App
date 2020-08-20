import React, { useState, useContext } from "react";
import Layout from "../components/layout/Layout";
import { css } from "@emotion/core";
import Router, { useRouter } from "next/router";
import {
  Formulario,
  Campo,
  InputSubmit,
  Error,
} from "../components/ui/Formulario";

import { FirebaseContext } from "../firebase";

//validaciones
import useValidacion from "../hooks/useValidacion";
import validarCrearOrden from "../validacion/validarCrearOrden";
import Error404 from "../components/layout/404";

const STATE_INICIAL = {
  nº_orden: 0,
  estado: "",
  propietario: "",
  descripcion: "",
};

export default function nuevaOrden() {
  const [error, guardarError] = useState(false);

  //context con las operaciones crud de firebase
  const { usuario, firebase } = useContext(FirebaseContext);

  const {
    valores,
    errores,
    handleChange,
    handleSubmit,
    handleBlur,
  } = useValidacion(STATE_INICIAL, validarCrearOrden, crearOrden);

  const { nº_orden, estado, propietario, descripcion } = valores;

  //hook de routing para redireccionar
  const router = useRouter();

  async function crearOrden() {
    //Si el usuario no esta autenticado levar al login
    if (!usuario) {
      return router.push("login");
    }

    //crear el objeto de nuevo producto
    const orden = {
      nº_orden,
      estado,
      propietario,
      descripcion,
      creado: Date.now(),
      creador: {
        id: usuario.uid,
      },
    };

    //insertarlo en la base de datos
    firebase.db.collection("ordenes").add(orden);

    return router.push("/");
  }

  return (
    <Layout>
      {!usuario ? (
        <Error404 />
      ) : (
        <>
          <h1
            css={css`
              text-align: center;
              margin-top: 5rem;
            `}
          >
            Nueva Orden
          </h1>
          <Formulario onSubmit={handleSubmit} noValidate>
            <fieldset>
              <legend>Informacion General</legend>

              <Campo>
                <label htmlFor="nº_orden">Nº de Orden</label>
                <input
                  type="number"
                  id="nº_orden"
                  name="nº_orden"
                  value={nº_orden}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Campo>
              {errores.nº_orden && <Error>{errores.nº_orden}</Error>}

              <Campo>
                <label htmlFor="estado">Estado</label>
                <input
                  type="text"
                  id="estado"
                  placeholder="Estado del Producto"
                  name="estado"
                  value={estado}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Campo>
              {errores.estado && <Error>{errores.estado}</Error>}

              <Campo>
                <label htmlFor="propietaro">Propietario</label>
                <input
                  type="text"
                  id="propietario"
                  placeholder="Propietario del equipo"
                  name="propietario"
                  value={propietario}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Campo>
              {errores.propietario && <Error>{errores.propietario}</Error>}
            </fieldset>

            <fieldset>
              <legend>Descripcion del Equipo</legend>
              <Campo>
                <label htmlFor="descripcion">Descripcion</label>
                <textarea
                  id="descripcion"
                  placeholder="Descripcion del Producto"
                  name="descripcion"
                  value={descripcion}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Campo>
              {errores.descripcion && <Error>{errores.descripcion}</Error>}
            </fieldset>

            {error && <Error> {error} </Error>}

            <InputSubmit type="submit" value="Crear Producto" />
          </Formulario>
        </>
      )}
    </Layout>
  );
}
