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
  let id = parseInt(router.query.id); // ID salida

  const [producto, setProducto] = useState([]);
  const [salidaProducto, setSalidaProducto] = useState([]);
  const [detalleSalida, setDetalleSalida] = useState([]);

  useEffect(() => {

    let salidaProductoService = new SalidaProductoService();
    salidaProductoService.getSalidaProducto(id).then((res) => setSalidaProducto(res));  

    let detalleSalidaService = new DetalleSalidaService();
    detalleSalidaService.getDetalleSalida(id).then((res) => setDetalleSalida(res));
    
  }, [])

  let productoService = new ProductoService();
  productoService.getProducto(detalleSalida.id_producto).then((res) => setProducto(res));

  const eliminar = () => {
    let confirmacion = window.confirm('¿Seguro quiere eliminar esta salida?')
    
    if(confirmacion == true) {
      router.push("/salidas/eliminar-salida/" + id);
    }

  }

  return (
     <div>
        <Head>
          <title>Detalles de la salida</title>
        </Head>

        <Container>
          <main class="container-fluid">
            <div class="row">

              <div class="col-12 p-2">
                <div class="alert alert-primary">
                  <center>
                    <h2>Detalles de la salida</h2>
                  </center>
                </div>
              </div>

              <div class="d-flex justify-content-center py-4">
                <div class="card center">
                  <div class="card-body">
                    <h3 class="card-title">Producto: <b>{producto.nombre}</b></h3>
                    <br />
                    <p class="card-text fs-5">
                      <ul>
                        <li>Fecha: {salidaProducto.CreatedAt}</li>
                        <li>Numero de salida: {salidaProducto.numero_salida}</li>
                        <li>Descripcion: {salidaProducto.descripcion}</li>
                        <li>Cantidad total: {detalleSalida.cantidad}</li>
                        <li>Precio: {detalleSalida.cantidad}bsS</li>
                      </ul>
                    </p>
                    <br />
                    
                      <a class="btn btn-outline-danger" onClick={eliminar}>
                        Eliminar
                      </a>
                    
                  </div>
                </div>
              </div>

              <div class="col-12 pb-3">
                <Link href="/entradas">
                  <a class="btn btn-outline-primary px-5">Regresar</a>
                </Link>
              </div>

            </div>
          </main>
        </Container>
     </div>
  );
}
