function comp(array1, array2){
    //your code here
    if (Array.isArray(array1) !== Array.isArray(array2) ) return false
    if (array1.length != array2.length) return false
    
    array1.forEach(element => {
      let index = array2.indexOf(element*element)
      if (index !== -1) array2.splice(index, 1)
    })
    
    if (array2.length > 0) return false 
    else return true
  }