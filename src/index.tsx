import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import './mdb-ui-kit/css/mdb.min.css';
import 'font-awesome/css/font-awesome.min.css';
import { BrowserRouter } from 'react-router-dom';
import SrRotes from './Routes/Route'
import NavBar from './Shared/Navbar';
import { ToastContainer } from 'react-toastify';
import CustomComp, { TEmployee } from './components/Custom/CustomHook'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const tEmployee : TEmployee ={
  age:10,
  department:{
    id:1,
    loc:'Hyd',
    name:'IT'
  },
  name:'Pranav'
}

root.render(
  <BrowserRouter>
    <NavBar />
    <SrRotes />
    <ToastContainer position="top-center" />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
