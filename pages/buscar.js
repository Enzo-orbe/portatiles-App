import React, { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import { useRouter } from "next/router";
import DetallesOrden from "../components/layout/DetallesOrden";
import useOrden from "../hooks/useOrden";

export default function Buscar() {
  const router = useRouter();
  const {
    query: { q },
  } = router;

  //Todos los productos
  const { ordenes } = useOrden("creado");
  const [resultado, guardarResultado] = useState([]);

  useEffect(() => {
    const busqueda = q.toLowerCase();
    const filtro = ordenes.filter((orden) => {
      return (
        orden.nº_orden.toLowerCase().includes(busqueda) ||
        orden.descripcion.toLowerCase().includes(busqueda) ||
        orden.propietario.toLowerCase().includes(busqueda)
      );
    });
    guardarResultado(filtro);
  }, [q, ordenes]);

  return (
    <div>
      <Layout>
        <div className="listado-productos">
          <div className="contenedor">
            <ul className="bg-white">
              {resultado.map((orden) => (
                <DetallesOrden key={orden.id} orden={orden} />
              ))}
            </ul>
          </div>
        </div>
      </Layout>
    </div>
  );
}
