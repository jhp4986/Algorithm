function solution(n)
{
    var answer = 0;
    var r = String(n).split('')
    
    for(let i = 0; i < r.length; i++){
        answer += parseInt(r[i])
    }
    return answer;
}
