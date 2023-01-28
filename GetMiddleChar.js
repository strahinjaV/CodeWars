function getMiddle(s)
{
  //Code goes here!
  const len = s.length
  if (s.length === 1 || s.length === 2) return s
  if (s.length % 2 === 0) {
    return (s.substring(Math.floor(len/2) - 1, Math.floor(len/2) + 1))
  } 
  else return s.charAt(Math.floor(s.length/2))
}