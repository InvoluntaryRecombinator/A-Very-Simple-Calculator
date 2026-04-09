const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const add = document.getElementById("add");
const subtract = document.getElementById("subtract");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");
const output = document.getElementById("output");


function doAddition() {
  let result = Number(num1.value) + Number(num2.value);
  output.innerText = result;
};


function doSubtraction() {
  let result = Number(num1.value) - Number(num2.value);
  output.innerText = result;
};


function doMultiply() {
  let result = Number(num1.value) * Number(num2.value);
  output.innerText = result;
};


function doDivision() {
  let result = (Number(num1.value) / Number(num2.value)).toFixed(10);
  output.innerText = result;
};





add.addEventListener("click", doAddition);
subtract.addEventListener("click", doSubtraction);
multiply.addEventListener("click", doMultiply);
divide.addEventListener("click", doDivision);
