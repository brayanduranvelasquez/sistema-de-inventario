import Head from "next/head";
import Link from 'next/link';
import { useRouter } from "next/router";
import { Fragment } from "react";
import { CategoriaService } from "../../service/CategoriaService.js";
import Container from "../../../components/container.jsx";

export default function Home() {
  const router = useRouter();

  const enviarDatos = (event) => {
    event.preventDefault() // Para que no se envie el formulario

    let datos = {};
    datos.nombre = event.target.nombre.value;
    datos.status = 0;

    let categoriaService = new CategoriaService();
    categoriaService.saveCategoria(datos).then(res => console.log(res.data));

    alert('Categoria registrada')
    router.push('/categorias');
  }

  return (
    <Fragment>
      <div>
        <Head>
          <title>Registrar Categoria</title>
        </Head>

        <Container>
          <div class="container-fluid">
            <div class="row">

              <main class="col-12 p-2">
                <div class="alert alert-primary">
                  <center>
                    <h2>Registrar una categoria</h2>
                  </center>
                </div>

                <form class="container" onSubmit={enviarDatos}><br />
                  <div class="row d-flex justify-content-center">
                    <div class="col-4">
                      <div class="form-floating">
                        <input type="text" name="nombre" class="form-control" placeholder="Nombre para la categoria" required/>
                        <label for="floatingInput">Categoria</label>
                      </div><br/>

                      <div class="d-grid gap-2">
                        <button type="submit" className="btn btn-primary">Registrar</button>
                      </div>
                    </div>
                  </div>
                </form>
              </main>

              <div class="col-12 pb-3"><br/><br/><br/>
                <Link href="/categorias">
                  <a class="btn btn-primary px-5">Regresar</a>
                </Link>
              </div>

            </div>
          </div>
        </Container>
      </div>
    </Fragment>
  );
}
