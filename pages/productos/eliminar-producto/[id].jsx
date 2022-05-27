import { useRouter } from "next/router";
import { ProductoService } from "../../service/ProductoService.js";

export default function Home() {
  const router = useRouter();
  let id = router.query.id;

  let productoService = new ProductoService();
  productoService.deleteProducto(id).then(res => console.log(res.data));

  alert('Producto eliminado')
  router.push('/productos');

  return (
    <div>
    </div>
  );
}
