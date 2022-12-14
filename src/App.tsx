import React from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators, State } from './state';

function App() {
  const dispatch = useDispatch()
  const amount = useSelector((state: State) => state.bank)
  const { deposit, withdraw, bankrupt } = bindActionCreators(actionCreators, dispatch)
  return (
    <div className="App">
      <h1>{amount}</h1>
      <button onClick={() => deposit(1000)}>Deposit</button>
      <button onClick={() => withdraw(20)}>Withdraw</button>
      <button onClick={() => bankrupt()}>Bankrupt</button>
    </div>
  );
}

export default App;
