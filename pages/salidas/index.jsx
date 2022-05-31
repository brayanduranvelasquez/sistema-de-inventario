import Head from "next/head";
import Link from 'next/link';
import Container from "../../components/container.jsx";
import { SalidaProductoService } from "../service/SalidaProductoService.js";
import { useEffect, useState } from "react";

export default function Index() {
  const [salidaProducto, setSalidaProductos] = useState([]);

  useEffect(() => {
    let salidaProductoService = new SalidaProductoService();
    salidaProductoService
      .getTodasSalidaProducto()
      .then((res) => respuestaServidor(res))
      .catch(() => errorServidor());

    const respuestaServidor = (datos) => {
      let divRegistros = document.getElementById("divRegistros");
      let divSinRegistros = document.getElementById("divSinRegistros");

      if (datos.length == 0) {
        divSinRegistros.style.cssText = "display: block";
      } else {
        setSalidaProductos(datos);
        divRegistros.style.cssText = "display: block";
      }
    };

    const errorServidor = () => {
      let divBaseDeDatos = document.getElementById("divBaseDeDatos");
      divBaseDeDatos.style.cssText = "display: block";
    };
  }, []);


  return (
    <div>
      <Head>
        <title>Salidas</title>
      </Head>

      <Container>
      <main class="container-fluid">
          <div class="row justify-content-center">
            <div class="col-12 pb-2 pt-3">
              <div class="alert alert-primary">
                <center>
                  <h2>Salidas Registradas</h2>
                </center>
              </div>
            </div>

            <div
              class="col-12 py-5"
              style={{ display: "none" }}
              id="divRegistros"
            >
              <table class="table table-hovered">
                <thead>
                  <tr>
                    <th>Nº</th>
                    <th>Fecha</th>
                    <th>Descripcion</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {salidaProducto.map((dato, index) => {

                    if (dato.status != 0) {
                      return (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>{dato.CreatedAt}</td>
                          <td>{dato.descripcion}</td>
                          <td>
                            <div class="d-flex gap-2">
                              <Link
                                href={"/salidas/mostrar-salida/" + dato.ID}
                              >
                                <a class="btn btn-sm btn-outline-warning">
                                  Detalles
                                </a>
                              </Link>
                            </div>
                          </td>
                        </tr>
                      );
                    }

                  })}
                </tbody>
              </table>
            </div>

            <div
              class="col-12 py-5"
              style={{ display: "none" }}
              id="divSinRegistros"
            >
              <div class="d-flex justify-content-center">
                <i class="bi-info-circle" style={{ fontSize: "60px" }}></i>
              </div>
              <center>
                <h2>¡Actualmente no hay salidas registradas!</h2>
                <p>Cuando realice una salida, se mostrará en este apartado.</p>
              </center>
            </div>

            <div
              class="col-12 py-5"
              style={{ display: "none" }}
              id="divBaseDeDatos"
            >
              <div class="d-flex justify-content-center">
                <i class="bi-server" style={{ fontSize: "60px" }}></i>
              </div>
              <center>
                <h2>¡Error con la llamada al servidor!</h2>
                <p>
                  Ha ocurrido un problema de conexion con la base de datos...
                </p>
              </center>
            </div>
          </div>
        </main>
      </Container>
    </div>
  );
}
