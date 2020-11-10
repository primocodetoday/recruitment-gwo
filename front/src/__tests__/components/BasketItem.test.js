import React from 'react';
import { render } from '@testing-library/react';
import { BasketItem } from 'components';
import { OrderContextProvider } from 'context/OrderContext';

describe('<BasketItem/> renders properly', () => {
  it('with passed data', () => {
    const props = {
      id: 34,
      title: 'Nasza Szkapa',
      quantity: 1,
      price: 2000,
    };

    const { getByText, container } = render(
      <OrderContextProvider>
        <BasketItem key={props.id} title={props.title} quantity={props.quantity} price={props.price} id={props.id} />,
      </OrderContextProvider>,
    );
    expect(getByText('Nasza Szkapa')).toBeTruthy();
    expect(getByText('20,00 zł')).toBeTruthy();
    expect(getByText('1')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
