function solution(x, n) {
  var answer = [];
  let list = x;
  for( let i = 0; i < n; i++){
      answer.push(x)
      x += list
  }
  return answer;
}

//for 문을 사용을했다.
//매번 x 씩 증가 하기때문에 list 라는 변수에 담아주었다.
//x 를 list 만큼 증가시키면서 배여 안에 넣어준다.