/*
You will be given two dimensions:
  a positive integer length
  a positive integer width

Output: You will return a string. 

Examples:
  sqInRect(5, 3) should return [3, 2, 1, 1]
  sqInRect(3, 5) should return [3, 2, 1, 1]
*/


// Solution

function sqInRect(lng, wdth){
  let arr = []
  if(lng === wdth) return null
  while(lng > 0 && wdth > 0){
    arr.push(lng > wdth ? wdth : lng)
    lng > wdth ? lng -= wdth : wdth -= lng
  }
  return arr
}

// or

function sqInRect(lng, wdth){
  if(lng === wdth){
    return null;
  }
  let squares = [];
  
  while(lng !== wdth){
    if (lng > wdth) {
      squares.push(wdth);
      lng = lng - wdth;
    } else {
      squares.push(lng);
      wdth = wdth - lng;
    }
  }
  squares[squares.length] = squares[squares.length -1];
  
  return squares;
}