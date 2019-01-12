"use strict"; // wont let double declaration eg int to string
let myGlobalVarable = 0;

// Self-Executing Anonymous Function
//IIFE - Immediately Invoked FUnction Expression

(function() {
  let myFunctionVariable = 0;

  function Start() {
    let startVariable = 0;
    console.log(`%cApp started....${myFunctionVariable}`, "font-size: 20px;");

    console.error(`%cApp started....${myFunctionVariable}`, "font-size: 20px;");

    console.warn(`%cApp started....${myFunctionVariable}`, "font-size: 20px;");
  }

  window.addEventListener("load", Start);
})(); // self executing function
