import validator from './validator.js';

console.log(validator);

memoria = {};

function myFunction() {

    var passField = document.getElementById('pass');
    passField.type = "text";
    let input_tarjeta = document.getElementById('pass');
      memoria['tarjeta'] = input_tarjeta.value;
      console.log(memoria['tarjeta'])
    var passValue = passField.value;
    var passLength = passValue.length;
    var masked = passValue.substring(0, passLength - 4);
    masked = masked.replace(/./g, '•'); //The character is ASCII-7 (Press Alt+7 to type)
    var text = passValue.substring(passLength - 4);
    var newPass = masked + text;
    passField.value = newPass;
    
    return newPass
  }
  
  
