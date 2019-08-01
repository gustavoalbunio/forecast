/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { PropTypes } from 'prop-types';
import { FaLongArrowAltDown, FaLongArrowAltUp } from 'react-icons/fa';

import { WForecast, Day } from './styles';

export default function Forecast({ dados }) {
  return (
    <WForecast data-testid="forecast">
      <Day>
        <h3>Hoje</h3>
        <div>
          <span>
            <img src={`/images/icons/${dados.icon}.png`} alt="" />
          </span>
          <span>
            <strong>{dados.temperatura}º</strong> C
          </span>
        </div>
        <span>{dados.condicao}.</span>
      </Day>
      <Day>
        <h3>{dados.amanha.dia}</h3>
        <div>
          <span>
            Max: <strong>{dados.amanha.max}º</strong> C
            <FaLongArrowAltUp size={18} color="#006400" />
          </span>
          <span>
            Min: <strong>{dados.amanha.min}º</strong> C
            <FaLongArrowAltDown size={18} color="#FF0000" />
          </span>
        </div>
        <span>{dados.amanha.condicao}</span>
      </Day>
      <Day>
        <h3>{dados.dpsAmanha.dia}</h3>
        <div>
          <span>
            Max: <strong>{dados.dpsAmanha.max}º</strong> C
            <FaLongArrowAltUp size={18} color="#006400" />
          </span>
          <span>
            Min: <strong>{dados.dpsAmanha.min}º</strong> C
            <FaLongArrowAltDown size={18} color="#FF0000" />
          </span>
        </div>
        <span>{dados.dpsAmanha.condicao}</span>
      </Day>
    </WForecast>
  );
}

Forecast.propTypes = {
  dados: PropTypes.object.isRequired,
};
