import { ProductoService } from "../service/ProductoService.js";
import Container from "../../components/container.jsx";
import { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  const [producto, setProductos] = useState([]);

  useEffect(() => {
    let productoService = new ProductoService();
    productoService
      .getTodosProductos()
      .then((res) => respuestaServidor(res))
      .catch(() => errorServidor());

    const respuestaServidor = (datos) => {
      let divRegistros = document.getElementById("divRegistros");
      let divSinRegistros = document.getElementById("divSinRegistros");

      if (datos.length == 0) {
        divSinRegistros.style.cssText = "display: block";
      } else {
        setProductos(datos);
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
        <title>Productos</title>
      </Head>

      <Container>
        <main class="container-fluid">
          <div class="row justify-content-center">
            <div class="col-12 pb-2 pt-3">
              <div class="alert alert-primary">
                <center>
                  <h2>Productos</h2>
                </center>
              </div>
            </div>

            <div
              class="col-12 py-5"
              style={{ display: "none" }}
              id="divRegistros"
            >
              <div class="pb-2">
                <Link href="/productos/registrar-producto">
                  <a class="btn btn-primary btn-fluid">
                    Registrar Producto <i class="bi-plus-lg icon"></i>
                  </a>
                </Link>
              </div>

              <table class="table table-hovered">
                <thead>
                  <tr>
                    <th>Nº</th>
                    <th>Nombre</th>
                    <th>Existencia</th>
                    <th>Precio</th>
                    <th>Categoria</th>
                    <th>Entrada / Salida</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {producto.map((dato, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{dato.nombre}</td>
                        <td>{dato.existencia}</td>
                        <td>{dato.precio}</td>
                        <td>{dato.id_categoria}</td>
                        <td>
                        <div class="d-flex gap-2">
                            <Link
                              href={"/entradas/registrar-entrada/" + dato.id}
                            >
                              <a class="btn btn-sm btn-outline-primary">
                                Entrada
                              </a>
                            </Link>
                            <Link
                              href={
                                "/salidas/registrar-salida/" + dato.id}
                            >
                              <a class="btn btn-sm btn-outline-primary">
                                Salida
                              </a>
                            </Link>
                          </div>
                        </td>
                        <td>
                          <div class="d-flex gap-2">
                            <Link
                              href={"/productos/editar-producto/" + dato.id}
                            >
                              <a class="btn btn-sm btn-outline-warning">
                                Editar
                              </a>
                            </Link>
                            <Link
                              href={
                                "/productos/eliminar-producto/" +
                                dato.id +
                                "?producto=" +
                                dato.nombre
                              }
                            >
                              <a class="btn btn-sm btn-outline-danger">
                                Eliminar
                              </a>
                            </Link>
                          </div>
                        </td>
                      </tr>
                    );
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
                <h2>¡Actualmente no hay productos registrados!</h2>
                <p>Proceda a registrar un nuevo producto.</p>
                <Link href="/productos/registrar-producto/">
                  <a class="btn btn-primary">
                    Registrar Producto <i class="bi-plus-lg icon"></i>
                  </a>
                </Link>
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
