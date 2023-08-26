const score = [100, 90, 60, 90, 80];

// for문 사용
function avgFn(values) {
  let len = values.length;
  let sum = 0;
  for (let i = 0; i < len; i++) {
    sum += values[i];
  }
  return sum / len;
}

console.log(`score1의 평균 점수 : ${avgFn(score)}`);

// reduce 사용
const avgReduce = arr => arr.reduce((p, c) => p + c, 0) / arr.length;

console.log(`score2의 평균 점수 : ${avgReduce(score)}`);