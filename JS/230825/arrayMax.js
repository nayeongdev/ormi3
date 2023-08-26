const pulses = [20, 100, 120, 130, 90, 80];

// for문 사용
function maximum(values) {
  let max = -1;
  for (let i = 0; i < values.length; i++) {
    const value = values[i];
    max = max < value ? value : max;
  }
  return max;
}

console.log(`최고혈압 : ${maximum(pulses)}`);

// apply(this, arr) 메서드 사용
/* this를 사용하지 않기 때문에 null을 넣어주었고 ,
호출하는 함수로 전달할 파라미터로 배열을 넣어준 것 */
console.log(`최고혈압 : ${Math.max.apply(null, pulses)}`);

// 전개 연산자 사용
console.log(`최고혈압 : ${Math.max(...pulses)}`);