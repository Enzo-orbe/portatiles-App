import React from "react";
import Layout from "../components/layout/Layout";
import DetallesOrden from "../components/layout/DetallesOrden";
import useOrden from "../hooks/useOrden";

export default function Home() {
  const { ordenes } = useOrden("creado");

  return (
    <div>
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
