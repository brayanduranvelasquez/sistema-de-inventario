import Head from "next/head";
import Link from 'next/link';
import Container from "../../components/container.jsx";

export default function Index() {
  return (
    <div>
      <Head>
        <title>Categorías</title>
      </Head>

      <Container>
        <div class="container-fluid">
          <div className="row">

            <main className="col-12 p-2">
              <div class="alert alert-primary">
                <center>
                  <h2>Categorías</h2>
                </center>
              </div>

              <div className="container">
                  <div className="row">
                    <div class="col-12">
                      <div class="d-grid gap-2">
                        <Link href="/categorias/registrar-categoria">
                          <a  class="btn btn-primary">Registrar Categoría <i class="bi-plus-lg icon"></i></a>
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
                  <center><h2>¡Actualmente no hay categorías registradas!</h2>
                  <p>Proceda a registrar una nueva categoría.</p></center>
                </div>
              </div>
            </main>

          </div>
        </div>
      </Container>
    </div>
  );
}
