/* eslint-disable no-undef */
/* eslint-disable import/no-unresolved */
import React from 'react';
import { render } from '@testing-library/react';

import Home from '../../src/pages/Home';

describe('Forecast component', () => {
  it('verifica a rendericação do search', () => {
    const { getByTestId } = render(<Home />);

    getByTestId('estado');
    getByTestId('cidade');
    getByTestId('button');
  });

  it('verifica a renderização do forecast', () => {
    const { getByTestId } = render(<Home />);

    getByTestId('forecast');
  });
});
