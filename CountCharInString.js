function count (string) {  
  // The function code should be here
  if (string.length === 0) return {}
  const charCount = {} 
  
  string.split('').forEach(oneElement => {
    if (charCount[oneElement]) charCount[oneElement]++
    else charCount[oneElement] = 1
  })  
  return charCount
}