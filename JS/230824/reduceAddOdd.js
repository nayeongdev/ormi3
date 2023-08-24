// reduce를 이용해서 홀수만 누적하기
// 조건문 활용
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function reducer(x, y) {
  if (y % 2 === 1) {
    return x + y;
  }
  return x;
}

const addOddResult = arr.reduce(reducer, 0);
console.log(addOddResult);