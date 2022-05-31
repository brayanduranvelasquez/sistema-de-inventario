import axios from 'axios';

export class EntradaProductoService {
    baseUrl = "http://localhost:9000/entrada-producto/api/"

  getTodasEntradaProducto() {
		return axios.get(this.baseUrl + "all").then(res => res.data)
	}

  saveEntradaProducto(producto){
    return axios.post(this.baseUrl + "save", producto). then(res => res.data)
	}

  deleteEntradaProducto(id){
    return axios.post(this.baseUrl + "delete/" + id, null). then(res => res.data)
	}

  getEntradaProducto(id){
    return axios.get(this.baseUrl + "find/" + id, null). then(res => res.data)
	}
}