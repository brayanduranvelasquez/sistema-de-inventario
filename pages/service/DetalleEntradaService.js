import axios from 'axios';

export class DetalleEntradaService {
    baseUrl = "http://localhost:9000/detalle-entrada/api/"

  getTodasDetalleEntrada() {
		return axios.get(this.baseUrl + "all").then(res => res.data)
	}

  saveDetalleEntrada(producto){
    return axios.post(this.baseUrl + "save", producto). then(res => res.data)
	}

  deleteDetalleEntrada(id){
    return axios.post(this.baseUrl + "delete/" + id, null). then(res => res.data)
	}

  getDetalleEntrada(id){
    return axios.get(this.baseUrl + "find/" + id, null). then(res => res.data)
	}
}