import React from 'react';
import Header from './components/Header';
import Form from './components/Form';
import './App.css';

const App = () => {
  return (<div className='container'>
    <div className='app-wrapper'>
      <div>
         <Header />
      </div>
      <div>
        <Form />
      </div>
    </div>
  </div>
  );
}

export default App;
