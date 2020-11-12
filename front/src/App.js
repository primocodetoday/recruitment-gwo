﻿import React from 'react';
import throttle from 'lodash/throttle';
import { Container } from 'react-bootstrap';
import { Loader, TopNav } from 'components';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import 'theme/siteTheme.scss';
import { routes } from 'routes';
import { Provider } from 'react-redux';
import store from 'redux/store';
import { saveStorage } from 'redux/localStorage';

// Lazy import
const Bookstore = React.lazy(() => import('views/Bookstore/Bookstore'));
const Basket = React.lazy(() => import('views/Basket/Basket'));
const Order = React.lazy(() => import('views/Order/Order'));
const Page404 = React.lazy(() => import('views/Page404/Page404'));

// localStorage
store.subscribe(
  throttle(() => {
    saveStorage(store.getState());
  }),
  1000,
);

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <TopNav />
        <Container as="main">
          <Switch>
            <Redirect exact from={routes.home} to={routes.shop_1} />
            <React.Suspense fallback={<Loader />}>
              <Route exact path={routes.shop}>
                <Redirect to={routes.shop_1} />
              </Route>
              <Route path={routes.shopParams} component={Bookstore} />
              <Route path={routes.basket} component={Basket} />
              <Route path={routes.order} component={Order} />
            </React.Suspense>
            <Route path="*" component={Page404} />
          </Switch>
        </Container>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
