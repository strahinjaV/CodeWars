function moveZeros(arr) {
    let beginLength = arr.length
    arr = arr.filter(element => element !== 0)
    let endLength = arr.length
    for (let i = 0; i < (beginLength - endLength); i++){
      arr.push(0)
    }
    return arr
  }