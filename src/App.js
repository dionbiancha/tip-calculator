import './App.css';
import React, { useState } from 'react';
import styled from 'styled-components';

const Input = styled.input `
  width: 400px;
  height: 30px;
`;

function App() {

  const [ valueCheck, setValueCheck] = useState('');

  const checkInput = (e) => {
    setValueCheck(e.target.valueCheck);
  };

  const [ valueTip, setValueTip] = useState('');

  const tipInput = (e) => {
    setValueTip(e.target.valueTip);
  };

  return (
    <div className="App">
      <h1>Tip Calculator</h1>

      <p>How much did the bill give?</p>
      <Input placeholder="Digite aqui" type="text" value={valueCheck} onChange={checkInput}/>

      <p>What is the percentage of the tip?</p>
      <Input placeholder="Digite aqui" type="text" value={valueTip} onChange={tipInput}/>

      <p>Sub Total: </p>
      <p>Tip:</p>
      <p>Total:</p>
    </div>
  );
}

export default App;
