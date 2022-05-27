import { ProductoService } from "../service/ProductoService.js";
import Container from "../../components/container.jsx";
import { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  const [producto, setProductos] = useState([]);

  useEffect(() => {
    let productoService = new ProductoService();
    productoService.getTodosProductos().then((res) => setProductos(res));
    // Guarda los valores obtenidos en la constante producto, accediendo al objeto ProductoService
  });

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
            
            {producto.length > 0 && (
              <div class="col-12">
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
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Existencia</th>
                        <th>Precio</th>
                        <th>Categoria</th>
                        <th>Status</th>
                        <th>Acciones</th>
                      </tr>
                    </thead>
                    <tbody>
                      {producto.map((dato, index) => {
                        return (
                          <tr key={index}>
                            <td>{dato.id}</td>
                            <td>{dato.nombre}</td>
                            <td>{dato.existencia}</td>
                            <td>{dato.precio}</td>
                            <td>{dato.id_categoria}</td>
                            <td>
                              {dato.status ? "Inactivo" : "Activo"}
                            </td>
                            <td>
                              <div class="d-flex gap-2">
                                <Link href={"/productos/editar-producto/" + dato.id}>
                                  <a class="btn btn-sm btn-outline-warning">
                                    Editar
                                  </a>
                                </Link>
                                <Link href={"/productos/eliminar-producto/" + dato.id}>
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
            )}

            {producto.length == 0 && (
              <div class="col-12 pb-3">
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
              )}

            </div>
        </main>
      </Container>
    </div>
  );
}
