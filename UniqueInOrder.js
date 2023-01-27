var uniqueInOrder=function(iterable){
  //your code here - remember iterable can be a string or an array
   let output = []
  
   if (typeof iterable === "string") iterable = iterable.split('')

   for (let i = 0; i < iterable.length; i++){
     output.push(iterable[i]) 
     let j = i
     while (output[output.length-1] === iterable[j+1]) {
       j++
     }
     i = j
   }

  return output
}