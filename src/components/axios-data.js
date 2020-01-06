import axios from 'axios'

const instannce = axios.create({
    baseURL: 'https://online-shopping-15392.firebaseio.com/'
});

export default instannce;