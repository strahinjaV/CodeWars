function solution(str){
    if ((str.length%2) === 1){
      str = str + '_'
    }
    const letters = []
    for (let i=0; i <= str.length-1; i = i +2){
      letters.push(str.slice(i, i + 2))
    }
   return letters
 }