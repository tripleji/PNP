// Scope = 유효범위(변수) =>스코프는 함수가 정의될 때 결정된다
// 실행컨텍스트 = 실행되는 코드 덩어리 => 실행컨텍스트는 함수가 실행될 때 생성된다.

var a = 1;
function outer() {
    console.log(a);

    function inner() {
        console.log(a);
        var a = 3;
    }

    inner();

    console.log(a);
}

outer();
console.log(a);

/**
 * 1. 변수 a 선언
 * 2. 함수 outer 선언 (GLOBAL< outer)
 * 3. 변수 a에 1할당
 * 4. outer 함수 호출 => outer 실행컨텍스트 생성
 * 5. 함수 inner 선언
 * 6. outer scope에서 a 탐색 => global scope에서 a 탐색 => 1출력
 * 7. inner 함수 호출 => inner 실행컨텍스트 생성
 * 8. 변수 a 선언
 * 9. inner scope에서 a 탐색 => undefined 출력
 * 10. 변수 a에 3할당
 * 11. inner 실행컨텍스트 종료
 * 12. outer scope에서 a 탐색 => global scope에서 a 탐색 => 1출력
 * 13, outer 실행컨텍스트 종료
 * 14. global scope에서 a탐색 => 1출력
 * 15. 전역 실행컨텍스트 종료
 */