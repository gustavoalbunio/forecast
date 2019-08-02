/* eslint-disable import/no-unresolved */
/* eslint-disable no-undef */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Home from '~/pages/Home';

describe('Home Class', () => {
  it('should take and send the data', () => {
    const { getByTestId, debug } = render(<Home />);

    fireEvent.change(getByTestId('estado'), { target: { value: 41 } });
    fireEvent.change(getByTestId('cidade'), { target: { value: 'Curitiba' } });
    fireEvent.click(getByTestId('button'));

    debug();

    expect(getByTestId('forecast'));
  });
});
