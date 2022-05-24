import Head from "next/head";
import Link from 'next/link';
import Container from "../components/container.jsx";

export default function Index() {
  return (
    <div>
      <Head>
        <title>Inicio</title>
      </Head>

      <Container>
        <div class="container-fluid">
          <div class="row">

            <main class="col-12 p-2">
              <div class="alert alert-primary">
                <center>
                  <h2>Inventario</h2>
                </center>
              </div>

                <div class="container">
                  <div class="row pb-2">
                    <div class="col-6">
                      <div class="d-grid gap-2">
                        <Link href="/categorias">
                          <a class="btn btn-primary">Ver Categorías <i class="bi-clipboard icon"></i></a>
                        </Link>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="d-grid gap-2">
                        <Link href="/productos">
                          <a class="btn btn-primary">Ver Productos <i class="bi-clipboard icon"></i> </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-6">
                      <div class="d-grid gap-2">
                        <Link href="/categorias/registrar-categoria">
                          <a class="btn btn-primary">Registrar Categoría <i class="bi-plus-lg icon"></i></a>
                        </Link>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="d-grid gap-2">
                        <Link href="/productos/registrar-producto">
                          <a class="btn btn-primary">Registrar Producto <i class="bi-plus-lg icon"></i> </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

              <div class="container pb-5"> <br/><br/>  
                <div class="row d-flex justify-content-center">
                  <div class="d-flex justify-content-center">
                    <i class="bi-info-circle" style={{ fontSize: '60px' }}></i>
                  </div>
                  <center><h2>¡Actualmente no hay registros disponibles!</h2>
                  <p>Esto se debe a que no se ha procesado alguna entrada o salida de productos en el sistema.</p></center>
                </div>
              </div>
            </main>

          </div>
        </div>
      </Container>
    </div>
  );
}
