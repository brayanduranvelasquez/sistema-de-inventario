import { CategoriaService } from "../service/CategoriaService.js";
import Container from "../../components/container.jsx";
import { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  const [categoria, setCategorias] = useState([]);

  useEffect(() => {
    let categoriaService = new CategoriaService();
    categoriaService.getTodasCategorias().then((res) => respuestaServidor(res)).catch(() => errorServidor());

    const respuestaServidor = (datos) => {
      let divRegistros = document.getElementById("divRegistros");
      let divSinRegistros = document.getElementById("divSinRegistros");

      if (datos.length == 0) {
        divSinRegistros.style.cssText = "display: block";
      } else {
        setCategorias(datos);
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
        <title>Categorias</title>
      </Head>

      <Container>
        <main class="container-fluid">
          <div class="row justify-content-center">

            <div class="col-12 pb-2 pt-3">
              <div class="alert alert-primary">
                <center>
                  <h2>Categorias</h2>
                </center>
              </div> 
            </div>
            
              <div class="col-12 py-5" style={{ display: "none" }} id="divRegistros">
                  <div class="pb-2">
                    <Link href="/categorias/registrar-categoria">
                      <a class="btn btn-primary btn-fluid">
                        Registrar Categoria <i class="bi-plus-lg icon"></i>
                      </a>
                    </Link>
                  </div>

                  <table class="table table-hovered">
                    <thead>
                      <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Status</th>
                        <th>Acciones</th>
                      </tr>
                    </thead>
                    <tbody>
                      {categoria.map((dato, index) => {
                        return (
                          <tr key={index}>
                            <td>{dato.id}</td>
                            <td>{dato.nombre}</td>
                            <td>
                              {dato.status ? "Inactivo" : "Activo"}
                            </td>
                            <td>
                              <div class="d-flex gap-2">
                                <Link href={"/categorias/editar-categoria/" + dato.id}>
                                  <a class="btn btn-sm btn-outline-warning">
                                    Editar
                                  </a>
                                </Link>
                                <Link href={"/categorias/eliminar-categoria/" + dato.id + "?categoria=" + dato.nombre}>
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

              <div class="col-12 py-5" style={{ display: "none" }} id="divSinRegistros">
                <div class="d-flex justify-content-center">
                  <i class="bi-info-circle" style={{ fontSize: "60px" }}></i>
                 </div>
                <center>
                  <h2>¡Actualmente no hay categorias registradas!</h2>
                  <p>Proceda a registrar una nueva categoria.</p>
                    <Link href="/categorias/registrar-categoria/">
                      <a class="btn btn-primary">
                         Registrar Categoria <i class="bi-plus-lg icon"></i>
                      </a>
                    </Link>
                </center>
              </div>

              <div class="col-12 py-5" style={{ display: "none" }} id="divBaseDeDatos">
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
