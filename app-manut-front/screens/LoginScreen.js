import axios from 'axios';
import API_REQUESTS from '../controller/ApiManager';


const token =  getToken(API_REQUESTS.login, 'admin', 'admin')

export default token;

async function getToken(url_login, username, password) {
    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
    };

    const data = {
        'username': username,
        'password': password
    };

    try {
        // Faz a solicitação POST usando Axios
        const response = await axios.post(url_login, data,  { headers } );

        // Retorna o token obtido
        return response.data;
    } catch (error) {
        console.error('Erro:', error.message);
        throw error; // Rejeita a Promise para que o erro possa ser tratado no código de chamada
    }
}