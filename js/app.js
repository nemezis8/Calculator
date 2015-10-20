var app = angular.module('jsCalculator', []);

app.controller('CalculatorController', function() {
  // Display values.
  this.output = '0';
  this.outputHistory = '0';

  // Logic values.
  var answer = null;
  var formula = [];
  var biggestInt = 9007199254740992;
  var smallestInt = -9007199254740992;


  /****************************************************************************
  * Button presses.
  ****************************************************************************/

  // A number (or decimal) button is pressed.
  this.inputNumber = function(num) {

  };

  // An operation button is pressed.
  this.inputOperation = function(op) {

  };

  // The clear button is pressed.
  this.inputClear = function() {

  };

  // The equals button is pressed.
  this.inputEvaluate = function() {

  };


  /****************************************************************************
  * The calculator's (simple) brain.
  ****************************************************************************/

  function evaluate() {

  }


  /****************************************************************************
  * Functions to prevent display from overflowing.
  ****************************************************************************/

  function condenseString(str, maxLength, fromEnd) {
    if (str.length <= maxLength) {
      return str;
    }

    if (fromEnd) {
      return '...' + str.split('').slice(str.length - (maxLength - 3)).join('');
    } else {
      return str.split('').slice(0, maxLength - 3).join('') + '...';
    }
  }

  function condenseNumber(num, maxLength) {
    var numString = num.toString();
    var numLength = numString.length;
    if (numLength <= maxLength) {
      return num;
    }

    // Is trimming decimal places enough?
    var re = /\.(\d+)/.exec(numString);
    var numberOfDecimalPlaces = re ? re[1].length : 0;
    if (numLength - numberOfDecimalPlaces <= maxLength) {
      while (numLength > maxLength) {
        numString = numString.split('').slice(0, -1).join('');
        numLength = numString.length;
      }
      return Number(numString);
    }

    // Trimming decimal places wasn't enough (we didn't even bother).
    // This should never happen in this application.
    console.error('The number is too large.')
    return -1;
  }
});
