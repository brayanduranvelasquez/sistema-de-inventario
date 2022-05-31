import Head from "next/head";
import Link from 'next/link';
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ProductoService } from "../../service/ProductoService.js";
import { SalidaProductoService } from "../../service/SalidaProductoService.js";
import { DetalleSalidaService } from "../../service/DetalleSalidaService.js";
import Container from "../../../components/container.jsx";

export default function Home() {
  const router = useRouter();
  let id = parseInt(router.query.id); // ID Producto

  const [producto, setProducto] = useState([]);
  const [cantidadTotal, setCantidadTotal] = useState([]);

  useEffect(() => {

    // Al inicializar, obtener todos los datos del producto
    let productoService = new ProductoService();
    productoService.getProducto(id).then((res) => setProducto(res));
    
  }, [])

  // Funcion "enviarDatos" debe estar fuera del hook debido a que es llamada desde el return
  const enviarDatos = (event) => {
    event.preventDefault() // Para que no se envie el formulario
    let descripcion = event.target.descripcion.value;
    let cantidad = parseInt(event.target.cantidad.value)
      
    let datos = {};
    datos.numero_salida = cantidad;
    datos.descripcion = descripcion;
    datos.status = 1;

    let salidaProductoService = new SalidaProductoService();
    salidaProductoService.saveSalidaProducto(datos).then(res => res.data);
      
    /////////////////////////////////////////////////////////////////////////

    if (cantidad > producto.existencia) {
      alert("La cantidad supera la existencia del producto")
    } else {

      let datos2 = {};
      datos2.id_producto = id; // ID obtenido desde la URL
      datos2.cantidad =  parseInt(producto.existencia) - parseInt(cantidad);
      datos2.precio = parseInt(cantidadTotal);
  
      let detalleSalidaService = new DetalleSalidaService();
      detalleSalidaService.saveDetalleSalida(datos2).then(res => res.data);
  
      /////////////////////////////////////////////////////////////////////////
  
      let datos3 = {};
      datos3.id = id; // ID obtenido desde la URL
      datos3.nombre = producto.nombre;
      datos3.existencia = parseInt(producto.existencia) - parseInt(cantidad);
      datos3.precio =  producto.precio;
      datos3.id_categoria = producto.id_categoria;
  
      let productoService = new ProductoService();
      productoService.saveProducto(datos3).then(res => res.data);
  
      datos = null;
      datos2 = null;
      datos3 = null;
  
      alert('Salida registrada')
      router.push('/salidas');
      
    }

  }

  const calcularCantidad = (e) => {
    let total = producto.precio * e.target.value
    setCantidadTotal(total)
  }

  return (
     <div>
        <Head>
          <title>Salida para: {producto.nombre}</title>
        </Head>

        <Container>
          <main class="container-fluid">
            <div class="row">

              <div class="col-12 p-2">
                <div class="alert alert-primary">
                  <center>
                    <h2>Salida para: {producto.nombre} - Existen {producto.existencia} en el registro</h2>
                  </center>
                </div>

                <form class="container" id="formulario" onSubmit={enviarDatos}><br />
                  <div class="row d-flex justify-content-center">
                    <div class="col-4">

                      <div class="form-floating">
                        <input type="textarea" name="descripcion" class="form-control" placeholder="Descripcion" required/>
                        <label for="floatingInput">Descripcion</label>
                      </div><br/>

                      <div class="form-floating">
                        <input type="number" onChange={calcularCantidad} name="cantidad" class="form-control" placeholder="Numero de entrada" required/>
                        <label for="floatingInput">Cantidad</label>
                      </div><br/>

                      <div class="alert alert-primary" role="alert">
                        <h4 class="alert-heading">Precio</h4>
                        <p></p>
                        <hr/>
                        <p class="mb-0">El precio en total por la cantidad es de: {cantidadTotal}</p>
                      </div>

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
