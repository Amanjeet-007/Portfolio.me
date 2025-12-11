import React , { StrictMode } from 'react'
import ReactDOM from 'react-dom/client';
import './index.css'
import App from './App.jsx'
import store from './component/Store.js'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router';


ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Provider store={store}>
     <RouterProvider router={App}/>
    </Provider>
  </StrictMode>
);
