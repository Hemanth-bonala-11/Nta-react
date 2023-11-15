
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { Toaster } from 'react-hot-toast';


const rootElement=document.getElementById('root');
ReactDOM.render(
 
  <React.StrictMode>
    <Toaster/>
  <App />
</React.StrictMode>,

  rootElement

  // document.getElementById('root')
);