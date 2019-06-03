function reverseString(str) {
    strArr = str.split('');
    let res = strArr.reverse()
    return res.join('');
  }
  
console.log(reverseString("hello"));