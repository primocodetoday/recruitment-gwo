import React from 'react';
import { render } from '@testing-library/react';
import { BookCard } from 'components';
import { OrderContextProvider } from 'context/OrderContext';

describe('<BookCard/> renders properly', () => {
  it('with passed data', () => {
    const props = {
      id: 34,
      cover_url: 'assets/img/fake.png',
      title: 'Nasza Szkapa',
      author: 'Maria Konopnicka',
      pages: 30,
    };

    const { getByText, container } = render(
      <OrderContextProvider>
        <BookCard book={props} />
      </OrderContextProvider>,
    );
    expect(getByText('Nasza Szkapa')).toBeTruthy();
    expect(getByText('30')).toBeTruthy();
    expect(getByText('Maria Konopnicka')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
