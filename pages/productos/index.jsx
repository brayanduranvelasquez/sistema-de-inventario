import Head from "next/head";
import Link from 'next/link';
import Container from "../../components/container.jsx";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Productos</title>
      </Head>

      <Container>
        <div class="container-fluid">
          <div class="row">

            <main class="col-12 p-2">
              <div class="alert alert-primary">
                <center>
                  <h2>Productos</h2>
                </center>
              </div>

              <div class="container">
                <div class="row">
                  <div class="col-12">
                    <div class="d-grid gap-2">
                      <Link href="/productos/registrar-producto">
                        <a class="btn btn-primary">Registrar Producto <i class="bi-plus-lg icon"></i></a>
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
                  <center><h2>¡Actualmente no hay productos registrados!</h2>
                  <p>Proceda a registrar un nuevo producto.</p></center>
                </div>
              </div>

            </main>

          </div>
        </div>
      </Container>
    </div>
  );
}
