// 함수 선언문
function a() {
    return 'a';
}

// 기명 함수표현식
var b = function bb() {
    return 'bb';
}

// 익명 함수 표현식 => 변수 c 선언, 익명함수 선언, 변수 c에 익명함수를 할당
var c = function() {
    return 'c';
}

// 함수 선언문 같은 경우 호이스팅 때문에 실무에서 오류 발생이 높다. 그래서 함수표현식을 쓰는 걸 추천!!