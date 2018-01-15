var level0 = document.getElementById('level0');
var level1a = document.getElementById('level1a');
var level1b = document.getElementById('level1b');
var level2a = document.getElementById('level2a');
var level2b = document.getElementById('level2b');
var level2c = document.getElementById('level2c');
var numberBefore;
var number0;
var number1;
var boolean0;
var result;

function showLevel0() {
  numberBefore = level0.value;
  if (isNaN(numberBefore) !== true) {
    result = Number(numberBefore);
    Materialize.toast(`Your number is ${result}`, 1000);
  } else {
    Materialize.toast('Please, input a number', 1000);
  }
}

function showAdd() {
  number0 = level1a.value;
  number1 = level1b.value;
  if (isNaN(number0) !== true && isNaN(number1) !== true) {
    result = Number(number0) + Number(number1);
    Materialize.toast(`${number0} + ${number1} = ${result}`, 1000);
  } else if (isNaN(number0) !== true && isNaN(number1) === true) {
    Materialize.toast('Your first input is a number, but your second input is not a number. Please, input a number', 1000);
  } else if (isNaN(number0) === true && isNaN(number1) !== true) {
    Materialize.toast('Your second input is a number, but your first input is not a number. Please, input a number', 1000);
  } else {
    Materialize.toast('Please, input a number', 1000);
  }
}

function showSubstract() {
  number0 = level1a.value;
  number1 = level1b.value;
  if (isNaN(number0) !== true && isNaN(number1) !== true) {
    result = Number(number0) - Number(number1);
    Materialize.toast(`${number0} - ${number1} = ${result}`, 1000);
  } else if (isNaN(number0) !== true && isNaN(number1) === true) {
    Materialize.toast('Your first input is a number, but your second input is not a number. Please, input a number', 1000);
  } else if (isNaN(number0) === true && isNaN(number1) !== true) {
    Materialize.toast('Your second input is a number, but your first input is not a number. Please, input a number', 1000);
  } else {
    Materialize.toast('Please, input a number', 1000);
  }
}

function showMultiply() {
  number0 = level1a.value;
  number1 = level1b.value;
  if (isNaN(number0) !== true && isNaN(number1) !== true) {
    result = Number(number0) * Number(number1);
    Materialize.toast(`${number0} x ${number1} = ${result}`, 1000);
  } else if (isNaN(number0) !== true && isNaN(number1) === true) {
    Materialize.toast('Your first input is a number, but your second input is not a number. Please, input a number', 1000);
  } else if (isNaN(number0) === true && isNaN(number1) !== true) {
    Materialize.toast('Your second input is a number, but your first input is not a number. Please, input a number', 1000);
  } else {
    Materialize.toast('Please, input a number', 1000);
  }
}

function showDivide() {
  number0 = level1a.value;
  number1 = level1b.value;
  if (isNaN(number0) !== true && isNaN(number1) !== true) {
    result = Number(number0) / Number(number1);
    Materialize.toast(`${number0} / ${number1} = ${result}`, 1000);
  } else if (isNaN(number0) !== true && isNaN(number1) === true) {
    Materialize.toast('Your first input is a number, but your second input is not a number. Please, input a number', 1000);
  } else if (isNaN(number0) === true && isNaN(number1) !== true) {
    Materialize.toast('Your second input is a number, but your first input is not a number. Please, input a number', 1000);
  } else {
    Materialize.toast('Please, input a number', 1000);
  }
}

function showRemainder() {
  number0 = level1a.value;
  number1 = level1b.value;
  if (isNaN(number0) !== true && isNaN(number1) !== true) {
    result = Number(number0) % Number(number1);
    Materialize.toast(`${number0} % ${number1} = ${result}`, 1000);
  } else if (isNaN(number0) !== true && isNaN(number1) === true) {
    Materialize.toast('Your first input is a number, but your second input is not a number. Please, input a number', 1000);
  } else if (isNaN(number0) === true && isNaN(number1) !== true) {
    Materialize.toast('Your second input is a number, but your first input is not a number. Please, input a number', 1000);
  } else {
    Materialize.toast('Please, input a number', 1000);
  }
}

function showAddLevel2() {
  number0 = level2a.value;
  textBefore = level2b.value;
  boolean0 = level2c.checked;
  if (isNaN(number0) !== true) {
    result = Number(number0) + textBefore + Boolean(boolean0);
    Materialize.toast(`${number0} + ${textBefore} + ${boolean0}= ${result}`, 1000);
  } else {
    Materialize.toast('Please, input a number', 1000);
  }
}

function showSubstractLevel2() {
  number0 = level2a.value;
  textBefore = level2b.value;
  boolean0 = level2c.checked;
  if (isNaN(number0) !== true) {
    result = Number(number0) - textBefore - Boolean(boolean0);
    Materialize.toast(`${number0} - ${textBefore} - ${boolean0}= ${result}`, 1000);
  } else {
    Materialize.toast('Please, input a number', 1000);
  }
}

function showMultiplyLevel2() {
  number0 = level2a.value;
  textBefore = level2b.value;
  boolean0 = level2c.checked;
  if (isNaN(number0) !== true) {
    result = Number(number0) * textBefore * Boolean(boolean0);
    Materialize.toast(`${number0} x ${textBefore} x ${boolean0}= ${result}`, 1000);
  } else {
    Materialize.toast('Please, input a number', 1000);
  }
}

function showDivideLevel2() {
  number0 = level2a.value;
  textBefore = level2b.value;
  boolean0 = level2c.checked;
  if (isNaN(number0) !== true) {
    result = Number(number0) / textBefore / Boolean(boolean0);
    Materialize.toast(`${number0} / ${textBefore} / ${boolean0}= ${result}`, 1000);
  } else {
    Materialize.toast('Please, input a number', 1000);
  }
}

function showRemainderLevel2() {
  number0 = level2a.value;
  textBefore = level2b.value;
  boolean0 = level2c.checked;
  if (isNaN(number0) !== true) {
    result = Number(number0) % textBefore % Boolean(boolean0);
    Materialize.toast(`${number0} % ${textBefore} % ${boolean0}= ${result}`, 1000);
  } else {
    Materialize.toast('Please, input a number', 1000);
  }
}