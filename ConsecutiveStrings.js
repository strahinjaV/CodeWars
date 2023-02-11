function longestConsec(strarr, k) {
    // your code
  if (strarr.length === 0 || k > strarr.length || k <= 0) return ''
  const lengths = []
  const strings = []
  strarr.forEach((element,index) => {
    let str = element
    let dont = 0
    for (let i = 1; i < k ; i++){
      if (index + i > strarr.length - 1) {
        return
      }
      str += strarr[index + i]
    }
    lengths.push(str.length)
    strings.push(str)
  })
  let max = lengths.reduce((a,b) => Math.max(a,b), -Infinity)
  let firstMax = lengths.indexOf(max)
  return strings[firstMax]
}