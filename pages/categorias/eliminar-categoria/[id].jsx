import { useRouter } from "next/router";
import { CategoriaService } from "../../service/CategoriaService.js";

export default function Home() {
  const router = useRouter();
  let id = router.query.id;

  let categoriaService = new CategoriaService();
  categoriaService.deleteCategoria(id).then(res => console.log(res.data));

  alert('Categoria eliminada')
  router.push('/categorias');

  return (
    <div>
    </div>
  );
}
