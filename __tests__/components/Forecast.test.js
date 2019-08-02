/* eslint-disable import/no-unresolved */
/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';

import Forecast from '~/components/Forecast';

describe('Forecast Component', () => {
  it('should render correctly', () => {
    const dados = {
      temperatura: 'null',
      condicao: 'null',
      icon: 'null',
      amanha: {
        dia: 'null',
        max: 'null',
        min: 'null',
        condicao: 'null',
      },
      dpsAmanha: {
        dia: 'null',
        max: 'null',
        min: 'null',
        condicao: 'null',
      },
    };

    const { getByTestId } = render(<Forecast dados={dados} />);

    expect(getByTestId('forecast'));
  });
});
