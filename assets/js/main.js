var level0 = document.getElementById('level0');
var level1a = document.getElementById('level1a');
var level1b = document.getElementById('level1b');
var level2a = document.getElementById('level2a');
var level2b = document.getElementById('level2b');
var numberBefore;

function showLevel0() {
  numberBefore = level0.value;
  if (isNaN(numberBefore) !== true) {
    Materialize.toast(numberBefore, 4000);
  } else {
    Materialize.toast('Please, input a number', 4000);
  }
}