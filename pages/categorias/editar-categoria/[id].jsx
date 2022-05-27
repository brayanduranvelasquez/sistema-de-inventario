import Head from "next/head";
import Link from 'next/link';
import { useRouter } from "next/router";
import { CategoriaService } from "../../service/CategoriaService.js";
import Container from "../../../components/container.jsx";

export default function Home() {
  const router = useRouter();
  let id = router.query.id;

  // Luego que se cumple la promesa, llena el formulario para editar
  let categoriaService = new CategoriaService();
  categoriaService.getCategoria(id).then((res) => llenarFormulario(res));
 
  const llenarFormulario = (datosProducto) => {
    let formulario = document.getElementById('formulario');

    formulario.nombre.value = datosProducto.nombre
  }

  const enviarDatos = (event) => {
    event.preventDefault() // Para que no se envie el formulario

    let datos = {};
    datos.id = parseInt(id) // id obtenido desde la URL
    datos.nombre = event.target.nombre.value;

    let categoriaService = new CategoriaService();
    categoriaService.saveCategoria(datos).then(res => res.data);

    alert('Datos de la categoria editados')
    router.push('/categorias');
  }

  return (
     <div>
        <Head>
          <title>Editar Categoria</title>
        </Head>

        <Container>
          <div class="container-fluid">
            <div class="row">

              <main class="col-12 p-2">
                <div class="alert alert-primary">
                  <center>
                    <h2>Editar Categoria</h2>
                  </center>
                </div>

                <form class="container" id="formulario" onSubmit={enviarDatos}><br />
                  <div class="row d-flex justify-content-center">
                    <div class="col-4">
                      <div class="form-floating">
                        <input type="text" name="nombre" class="form-control" placeholder="Nombre del producto" required/>
                        <label for="floatingInput">Nombre</label>
                      </div><br/>

                      <div class="d-grid gap-2">
                        <button type="submit" className="btn btn-primary">Editar</button>
                      </div>
                    </div>
                  </div>
                </form>
              </main>

              <div class="col-12 pb-3"><br/><br/><br/>
                <Link href="/productos">
                  <a class="btn btn-outline-primary px-5">Regresar</a>
                </Link>
              </div>

            </div>
          </div>
        </Container>
     </div>
  );
}
