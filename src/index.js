import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Router } from 'react-router-dom';

const Index = () => {
  return(
   <Router>
<App />
   </Router>
  )
 }


const root  = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>)

