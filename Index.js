import React from 'react';
import ReactDOM from 'react-dom';
import './bootstrap-grid.min.css';
import Apply from './App.js';
import rWebVit from './rWebVit';
import AddComponent from './Add.jsx';
import axios from 'axios';


const options = {
  method: 'GET',
  url: 'https://ms-finance.p.rapidapi.com/market/v2/auto-complete',
  params: {q: 'index'},
  headers: {
    'X-RapidAPI-Key': '56a788f88dmshb413cd489afd77dp142e2djsnc8c097e389e6',
    'X-RapidAPI-Host': 'ms-finance.p.rapidapi.com'
  }
};

const root = ReactDOM.createRoot(document.getElementById('root'));

class APIComponent extends React.Component{
    render(){      
      axios.request(options).then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        console.error(error);
      });
  
      return (
        <h1> Welcome to secondary world </h1>
      );
      }
  }

  root.render( 
    <React.StrictMode>
        <APIComponent />
        <Apply />
        <AddComponent />
    </React.StrictMode>
  );

rWebVit();

const rWebVit = onPerfEntry => {
    if (onPerfEntry && onPerfEntry instanceof Function) {
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS(onPerfEntry);
        getFID(onPerfEntry);
        getFCP(onPerfEntry);
        getLCP(onPerfEntry);
        getTTFB(onPerfEntry);
      });
    }
  };
  
  export default rWebVit;