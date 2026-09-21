import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { NameProvider } from './context/NameContext.jsx';
import { MovieProvider } from './context/MovieContext.jsx';
import { BrowserRouter } from 'react-router-dom';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <NameProvider>
        <MovieProvider>
          <App />
        </MovieProvider>
      </NameProvider>
    </BrowserRouter>
  </StrictMode>
);
