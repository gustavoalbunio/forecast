import React, { Component } from 'react';
import { FaSearch } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import HashLoader from 'react-spinners/HashLoader';
import 'react-toastify/dist/ReactToastify.css';
import {
  Container,
  Search,
  Form,
  SelectInput,
  SubmitButton,
  Default,
} from './styles';

import Forecast from '../../components/Forecast';

import ibge from '../../services/api_ibge';
import clima from '../../services/api_clima';
import config from '../../config/index';

export default class Home extends Component {
  state = {
    estados: [],
    cidades: [],
    estado: '',
    cidade: '',
    dias: [
      'Segunda-feira',
      'Terça-feira',
      'Quarta-feira',
      'Quinta-feira',
      'Sexta-feira',
      'Sábado',
      'Domingo',
    ],
    status: '',
  };

  async componentDidMount() {
    try {
      const { data } = await ibge.get('/api/v1/localidades/estados');

      this.setState({ estados: data, status: 'default' });
    } catch (err) {
      this.handleMessage(
        'Ops! Tivemos problemas para buscar os estados. Tente novamente mais tarde ou contate nosso administrador.'
      );
      this.setState({ status: 'error' });
    }
  }

  handleChangeSelect = async e => {
    const { value } = e.target;
    const { value: type } = e.target.attributes['data-testid'];

    switch (type) {
      case 'estado':
        try {
          const { data } = await ibge.get(
            `/api/v1/localidades/estados/${value}/municipios`
          );
          this.setState({
            estado: value,
            cidades: data,
            cidade: '',
          });
        } catch (error) {
          this.setState({ status: 'error' });
          this.handleMessage(
            'Ops! Tivemos problemas para buscar as cidades. Tente novamente mais tarde ou contate nosso administrador.'
          );
        }
        break;
      case 'cidade':
        this.setState({ cidade: value });
        break;
      default:
        break;
    }
  };

  handleChangeForecast = async e => {
    e.preventDefault();

    this.setState({ status: 'loading' });

    const { estado, cidade, dias } = this.state;

    if (!estado || !cidade) {
      this.handleMessage(
        'Desculpe. É necessário selecionar o estado e a cidade.'
      );
      this.setState({ status: 'default' });
      return;
    }

    try {
      const { data: city } = await clima.get(`/api/v1/locale/city`, {
        params: {
          name: cidade,
          token: config.token,
        },
      });

      const [prev, temp] = await Promise.all([
        clima.get(`/api/v1/forecast/locale/${city[0].id}/days/15`, {
          params: {
            token: config.token,
          },
        }),
        clima.get(`/api/v1/weather/locale/${city[0].id}/current`, {
          params: {
            token: config.token,
          },
        }),
      ]);

      this.setState({
        dados: {
          temperatura: temp.data.data.temperature,
          condicao: temp.data.data.condition,
          icon: temp.data.data.icon,
          amanha: {
            dia: dias[new Date(prev.data.data[1].date).getDay()],
            max: prev.data.data[1].temperature.max,
            min: prev.data.data[1].temperature.min,
            condicao: prev.data.data[1].text_icon.text.phrase.reduced,
          },
          dpsAmanha: {
            dia: dias[new Date(prev.data.data[2].date).getDay()],
            max: prev.data.data[2].temperature.max,
            min: prev.data.data[2].temperature.min,
            condicao: prev.data.data[2].text_icon.text.phrase.reduced,
          },
        },
        status: 'success',
      });
    } catch (error) {
      this.setState({ status: 'error' });
      this.handleMessage(
        'Ops! Algo deu errado no momento em que buscavamos os dados. Tente novamente mais tarde ou contate nosso administrador.'
      );
    }
  };

  handleMessage = msg => {
    toast(msg, {
      autoClose: 5000,
      type: toast.TYPE.ERROR,
      className: 'toastContainer',
    });
  };

  render() {
    const { estados, cidades, estado, cidade, status, dados } = this.state;

    return (
      <Container>
        <Search data-testid="search">
          <h1>Previsão do Tempo</h1>
          <Form data-testid="form" onSubmit={this.handleChangeForecast}>
            <SelectInput
              data-testid="estado"
              onChange={this.handleChangeSelect}
              value={estado}
            >
              <option value="">Selecione</option>
              {estados.map(item => (
                <option key={item.id} value={item.id}>
                  {item.sigla}
                </option>
              ))}
            </SelectInput>
            <SelectInput
              data-testid="cidade"
              onChange={this.handleChangeSelect}
              value={cidade}
            >
              <option value="">Selecione</option>
              {cidades.map(item => (
                <option key={item.id} value={item.nome}>
                  {item.nome}
                </option>
              ))}
            </SelectInput>
            <SubmitButton data-testid="button">
              <FaSearch size={16} color="#FFF" />
            </SubmitButton>
          </Form>
        </Search>

        {(() => {
          switch (status) {
            case 'default':
              return <Default>Escolha um estado e uma cidade agora.</Default>;
            case 'error':
              return (
                <Default>
                  <img
                    src="https://freefrontend.com/assets/img/html-css-404-page-templates/HTML-404-Page-with-SVG.gif"
                    alt="Error 404"
                    width="100%"
                  />
                </Default>
              );
            case 'loading':
              return (
                <Default>
                  <HashLoader size={50} color="#31b8f5" />
                </Default>
              );
            case 'success':
              return <Forecast dados={dados} />;
            default:
              break;
          }
          return true;
        })()}

        <ToastContainer />
      </Container>
    );
  }
}
