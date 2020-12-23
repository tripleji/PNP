// 콜백함수=>제어권을 넘겨준다

setInterval(function(){
    console.log('1초마다 실행!');
}, 1000);

// 위에 있는 걸 함수표현식으로 바꾼 경우

var cb = function() {
    console.log('1초마다 실행');
};

setInterval(cb, 1000); // 정의: setInterval(callback, milliseconds)

/**
 * 1. 다른 함수(A)의 매개변수로 콜백함수(B)를 전달하면, A가 B의 제어권을 갖게된다.
 * 2. 특별한요청(bind)이 없는 한 A에 미리 정해진 방식에 따라 B를 호출한다.
 * 3. 미리 정해진 방식이란, this에 무엇을 바인딩할지, 매개변수에는 어떤 값들을 지정할지, 어떤 타이밍에 콜백을 호출할지 등이다.
 * 주의! 콜백은 함수다! 메서드가 아니다! 
 */