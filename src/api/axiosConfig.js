import axios from 'axios';

export default axios.create({
    baseURL: ' https://745b-2401-e180-8883-2fda-50fd-9b62-ae82-ffce.ngrok-free.app',
    headers: {
        'ngrok-skip-browser-warning': 'true',
        'Access-Control-Allow-Origin': '*'
    }
});