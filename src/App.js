import React, { useContext } from 'react';
import './App.css' ;
import Header from './components/Header';
import Feedback from './components/Feedback';
import { Contexts } from './context/OpenContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import CSS
import { Routes , Route } from 'react-router-dom';
import Responses from './components/Responses';
import axios from 'axios';


axios.defaults.baseURL = 'http://localhost:8000';
axios.withCredentials = true


function App() {

  const {questions} = useContext(Contexts) ;

  return (
    <div >
      <ToastContainer position='bottom-right'/>
      <Header />
      <Routes>
        <Route path='/' element={<Feedback /> }></Route>
        <Route path='/responses' element={<Responses />}></Route>
      </Routes>
    </div>
  )
}

export default App