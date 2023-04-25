function solution(n) {
  arr = [];
  result = 0;
  
  for (i=1; i<=n; i++) {
      if (n % i == 0) arr.push(i)
  }
  result = arr.reduce((idx,n)=> {return idx+n}, 0)
  return result
}


// for문을 사용하여 1부터 n까지 반복해서 n을 i로 나누어 떨어지는 경우에 i를 누적하여 더하는 것이다.

// 1부터 n까지 반복하면서 n을 i로 나누어 떨어지는 경우에 i를 answer에 누적하여 더한다. answer를 리턴하여 정수 n의 약수를 모두 더한 값을 구할 수 있다.

