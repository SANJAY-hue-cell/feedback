import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContextsProvider from './context/OpenContext';
import {BrowserRouter} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextsProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ContextsProvider>
  </React.StrictMode>
);
