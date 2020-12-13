
// interface Person{
//     name: string;
//     age: number;
// }

// 인터페이스는 확장이 가능한데 타입은 확장이 불가능!
type Person = {
    name: string;
    age: number;
}

var ji: Person = {
    name: '지',
    age: 27
}

type Mystring = string;
var str: Mystring = 'hello';

type Todo = {id: string; title: string; done: boolean};
function getTodo(todo: Todo){

}