import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';
import Logo from './components/Logo';
import Nav from './components/Nav';
import Footer from './components/Footer';
import RouterApp from "./router";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return (
    <div className="App">
       <Logo />
       <Nav />
       <RouterApp />
       <Footer />
       <ToastContainer autoClose={3000}/>
    </div>
  );
}
