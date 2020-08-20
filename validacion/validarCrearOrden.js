export default function validarCrearOrden(valores) {
  let errores = {};

  //validar orden
  if (!valores.nº_orden) {
    errores.nº_orden = "El numero de orden es obligatorio";
  }

  //validar estado
  if (!valores.estado) {
    errores.estado = "El estado del equipo es obligatorio";
  }

  //validar propietario
  if (!valores.propietario) {
    errores.propietario = "El nombre del propietario es obligatorio";
  }

  //Validar descripcion
  if (!valores.descripcion) {
    errores.descripcion = "Agrega una descripcion del Equipo";
  }

  return errores;
}
