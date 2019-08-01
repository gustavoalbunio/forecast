import axios from 'axios';

const clima = axios.create({
  baseURL: 'https://apiadvisor.climatempo.com.br',
});

export default clima;
