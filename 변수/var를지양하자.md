# Var를 지양하자

ES5의 var 예약어를 지양하고 ES2015 이후의 const를 사용해야 되는 이유가 뭘까?

1. 기본적으로 개선판임

- let / const는 var의 단점을 개선한 예약어이다.
- var는: 함수 단위의 스코프를 가진다.
- 반면 let과 const는 블록 단위의 스코프를 가지며 TDZ의 속성을 가진다. -> 안전하게 코드를 작할 수 있다.

```js
var name = "이름";
var name = "이름2";

console.log(name); // 이름2
```

동일한 변수명으로 다른 값을 넣었다. 이래도 문제가 없다. 출력을 하면 가장 마지막으로 선언한 값이 출력된다.
지금이야 4줄밖에 안되지만 1000, 1000줄이 될 경우 난해한 코드가 될 것이다.

```js
console.log(name); // undefined

var name = "이름";
```

에러가 나지 않는다. 물론 이는 호이스팅이라는, 코드 실행 전 변수 및 함수 선언이 최상단으로 끌어올려지는 것 같은 현상이지만 블록 단위 스코프를 갖는 let/const를 사용했을 땐 에러가 출력된다.

```js
let name = "이름";
let name = "이름2";
let name = "이름3";
// SyntaxError: Identifier 'name' has already been declared
```

이미 선언했기 때문에 다시 한 번 쓸 수 없다는 에러가 발생한다. `let` 대신 `const`를 써도 마찬가지 에러가 발생한다.
`let`과 `const`의 차이는 **재할당 여부**이다.

```js
let name;
name = "이름";
console.log(name); // 이름
name = "이름2";
console.log(name); // 이름2
name = "이름3";
console.log(name); // 이름3
```

let을 사용하면 바로바로 바뀌면서 에러가 발생하지 않으나 `let`을 `const`로 바꿔준다면 `TypeError: Assignment to constant variable.` 라는 에러가 발생한다. const에서는 재할당이 불가능하기 때문에 이미 선언되어있는 `이름` 외에 다른 값을 다시 할당할 수가 없는 것이다.
