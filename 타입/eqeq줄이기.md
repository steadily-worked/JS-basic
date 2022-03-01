# eqeq를 줄이자

## eqeq란?

- 동등 연산자(`==`): 일반적인 동등 연산자. `eqeq`란 이 동등 연산자를 의미한다.
- 엄격한 동등 연산자(`===`): 완벽하게 동일해야 `true`를 반환. `eqeqeq`라고 한다.

```js
console.log("1" === 1); // false
console.log("1" == 1); // true
```

```js
const ticketNum = $("#ticketNum");
console.log(ticketNum.value); // '0'
console.log(ticketNum.value === 0); // false
console.log(ticketNum.value == 0); // true
```

`==`은 느슨한 검사를 한다. 이는 어떠한 오류를 불러올지 모르기 때문에 가능한 사용하지 않는 게 좋다.

```js
console.log(Number(ticketNum.value) === 0); // true
console.log(ticketNum.valueAsNumber === 0); // true
```

이렇게 형 변환을 수동으로 직접 해준 다음 비교하는 것이 낫다. 이런 식으로 안전하게 검사를 해야 협업 시 팀원들도 잘 활용할 수 있다.
