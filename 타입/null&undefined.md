# null & undefined

- `undefined`: 무언가 만들어놓고 정의하지 않은 것(있든 없든)
- `null`: **없다**라는 것을 명시적으로 표현한 것

## null

```js
console.log(!null); // true
console.log(!!null); // !!은 boolean으로 형변환을 해 줌. null을 boolean으로 바꾸면 false

console.log(null === false); // false
console.log(!null === true); // true
console.log(null + 123); // 123
```

JS라는 언어는 기본적으로 불가능한 것도 대부분 가능한 언어이므로, `null`과 숫자의 조합 등도 가능하다. `null`은 비어있는 값을 명시적으로 지정하는 방법이지만 수학적으로는 0으로 취급한다.

## undefined

- 아무것도 지정하지 않았을 때의 기본값

```js
let varb;

console.log(typeof varb); // undefined
console.log(undefined + 10); // NaN(Not a Number)

console.log(!undefined); // true
console.log(undefined == null); // true
console.log(undefined === null); // false
console.log(!undefined === !null); // true
```

변수를 선언했지만 값은 정의되지 않고 할당되지도 않음. `null`은 0이라는 숫자로 표현되지만 `undefined`는 숫자와 더해줬을 때 `Not a Number`로 표현된다.

## 결론

`undefined`와 `null`은 결국 값이 없거나(없는 것을 명시적으로 표현) 정의되지 않은 것이다.

1. 숫자로 표현했을 때 전자는 `NaN`, 후자는 `0`이다.
2. 전자의 타입은 `undefined`, 후자는 `object`이다.

이 차이를 인지하고 있어야 한다..!
