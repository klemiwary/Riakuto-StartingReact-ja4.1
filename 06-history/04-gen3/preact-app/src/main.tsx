import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import Signal from './Signal.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <Signal />
  </React.StrictMode>
);
