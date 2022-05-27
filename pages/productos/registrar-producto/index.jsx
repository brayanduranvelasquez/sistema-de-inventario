import Head from "next/head";
import Link from 'next/link';
import { useRouter } from "next/router";
import { ProductoService } from "../../service/ProductoService.js";
import { CategoriaService } from "../../service/CategoriaService.js";
import Container from "../../../components/container.jsx";

export default function Home() {
  const router = useRouter();

  let categoriaService = new CategoriaService();
  categoriaService.getTodasCategorias().then((res) => llenarCategorias(res));

  const llenarCategorias = (categorias) => {
    let categoriaSelect = document.getElementById('categoriaSelect');
    let cuantasCategorias = categorias.length; // Saber la longitud de lo obtenido desde la promesa y mostrar datos de cuantas categorias existan

    if (cuantasCategorias < 1){
      categoriaSelect.innerHTML += `
        <option disabled>No existen categorias</option>
      `;
    }

    else {
      categorias.map((dato, index) => {
        categoriaSelect.innerHTML += `
          <option value=${dato.id}>${dato.nombre}</option>
        `;
      })
    }
  }

  const enviarDatos = (event) => {
    event.preventDefault() // Para que no se envie el formulario

    let datos = {};
    datos.nombre = event.target.nombre.value;
    datos.existencia = 0;
    datos.precio =  parseInt(event.target.precio.value);
    datos.status = 0;
    datos.id_categoria = parseInt(event.target.id_categoria.value);

    let productoService = new ProductoService();
    productoService.saveProducto(datos).then(res => console.log(res.data));

    alert('Datos registrados')
    router.push('/productos');
  }

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

                <form class="container" onSubmit={enviarDatos}><br />
                  <div class="row d-flex justify-content-center">
                    <div class="col-4">
                      <div class="form-floating">
                        <input type="text" name="nombre" class="form-control" placeholder="Nombre del producto" required/>
                        <label for="floatingInput">Nombre</label>
                      </div><br/>

                      <div class="form-floating">
                        <input type="number" name="precio" class="form-control" placeholder="Precio" required/>
                        <label for="floatingInput">Precio</label>
                      </div><br/>

                      <div class="col-md form-floating">
                        <select class="form-select" name="id_categoria" id="categoriaSelect" required>
                        </select>
                        <label for="floatingInput">Categorias</label>
                      </div><br/>

                      <div class="d-grid gap-2">
                        <button type="submit" className="btn btn-primary">Registrar</button>
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
