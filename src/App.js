import React, { Component }  from 'react';
import Wrapper from "./components/Wrapper";
import Screen from "./components/Screen";
import ButtonBox from "./components/ButtonBox";
import Button from "./components/Button";
import CalcProvider from "./context/CalcContext";

const btnvals = [[7,8,9,"C"],
                [4,5,6,"/"],
                [1,2,3,"X"],
                [0,"+","-","="]];

function App() {
  return (
    <CalcProvider>
      <Wrapper>
        <Screen />
        <ButtonBox>
          {btnvals.flat().map((btn,i) => (
            <Button value={btn} key = {i} />
          ))}
        </ButtonBox>
      </Wrapper>
    </CalcProvider>
  );
}

export default App;
