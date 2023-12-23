import axios from 'axios';

class Controller {
    async getAllOrders(url) {
        try {
            const response = await axios.get(url);
            return response.data;

        }  catch(error) {   
            console.log('Erro na requisição GET:', error);
            throw error;
        }     
    } 
}

export default new Controller();
