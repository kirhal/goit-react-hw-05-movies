import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App';
import { FetchContext } from './instruments/fetchContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/goit-react-hw-05-movies">
      <FetchContext.Provider
        value={{
          key: 'api_key=333f62a31a9dde0333a7ccfec8a873a5',
          url: 'https://api.themoviedb.org/3/',
        }}
      >
        <App />
      </FetchContext.Provider>
    </BrowserRouter>
  </React.StrictMode>
);
