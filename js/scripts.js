const onlyNumbers = ["0","1","2","3","4","5","6","7","8","9"]

function creditCardValidator(purportedCC) {
  if (purportedCC.length === 0) {
    return "This card number is not valid";
  }else if( purportedCC.length > 16 || purportedCC.length < 14) {
    return "This card number is not valid";
  }

  for(let i = 0; i<purportedCC.length;i++) {
    if (onlyNumbers.indexOf(purportedCC[i]) === -1){
      return "This card number is not valid";
    }
  }
  let doubledArr = [];
  let singleArr = [];
  let sum = 0
  for (let i = purportedCC.length+1; i >= 0; i-=2){
    if ((purportedCC[i] * 2) > 9) {
      let digit = (purportedCC[i] * 2) - 9
      doubledArr.push(digit)
    }else {
      doubledArr.push(purportedCC[i] * 2);
    }
    
  }
  doubledArr.shift()

  for (let i = purportedCC.length; i >= 0; i-=2){
    singleArr.push(parseInt(purportedCC[i]))
  }
  singleArr.shift()
  console.log(singleArr);
  console.log(doubledArr);
  for (let i = 0; i < doubledArr.length; i++){
    sum += doubledArr[i]
  }
  for (let i = 0; i < singleArr.length; i++){
    sum += singleArr[i]
  }
}



      //Begin algorhythm



  // let nDigits = purportedCC.length
  // let sum = parseInt(purportedCC[nDigits-1])
  // let parity = (nDigits-2)  %  2
  // for (let i = 0; i < nDigits -2; i++) {
  //   let digit = parseInt(purportedCC[i])
  //   if (i % 2 === parity){
  //     digit = digit * 2
  //   } 
  //   if (digit > 9) {
  //     digit = digit - 9
  //   }
  //   sum = sum + digit
  // }
  // return (sum % 10)


// function checkLuhn(string purportedCC) {
//   int nDigits := length(purportedCC)
//   int sum := integer(purportedCC[nDigits-1])
//   int parity := (nDigits-2) modulus 2
//   for i from 0 to nDigits - 2 {
//       int digit := integer(purportedCC[i])
//       if i modulus 2 = parity
//           digit := digit × 2
//       if digit > 9
//           digit := digit - 9 
//       sum := sum + digit
//   }
//   return (sum modulus 10) = 0
// }
