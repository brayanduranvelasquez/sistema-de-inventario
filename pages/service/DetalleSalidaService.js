import axios from 'axios';

export class DetalleSalidaService {
    baseUrl = "http://localhost:9000/detalle-salida/api/"

  getTodasDetalleSalida() {
		return axios.get(this.baseUrl + "all").then(res => res.data)
	}

  saveDetalleSalida(producto){
    return axios.post(this.baseUrl + "save", producto). then(res => res.data)
	}

  deleteDetalleSalida(id){
    return axios.post(this.baseUrl + "delete/" + id, null). then(res => res.data)
	}

  getDetalleSalida(id){
    return axios.get(this.baseUrl + "find/" + id, null). then(res => res.data)
	}
}