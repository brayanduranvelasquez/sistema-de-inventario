import { useRouter } from "next/router";
import { CategoriaService } from "../../service/CategoriaService.js";
import Container from "../../../components/container.jsx";
import Link from "next/link";

export default function Home() {
  const router = useRouter();
  let id = router.query.id;
  let categoria = router.query.categoria;

  const eliminar = () => {
    let categoriaService = new CategoriaService();
    categoriaService.deleteCategoria(id).then(res => res.data);
  
    alert('Categoria eliminada: ' + router.query.categoria);
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
                  <h2>Eliminar Categoria</h2>
                </center>
              </div> 
            </div>

            <div class="col-12 py-4">
              <div class="d-flex justify-content-center"><center>
                <i class="bi-info-circle" style={{ fontSize: "60px" }}></i>
                <h2>¡Ha solicitado eliminar la categoria <b>{ categoria }</b>!</h2>
                <p>Al eliminar este producto, ya no estará más disponible. ¿Está seguro que quiere eliminarlo?</p>

                <Link href="/categorias">
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
