/** 
 * 클로져란 함수 내부에서 생성한 데이터와 그 유효범위로 인해 발생하는 특수한 현상/상태
 * 접근 권한 제어
 * 지역변수 보호
 * 데이터 보존 및 활용
*/

function setName(name) {
    return function() {
        return name;
    }
}
var sayMyName = setName('Paul');
sayMyName();

/**
 * 1. 함수 setName 선언
 * 2. 변수 sayMyName 선언
 * 3. setName 호출 => setName 실행컨텍스트 생성
 * 4. 지역변수 name 선언 및 'Paul' 할당
 * 5. 익명함수 선언
 * 6. 익명함수 반환
 * 7. setName 실행컨텍스트 종료
 * 8. 변수 sayMyName에 반환된 함수를 할당
 * 9. sayMyName 호출 => sayMyName 실행컨텍스트 생성
 */

 // 클로져로 지역변수 만들기
var createCar = function(f, p) {
    var fuel = f;
    var power = p;
    var total = 0;
    return{
        run: function(km) {
            var wasteFuel = km / this.power;
            if(this.fuel < wasteFuel) {
                console.log('이동불가');
                return;
            }
            fuel -= wasteFuel;
            total += km;
        }
    }
};
var car = createCar(10, 2);

/**
 * 1. 함수에서 지역변수 및 내부함수 등을 생성한다.
 * 2. 외부에 노출시키고자 하는 멤버들로 구성된 객체를 return 한다.
 * return한 객체에 포함되지 않은 멤버들은 private하다
 * reuurn한 객체에 포함된 멤버들은 public하다
 */








