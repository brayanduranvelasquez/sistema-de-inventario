import { useRouter } from "next/router";
import { useEffect } from "react";
import { SalidaProductoService } from "../../service/SalidaProductoService.js";

export default function Home() {
  const router = useRouter();
  let id = parseInt(router.query.id); // ID salida

  useEffect(() => {

    let salidaProductoService = new SalidaProductoService();
    salidaProductoService.getSalidaProducto(id).then((res) => eliminar(res));  

    const eliminar = (datos) => {
      let guardar = {}
      guardar.id = datos.id
      guardar.CreatedAt = datos.CreatedAt;
      guardar.UpdatedAt = datos.UpdatedAt;
      guardar.DeletedAt = datos.DeletedAt;
      guardar.numero_entrada = datos.numero_entrada;
      guardar.descripcion = datos.descripcion;
      guardar.status = 0;
  
      salidaProductoService.saveSalidaProducto(guardar).then((res) => redireccionar());  
  
      const redireccionar = () => {
        router.push("/salidas/");
      }
    }
    
  }, [])

  return (
     <div>
     </div>
  );
}
