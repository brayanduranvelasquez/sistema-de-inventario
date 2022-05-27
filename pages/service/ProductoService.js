import axios from 'axios';

export class ProductoService {
    baseUrl = "http://localhost:9000/producto/api/"

  getTodosProductos() {
		return axios.get(this.baseUrl + "all").then(res => res.data)
	}

  saveProducto(producto){
    return axios.post(this.baseUrl + "save", producto). then(res => res.data)
	}
}