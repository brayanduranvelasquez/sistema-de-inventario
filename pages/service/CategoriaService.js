import axios from 'axios';

export class CategoriaService {
    baseUrl = "http://localhost:9000/categoria/api/"

    getTodasCategorias() {
		return axios.get(this.baseUrl + "all").then(res => res.data)
	}
}