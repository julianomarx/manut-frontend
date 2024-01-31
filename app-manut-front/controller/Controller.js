import API_REQUESTS from './ApiManager';

const Controller = {
 
    getPendingOrders: async function(token) {

        const url = API_REQUESTS.pendingOrders;

        const headers = {
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`
        };
    
        const res = await fetch(url, {
            method: 'GET',
            headers: headers
        })
        
        return res.json()
        
    }
}

export default Controller;



