import { useRouter } from "next/router";
import { ProductoService } from "../../service/ProductoService.js";
import Container from "../../../components/container.jsx";
import Link from "next/link";

export default function Home() {
  const router = useRouter();
  let id = router.query.id;
  let producto = router.query.producto;

  const eliminar = () => {
    let productoService = new ProductoService();
    productoService.deleteProducto(id).then(res => console.log(res.data));
  
    alert('Eliminado producto ' + router.query.producto);
    router.back();
  }

  return (
    <div>
      <Container>
      <main class="container-fluid">
          <div class="row justify-content-center">
            <div class="col-12 pb-2 pt-3">
              <div class="alert alert-primary">
                <center>
                  <h2>Eliminar Producto</h2>
                </center>
              </div> 
            </div>

            <div class="col-12 py-4">
              <div class="d-flex justify-content-center"><center>
                <i class="bi-info-circle" style={{ fontSize: "60px" }}></i>
                <h2>¡Ha solicitado eliminar el producto <b>{ producto }</b>!</h2>
                <p>Al eliminar este producto, ya no estará más disponible. ¿Está seguro que quiere eliminarlo?</p>

                <Link href="/productos">
                  <a class="btn btn-outline-danger mx-2">
                    Cancelar <i class="bi-x-lg icon"></i>
                  </a>
                </Link>
                <a class="btn btn-primary mx-2" onClick={eliminar}>
                  Eliminar <i class="bi-check-lg icon"></i>
                </a></center>
              </div>
            </div>
          </div>
      </main>
      </Container>
    </div>
  );
}
