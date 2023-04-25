function solution(n)
{
    var answer = 0;
    var r = String(n).split('')
    
    for(let i = 0; i < r.length; i++){
        answer += parseInt(r[i])
    }
    return answer;
}


// answer 의 초기값은 0 이다.
// 숫자를 문자열로 바꾸어준 다음 .split 을 사용해 하나씩 나누어 준다.
// for 문을 이용해서 r 의 length 만큼 돌리고 answer 에 r[i]를 정수로 바꾸고 더해준다.
// 그리고 answer 를 반환 해준다.

