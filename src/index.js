import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Contextfunc from './context/Context';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Contextfunc>
      <App />
    </Contextfunc>
  </BrowserRouter>
);