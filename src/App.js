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
    setValueCheck(e.target.value);
  };

  const [ valueTip, setValueTip] = useState('');

  const tipInput = (e) => {
    setValueTip(e.target.value);
  };

  return (
    <div className="App">
      <h1>Tip Calculator</h1>

      <p>How much did the bill give?</p>
      <Input placeholder="Type here" type="number" value={valueCheck} onChange={checkInput}/>

      <p>What is the percentage of the tip?</p>
      <Input placeholder="Type here" type="number" value={valueTip} onChange={tipInput}/>
      {
        valueCheck > 0 &&
        <>
          <p>Sub Total: R$ {valueCheck}</p>
          { valueTip > 0 &&
            <p>Tip ({valueTip}%): R$ {valueCheck/100 * valueTip}</p>
          }
          <h3>Total: R$ {parseInt(valueCheck) + parseInt((valueTip/100) * valueCheck)}</h3>
        </>
      }
    </div>
  );
}

export default App;
