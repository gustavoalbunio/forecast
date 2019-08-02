/* eslint-disable import/no-unresolved */
/* eslint-disable no-undef */
import React from 'react';
import { render, cleanup } from '@testing-library/react';

import Home from '~/pages/Home';

afterEach(cleanup);

describe('Forecast Component', () => {
  it('should render correctly', () => {
    const { getByText } = render(<Home />);

    expect(getByText(/Escolha/i).textContent).toBe(
      'Escolha um estado e uma cidade agora.'
    );
  });
});
