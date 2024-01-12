import axios from 'axios';
import API_REQUESTS from './ApiManager';

class Controller {

    async getOrders() {
        const queryParams = {
            params: {
                status: 1
            }
        }
 
        try {
            const response = await axios.get(API_REQUESTS.pendingOrders, queryParams);
            return response.data;

        }  catch(error) {   
            console.log('Erro na requisição GET:', error);
            throw error;
        }     
    } 


}



export default new Controller();