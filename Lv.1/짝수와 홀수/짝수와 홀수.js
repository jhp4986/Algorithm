function solution(num) {
  var answer = '';
  if(num % 2 === 0){
      return answer = "Even"
  }else {
      return answer = "Odd"
  }
  return answer;
}

// if문 을 사용해서 나머지 연산자인 % 를 이용 했다.
// 정수 num 을 2 로 나눈 나머지가 0 일 경우 짝수를 반환하고 0 이 아닐경우 홀수를 반환한다.

// 위 문제를 if문 이 아닌 삼항연산자를 이용해 해결할 수 있다. 삼항연산자를 이용할 경우 코드의 가독성이 좋아진다.

// 삼항연산자는 3개의 피연산자를 취할수 있는 유일한 연산자로 if문 단축형태로 사용이 된다.