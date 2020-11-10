import React from 'react';
import { render } from '@testing-library/react';
import { BasketHeader } from 'components';

it('<BasketHeader/> render properly', () => {
  const { getByText, container } = render(<BasketHeader />);
  expect(getByText('tytuł')).toBeTruthy();
  expect(getByText('szt.')).toBeTruthy();
  expect(getByText('cena')).toBeTruthy();
  expect(container.firstChild).toMatchSnapshot();
});
