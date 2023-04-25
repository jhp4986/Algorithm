function solution(arr) {
  var answer = 0;
  for(let i = 0 ; i <= arr.length -1 ; i++){
      answer += arr[i] 
  }
  answer = answer / arr.length
  return answer;
}

//arr의 평균값을 구하기위해서 arr의 모든 합을 구하고 arr에 .length을 사용해서 arr의 배열 크기를 구한 다음 arr의 모든 합을 구한다.
//모든 합을 구한 것을 arr의 배열 크기로 나눠 평균을 구한다.