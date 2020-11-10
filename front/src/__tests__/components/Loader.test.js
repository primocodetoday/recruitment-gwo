import React from 'react';
import { render } from '@testing-library/react';
import { Loader } from 'components';

it('<Loader/> render properly', () => {
  const { getByText, container } = render(<Loader />);
  expect(getByText('Loading...')).toBeTruthy();
  expect(container.firstChild).toMatchSnapshot();
});
