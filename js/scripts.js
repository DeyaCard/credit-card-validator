function noInputtedNumber() {
  for (let i=0; i < arguments.length; i++) {
    if (arguments[i].trim().length === 0) {
      return true;
    }
  }
  return false;
}

function creditCardValidator(number) {
  if (noInputtedNumber(number)) {
    return "This card number in not valid";
  }
  else{ if ( number.length > 16 || number.length < 14) {
    return "This card number in not valid";
  }

  return "This card number is valid."
  }
}



