var objectOne = { one: 1, two: 2, other: 0 };
var objectTwo = { three: 3, four: 4, other: -1 };
var combined = {
  ...objectOne,
  ...objectTwo, //중복시 이후 객체로 덮어쓴다.
};

var { other, ...others } = combined; //객체에서 특정 값을 추출할때 추출하려는 키 이름(other)은 맞추고 나머지는 전개 연산자로 선언된 변수(others)에 할당
console.log(others);
