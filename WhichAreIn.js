function inArray(array1,array2){
    //...
    const output = []
    array2 = array2.join()
    array1.forEach(e => {
      let index = array2.indexOf(e)
      if (index != -1){
        output.push(e)
      }
    })
    return output.sort()
  }