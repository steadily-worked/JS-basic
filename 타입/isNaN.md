# isNaN

- 컴퓨터는 기본적으로 2진수를 갖고 있다. 사람이 생각하는 숫자는 당연히 10진수인데, 컴퓨터는 2진수인 것. 그렇기 때문에 더 헷갈린다.
- 이 차이에 어려운 간극(특히 소수점)이 생기게 된다.
- JS에서는 `IEEE 754` 표준(부동 소수점에 관한 표준)을 사용하여 이러한 문제를 해결하고자 한다.

```js
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.isInteger); // f isInteger(): js에서 주어진 값이 정수인지 판단할 수 있다.
```

`isNaN`이란, 어찌 보면 JS에서 숫자를 판별하기가 어렵다는 것을 스스로 인정한 것으로 볼 수도 있다.
`isNaN` 검사가 뒤집어져서 나온다. 즉 '숫자가 아닌지'를 판별하므로 `true`라면 숫자가 아닌 것이다.

```js
console.log(isNaN(123)); // false: 123이 숫자가 아닌 게 아니다: 숫자이다.
console.log(isNaN(123 + "테스트")); // true
console.log(Number.isNaN(123 + "테스트")); // false
console.log(isNaN); // f isNaN(): 숫자가 맞는지 아닌지를 판별
console.log(Number.isNaN); // f isNaN(): isNaN보다 좀 더 엄격하게 진행
```

`isNaN`은 느슨한 검사를 한다. 숫자가 아닌지 맞는지를 제대로 검사하고 싶다면 `Number.isNaN()`으로 검사해야 한다. `es2015`부터 `isNaN`에 대해 더 엄격한 버전인 `Number.isNaN()`이 등장했고, 이를 통해 더 엄격하게 검사할 수 있다.
