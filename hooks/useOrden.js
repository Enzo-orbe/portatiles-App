import React, { useState, useEffect, useContext } from "react";
import { FirebaseContext } from "../firebase";

export default function useOrden(orden) {
  const [ordenes, guardarOrdenes] = useState([]);

  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    const obtenerOrdenes = () => {
      firebase.db
        .collection("ordenes")
        .orderBy(orden, "desc")
        .onSnapshot(manejarSnapshot);
    };
    obtenerOrdenes();
  }, []);

  function manejarSnapshot(snapshot) {
    const ordenes = snapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });
    guardarOrdenes(ordenes);
  }

  return {
    ordenes,
  };
}
