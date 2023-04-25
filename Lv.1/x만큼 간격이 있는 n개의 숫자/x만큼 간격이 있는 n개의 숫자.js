function solution(x, n) {
  var answer = [];
  let list = x;
  for( let i = 0; i < n; i++){
      answer.push(x)
      x += list
  }
  return answer;
}