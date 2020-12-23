// 변수 '선언' 과 함수 '선언' 을 끌어 올린다!

console.log(a());
console.log(b());

function a() {
    return 'a';
}

let b = function bb() {
    return 'bb';
}

// 원래대로라면 선언을 한후 콘솔에 출력해서 볼수있지만 호이스팅에 의해 나중에 선언한 변수를 함수를 끌어올려 확인가능!