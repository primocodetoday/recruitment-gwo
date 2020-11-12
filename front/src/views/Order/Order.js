﻿import React from 'react';
import { Col } from 'react-bootstrap';
import { Header, OrderForm } from 'components';
import { Link } from 'react-router-dom';
import { routes } from 'routes';
import { useSelector } from 'react-redux';

const Order = () => {
  const [wasOrderPlaced, setOrderPlaced] = React.useState(false);

  const order = useSelector((state) => state.order);

  return (
    <Col xs={12} md={10} lg={6} className="px-1 mx-auto">
      <Header className="text-center">Zamówienie</Header>
      {wasOrderPlaced || order.length ? (
        <OrderForm setOrderPlaced={setOrderPlaced} />
      ) : (
        <p className="text-center">
          Ta strona jest niedostępna dla Ciebie dopóki nie dodasz pozycji do koszyka. <Link to={routes.shop}>Wróc</Link>{' '}
          na stronę sklepu
        </p>
      )}
    </Col>
  );
};

export default Order;
