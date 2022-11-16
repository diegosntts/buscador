import axios from "axios";

const api = axios.create({
    // Url da base da API ViaCep
    baseURL: "https://viacep.com.br/ws/"
})

export default api;