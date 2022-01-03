import React, { useState } from 'react';
import "./App.css";
import  Button  from "./components/Button";
import  Input  from "./components/Input";
import  ClearButton  from "./components/ClearButton";
import * as math from "mathjs";

function App() {
  function checkOperator(val){
    if(val==='/'||val==='*'||val==='+'||val==='-'||val==='.') return true;
    return false;
  }//function to check a char is operator
  const [TextInput, addtoInput] = useState("")//initialize input variable in showbox 
  const [flagOutput,editFlag]=useState("false")//initialize a variable to flag that it is lastoutput or not
  const handleInput = (Val) => {
    const last=TextInput.slice(-1);
    if(checkOperator(Val)&&checkOperator(last)) return;//avoid 2 operator next by like: +-
    if(flagOutput===true && !checkOperator(Val)) addtoInput(Val.toString());// if just out the output, we press number-->number;
    else addtoInput(TextInput + Val.toString());// operator-->continue the expression
    editFlag(false);
  }
  function handleEqual(){
    editFlag(true);
    addtoInput((math.evaluate(TextInput)).toString());// calculate by math library
  }
  function handleClear(){
   addtoInput("");
  }
  return (
    <> 
    <div className="app">
        <div className="calc-wrapper">
          <Input input={TextInput} />
          <div className="row">
            <Button handleInput={handleInput} val={7}></Button>
            <Button handleInput={handleInput} val={8}></Button>
            <Button handleInput={handleInput} val={9}></Button>
            <Button handleInput={handleInput} val={'/'}></Button>
          </div>
          <div className="row">
            <Button handleInput={handleInput} val={4}></Button>
            <Button handleInput={handleInput} val={5}></Button>
            <Button handleInput={handleInput} val={6}></Button>
            <Button handleInput={handleInput} val={'*'}></Button>
          </div>
          <div className="row">
            <Button handleInput={handleInput} val={1}></Button>
            <Button handleInput={handleInput} val={2}></Button>
            <Button handleInput={handleInput} val={3}></Button>
            <Button handleInput={handleInput} val={'+'}></Button>
          </div>
          <div className="row">
            <Button handleInput={handleInput} val={'.'}></Button>
            <Button handleInput={handleInput} val={0}></Button>
            <Button handleInput={handleEqual} val={'='}></Button>
            <Button handleInput={handleInput} val={'-'}></Button>
          </div>
          <div className="row">
            <ClearButton handleClear={handleClear} val={"Clear"}>
            </ClearButton>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;
