import axios from 'axios';

export default axios.create({
    baseURL: 'https://db76-2001-b400-e2aa-6d88-a470-36b8-14dd-6510.jp.ngrok.io',
    headers: {
        'ngrok-skip-browser-warning': 'true',
        'Access-Control-Allow-Origin': '*'
    }
});