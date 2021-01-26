var array1 = ['one', 'two'];
var array2 = ['three', 'four'];

const combined = [...array1, ...array2]; //전개연산자
const [first, second, three = 'empty', ...others] = array1; //first = 'one', second = 'two', three = 'empty', others = [] 추출
function func(...args) {
  var [first, ...others] = args; //함수 인자 배열을 args 변수에 할당
}
