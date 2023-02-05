function expandedForm(num) {
    // Your code here
    console.log('num', num)
    let temp
    let returnString = ''
    let iteration = 0
    const numArray = []
    while (num > 0){
      temp = num % 10
      if (temp === 0) {
        num = Math.floor(num/10)
        iteration++
        continue
      }
      numArray.push((temp * Math.pow(10, iteration)).toString())
      iteration ++ 
      num = Math.floor(num/10)
    }
    returnString = numArray.reverse().join(' + ')
    return returnString
  }