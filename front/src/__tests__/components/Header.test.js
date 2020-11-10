import React from 'react';
import { render } from '@testing-library/react';
import { Header } from 'components';

it('<Header/> render properly', () => {
  const { getByText, container } = render(<Header>Testing</Header>);
  expect(getByText('Testing')).toBeTruthy();
  expect(container.firstChild).toMatchSnapshot();
});
