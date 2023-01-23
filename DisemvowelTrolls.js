function disemvowel(str) {
    const regex = /[aeiouAEIOU]/g
    let newStr = ''
    newStr = str.replaceAll(regex,'')
    return newStr
  }