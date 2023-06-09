import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {Suspense} from 'react';

import './i18n';
import App from './App';
import {colors} from './utils/style/colors';
import {GlobalStyle} from './utils/style/GlobalStyle';
import {Loading} from './utils/style/Atoms';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    { colors &&
      <>
        <Suspense fallback={<Loading/>}>
          <GlobalStyle />
          <App />
        </Suspense>
      </>
    }
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
