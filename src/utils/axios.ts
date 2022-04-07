import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://www.nettruyenmoi.com'
})

export default instance;