// 초기값을 제공하지 않으면 배열의 첫 번째 요소를 사용
// 초기값을 제공하지 않으면, reduce()는 인덱스 1부터 시작해 콜백 함수를 실행하고 첫 번째 인덱스는 건너 뛴다.
const numbers = [1, 2, 3, 4];
const result1 = numbers.reduce((number1, number2) => {
  // console.log(number1 * number2);
  return number1 * number2
});
/* 
  1,2 => 2  배열값 1번째, 2번째 부터 시작
  2,3 => 6
  6,4 => 24
*/
console.log(result1); // 24;

//-------------------------------------------

const result2 = numbers.reduce((number1, number2) => {
  // console.log(number1 * number2);
  return number1 * number2
}, 0);
/* 
  0,1 => 0   initialValue값, 배열값 1번째 부터 시작
  0,2 => 0
  0,3 => 0
  0,4 => 0
*/
console.log(result2); // 0;


//-------------------------------------------

// 빈 배열에서 초기값 없이 reduce()를 호출하면 오류가 발생한다.
// Uncaught TypeError: Reduce of empty array with no initial value
const arr = [];
// const result3 = arr.reduce((number1, number2) => number1 * number2);
// console.log(result3);

// 초기값을 넣어 줌으로써 에러 해결
const result4 = arr.reduce((number1, number2) => number1 * number2, 0);
console.log(result4);  //0