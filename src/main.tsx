import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// The portfolio now uses one fixed Neon Core theme. Clear state from the removed selector.
document.documentElement.removeAttribute('data-theme');
window.localStorage.removeItem('portfolio-theme');
window.localStorage.removeItem('portfolio-theme-v2');

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
