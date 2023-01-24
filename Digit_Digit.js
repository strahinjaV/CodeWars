function squareDigits(num){
    let result = 0
    let digit = 0
    let iteration = 0
    while (num > 0){
      digit = num % 10
      digit = digit * digit
      result = result + (digit * Math.pow(10,iteration))
      if (digit > 10) {
        iteration = iteration + 2
      }else iteration++
      num = Math.floor(num/10)
    }
    return result;
  }