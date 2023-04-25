function solution(n) {
  let answer = [];
  let arr = String(n).split("").reverse().map((data) => Number(data))
  for(let i = 0; i < arr.length; i++) {
      answer[i] = Number(arr[i])
  }
  return arr;
}



// 값을 배열로 넣기 위해 answer[i] = arr[i]로 적어 주었다. push는 그냥 값을 추가하는 개념이다. 그리고
// answer의 index값이 arr의 index값이 되게 적어 주면 arr배열이 answer 배열이 된다.