import Head from "next/head";
import Link from 'next/link';
import Container from "../../../components/container.jsx";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Registrar Producto</title>
      </Head>

      <Container>
        <div class="container-fluid">
          <div class="row">

            <main class="col-12 p-2">
              <div class="alert alert-primary">
                <center>
                  <h2>Registrar un producto</h2>
                </center>
              </div>

              <form class="container"><br />
                <div class="row d-flex justify-content-center">
                  <div class="col-4">
                    <div class="form-floating">
                      <input type="text" name="name" class="form-control" placeholder="Nombre del producto" required/>
                      <label for="floatingInput">Nombre</label>
                    </div><br/>

                    <div class="form-floating">
                      <input type="text" name="precio" class="form-control" placeholder="Precio" required/>
                      <label for="floatingInput">Precio</label>
                    </div><br/>

                    <div class="col-md form-floating">
                      <select class="form-select" name="categoria" required>
                          <option selected disabled>Categoria</option>
                        </select>
                      <label for="floatingInput">Categorias</label>
                    </div><br/>

                    <div class="d-grid gap-2">
                      <button type="button" className="btn btn-primary">Registrar</button>
                    </div>
                  </div>
                </div>
              </form>
            </main>

            <div class="col-12 pb-3"><br/><br/><br/>
              <Link href="/productos">
                <a class="btn btn-primary px-5">Regresar</a>
              </Link>
            </div>

          </div>
        </div>
      </Container>
    </div>
  );
}
