﻿/* eslint-disable camelcase */
import React from 'react';
import { Button, Row, Col, Media } from 'react-bootstrap';
import { OrderContext } from 'context/OrderContext';

// author:
// cover_url: 'http://localhost:3001/static/cover/book/457.jpg';
// currency: 'PLN';
// id: 457;
// pages: 280;
// price:
// title: '

export const BookCard = ({ book }) => {
  const { dispatch } = React.useContext(OrderContext);

  const { id, title, cover_url, author, pages } = book;

  return (
    <div className=" card p-3 mx-auto mb-3 d-flex align-items-stretch h-100">
      <Row xs={1} sm={2} className="px-2 ">
        <Col sm={5}>
          <Media>
            <img
              className="img-fluid rounded border mx-auto mb-3"
              src={cover_url}
              alt={title}
            />
          </Media>
        </Col>
        <Col sm={7} className="d-flex flex-column justify-content-between">
          <div>
            <p className="h6 mx-auto mb-2 text-uppercase">{book.title}</p>
          </div>
          <p>
            Autorzy: <strong>{author}</strong>
          </p>
          <p>
            Liczba stron: <strong>{pages}</strong>
          </p>
        </Col>
      </Row>
      <Button
        className="ml-auto mt-auto"
        variant="outline-primary"
        onClick={() =>
          dispatch({ type: 'ADD_BOOK', payload: { id, quantity: 1 } })
        }
      >
        Do koszyka
      </Button>
    </div>
  );
};
