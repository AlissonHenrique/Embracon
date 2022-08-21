import axios from 'axios';
 

export function apiCep (cep:any){
    return axios.get(`https://viacep.com.br/ws/${cep}/json/`)
}
