function solution(n) {
  let answer = [];
  let arr = String(n).split("").reverse().map((data) => Number(data))
  for(let i = 0; i < arr.length; i++) {
      answer[i] = Number(arr[i])
  }
  return arr;
}



