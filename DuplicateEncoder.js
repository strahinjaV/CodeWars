function duplicateEncode(word){
    // ...
  let newWord = word.toLowerCase()
  let letterArray =[]
  let endString = ''
  newWord.split('').forEach(s => {
    if(letterArray[s]) letterArray[s]++
    else letterArray[s] = 1
  })
  
  newWord.split('').forEach(element => {
    if (letterArray[element] === 1) endString += '(' 
    else endString += ')'
  })
  return endString
}