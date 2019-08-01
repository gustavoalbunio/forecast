import axios from 'axios';

const clima = axios.create({
  baseURL: 'http://apiadvisor.climatempo.com.br',
});

export default clima;
