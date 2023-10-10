import React, { useState } from "react";
import { MDBBtn } from "mdb-react-ui-kit";


function Counter() {
    // state creation
    const[counter,setCounter]=useState(0)// apply value as initially 0
    // function counter
    function incrementCounter(){
        //increment by 1
        setCounter(counter+1)       
    }
    function decrementCounter(){
      if(counter!==0){
        // decrement by 1
        setCounter(counter-1)
      }
    }
    function resetCounter(){
        setCounter(counter*0)
    }
  return (
    <div className="m-5 p-5 d-flex justify-content-center align-items-center">
      <div className="container m-5 p-5 border border-4 border-warning shadow  rounded w-50 ">
        <h3 className="text-center">Counter App</h3>
        <h1 className="text-center">{counter}</h1>
        <div className="text-center ">
          <MDBBtn onClick={incrementCounter} className="btn btn-dark">INCREMENT</MDBBtn>
          <MDBBtn onClick={decrementCounter} className="btn btn-dark mx-4">DECREMENT</MDBBtn>
          <MDBBtn onClick={resetCounter} className="btn btn-dark mx-4">RESET</MDBBtn>
        
        </div>
      </div>
    </div>
  );
}

export default Counter;
