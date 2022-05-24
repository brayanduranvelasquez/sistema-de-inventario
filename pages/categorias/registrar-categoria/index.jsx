import Head from "next/head";
import Link from 'next/link';
import Container from "../../../components/container.jsx";

export default function Index() {
  return (
    <div>
      <Head>
        <title>Crear categoría</title>
      </Head>

      <Container>
        <div class="container-fluid">
          <div class="row">

            <main class="col-12 p-2">
              <div class="alert alert-primary">
                <center>
                  <h2>Crear una categoría</h2>
                </center>
              </div>

              <form class="container pt-2">

                <div class="row d-flex justify-content-center">
                  <div class="col-4">
                    <div class="form-floating">
                      <input type="text" name="categoria" class="form-control" placeholder="Nombre para la categoria" required/>
                      <label for="floatingInput">Categoria</label>
                    </div><br/>

                    <div class="d-grid gap-2">
                      <button type="button" className="btn btn-primary">Registrar</button>
                    </div>
                  </div>
                </div>

              </form>
            </main>

            <div class="col-12"><br/><br/><br/>
              <Link href="/categorias">
                <a class="btn btn-primary px-5">Regresar</a>
              </Link>
            </div>

          </div>
        </div>
      </Container>
    </div>
  );
}
