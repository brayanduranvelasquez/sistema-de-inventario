import Head from "next/head";
import Link from 'next/link';
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ProductoService } from "../../service/ProductoService.js";
import { EntradaProductoService } from "../../service/EntradaProductoService.js";
import { DetalleEntradaService } from "../../service/DetalleEntradaService.js";
import Container from "../../../components/container.jsx";

export default function Home() {
  const router = useRouter();
  let id = parseInt(router.query.id); // ID entrada

  const [producto, setProducto] = useState([]);
  const [entradaProducto, setEntradaProducto] = useState([]);
  const [detalleEntrada, setDetalleEntrada] = useState([]);

  useEffect(() => {

    let entradaProductoService = new EntradaProductoService();
    entradaProductoService.getEntradaProducto(id).then((res) => setEntradaProducto(res));  

    let detalleEntradaService = new DetalleEntradaService();
    detalleEntradaService.getDetalleEntrada(id).then((res) => setDetalleEntrada(res));
    
  }, [])

  let productoService = new ProductoService();
  productoService.getProducto(detalleEntrada.id_producto).then((res) => setProducto(res));

  const eliminar = () => {
    let confirmacion = window.confirm('¿Seguro quiere eliminar esta entrada?')
    
    if(confirmacion == true) {
      router.push("/entradas/eliminar-entrada/" + id);
    }

  }

  return (
     <div>
        <Head>
          <title>Detalles de la entrada</title>
        </Head>

        <Container>
          <main class="container-fluid">
            <div class="row">

              <div class="col-12 p-2">
                <div class="alert alert-primary">
                  <center>
                    <h2>Detalles de la entrada</h2>
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
                        <li>Fecha: {entradaProducto.CreatedAt}</li>
                        <li>Numero de entrada: {entradaProducto.numero_entrada}</li>
                        <li>Descripcion: {entradaProducto.descripcion}</li>
                        <li>Cantidad total: {detalleEntrada.cantidad}</li>
                        <li>Precio: {detalleEntrada.cantidad}bsS</li>
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
