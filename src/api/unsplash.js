import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com', 
    headers: {
        Authorization: 'Client-ID ec558d4d9fe7a50eafc43d7d535af82ac4d19e1779d7f8ab0becd9386b02d804'
    }
});