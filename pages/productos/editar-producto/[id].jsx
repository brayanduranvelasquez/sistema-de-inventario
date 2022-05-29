import Head from "next/head";
import Link from 'next/link';
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ProductoService } from "../../service/ProductoService.js";
import { CategoriaService } from "../../service/CategoriaService.js";
import Container from "../../../components/container.jsx";

export default function Home() {
  const router = useRouter();
  let id = router.query.id;

  const [producto, setProducto] = useState([]); // Para obtener el id_categoria de producto
  
  useEffect(() => {

    let productoService = new ProductoService();
    productoService.getProducto(id).then((res) => llenarFormulario(res));

    const llenarFormulario = (datosProducto) => {
      setProducto(datosProducto);
      let formulario = document.getElementById('formulario');
      
      formulario.nombre.value = datosProducto.nombre
      formulario.precio.value = datosProducto.precio
    }
    
  }, [])

  let categoriaService = new CategoriaService();
  categoriaService.getTodasCategorias().then((res) => llenarCategorias(res))

  const llenarCategorias = (categorias) => {
    let categoriaSelect = document.getElementById('categoriaSelect');
    let cuantasCategorias = categorias.length; // Saber la longitud de lo obtenido desde la promesa y mostrar datos de cuantas categorias existan
    categoriaSelect.innerHTML = ``; // Para que siempre se formateen los datos de las categorias

    if (cuantasCategorias < 1){
      categoriaSelect.innerHTML += `
        <option disabled>No existen categorias</option>
      `;
    } else {

      categorias.map((dato, index) => {
        if(dato.id == producto.id_categoria){
          categoriaSelect.innerHTML += `
            <option key=${index} value=${dato.id} selected>${dato.nombre}</option>
          `;
        } else {
          categoriaSelect.innerHTML += `
            <option value=${dato.id}>${dato.nombre}</option>
          `;
        }
      })

    }
  }

  // Funcion "enviarDatos" debe estar fuera del hook debido a que es llamada desde el return
  const enviarDatos = (event) => {
    event.preventDefault() // Para que no se envie el formulario
      
    let datos = {};
    datos.id = parseInt(id) // id obtenido desde la URL
    datos.nombre = event.target.nombre.value;
    datos.precio =  parseInt(event.target.precio.value);
    datos.id_categoria = parseInt(event.target.id_categoria.value);
      
    let productoService = new ProductoService();
    productoService.saveProducto(datos).then(res => res.data);
      
    alert('Datos del producto editados')
    router.push('/productos');
  }

  return (
     <div>
        <Head>
          <title>Editar Producto { producto.nombre }</title>
        </Head>

        <Container>
          <main class="container-fluid">
            <div class="row">

              <div class="col-12 p-2">
                <div class="alert alert-primary">
                  <center>
                    <h2>Editar producto</h2>
                  </center>
                </div>

                <form class="container" id="formulario" onSubmit={enviarDatos}><br />
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
                            <option selected value="1">1</option>
                          </select>
                        <label for="floatingInput">Categorias</label>
                      </div><br/>

                      <div class="d-grid gap-2">
                        <button type="submit" className="btn btn-primary">Registrar</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>

              <div class="col-12 pb-3"><br/><br/><br/>
                <Link href="/productos">
                  <a class="btn btn-outline-primary px-5">Regresar</a>
                </Link>
              </div>

            </div>
          </main>
        </Container>
     </div>
  );
}
