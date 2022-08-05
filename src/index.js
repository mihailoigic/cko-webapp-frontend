import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './app/store';
import {BrowserRouter} from 'react-router-dom';
import GetRoutes from "./routes";
import 'bootstrap/dist/css/bootstrap.css';
import './view/assets/scss/index.scss';
import Header from './view/components/header';
import Footer from './view/components/footer';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
        <BrowserRouter>
            <Header />
            <GetRoutes/>
            <Footer />
        </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
