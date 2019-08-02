/* eslint-disable import/no-unresolved */
/* eslint-disable no-undef */
import React from 'react';
import { render, cleanup } from '@testing-library/react';

import Forecast from '~/components/Forecast';

afterEach(cleanup);

describe('Forecast Component', () => {
  it('should render correctly', () => {
    const dados = {
      temperatura: '15',
      condicao: 'Ok',
      icon: '1',
      amanha: {
        dia: 'Quinta',
        max: '20',
        min: '10',
        condicao: 'Ok',
      },
      dpsAmanha: {
        dia: 'Sexta',
        max: '30',
        min: '20',
        condicao: 'Ok',
      },
    };

    const { getByTestId } = render(<Forecast dados={dados} />);

    expect(getByTestId('forecast'));
  });
});
