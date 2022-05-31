import axios from 'axios';

export class SalidaProductoService {
    baseUrl = "http://localhost:9000/salida-producto/api/"

  getTodasSalidaProducto() {
		return axios.get(this.baseUrl + "all").then(res => res.data)
	}

  saveSalidaProducto(producto){
    return axios.post(this.baseUrl + "save", producto). then(res => res.data)
	}

  deleteSalidaProducto(id){
    return axios.post(this.baseUrl + "delete/" + id, null). then(res => res.data)
	}

  getSalidaProducto(id){
    return axios.get(this.baseUrl + "find/" + id, null). then(res => res.data)
	}
}