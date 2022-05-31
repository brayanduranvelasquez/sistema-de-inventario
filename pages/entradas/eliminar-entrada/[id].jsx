import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ProductoService } from "../../service/ProductoService.js";
import { EntradaProductoService } from "../../service/EntradaProductoService.js";
import Container from "../../../components/container.jsx";

export default function Home() {
  const router = useRouter();
  let id = parseInt(router.query.id); // ID entrada

  useEffect(() => {

    let entradaProductoService = new EntradaProductoService();
    entradaProductoService.getEntradaProducto(id).then((res) => eliminar(res));  

    const eliminar = (datos) => {
      let guardar = {}
      guardar.id = datos.id
      guardar.CreatedAt = datos.CreatedAt;
      guardar.UpdatedAt = datos.UpdatedAt;
      guardar.DeletedAt = datos.DeletedAt;
      guardar.numero_entrada = datos.numero_entrada;
      guardar.descripcion = datos.descripcion;
      guardar.status = 0;
  
      entradaProductoService.saveEntradaProducto(guardar).then((res) => redireccionar());  
  
      const redireccionar = () => {
        router.push("/entradas/");
      }
    }

    
  }, [])

  return (
     <div>
     </div>
  );
}
