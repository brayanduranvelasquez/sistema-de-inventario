import axios from 'axios';

export class CategoriaService {
    baseUrl = "http://localhost:9000/categoria/api/"

  getTodasCategorias() {
		return axios.get(this.baseUrl + "all").then(res => res.data)
	}

  saveCategoria(categoria){
    return axios.post(this.baseUrl + "save", categoria). then(res => res.data)
	}

  deleteCategoria(id){
    return axios.post(this.baseUrl + "delete/" + id, null). then(res => res.data)
	}
}