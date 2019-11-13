import React from 'react';
import AddCustomer from "./components/addCustomer";
import Customers from './components/list';
import './App.css';

function App() {
  return (
    <div className="App">
      <Customers />
      <AddCustomer />
    </div>
  );
}

export default App;
