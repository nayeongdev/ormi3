// 배열 메소드
/* 
push() : 배열 끝에 요소를 추가하고 길이 반환
pop() : 배열의 마지막 요소를 꺼내서 반환
 */
const arr1 = [1, 2, 3]
arr1.push(4);
// console.log(arr1);  //[1, 2, 3, 4]
arr1.pop();
// console.log(arr1);  //[1, 2, 3]


/* 
shift() : 배열에서 첫번째 요소를 꺼내고 반환
unshift() : 배열의 첫번째 요소로 새로운 요소 추가
*/
const fruits1 = ["사과", "바나나", "포도"];
fruits1.shift();
// console.log(fruits1);  //[ '바나나', '포도' ]
fruits1.unshift("수박", "레몬");
// console.log(fruits1);  //[ '수박', '레몬', '바나나', '포도' ]


/* 
splice() : 배열의 요소를 추가, 제거 또는 교체한다.
array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
start : 배열의 변경을 시작할 인덱스
deleteCount (선택): 배열에서 제거할 요소의 수, start부터의 모든 요소를 제거한다. 0 이하라면 어떤 요소도 제거하지 않는다.
item (선택): 배열에 추가할 요소, 아무 요소도 지정하지 않으면 splice()는 요소를 제거하기만 한다.
*/
const arr2 = [1, 2, 3];
arr2.splice(1, 0, 4);
// console.log(arr2);  //[ 1, 4, 2, 3 ]
arr2.splice(2, 1, 5, 6);
// console.log(arr2);  //[ 1, 4, 5, 6, 3 ]


/* 
slice() : 배열에서 요소들을 추출하여 새로운 배열로 반환(얕은 복사)
arr.slice([begin[, end]])
 */
const fruits2 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits2.slice(1, 3);
// console.log(citrus);  //[ 'Orange', 'Lemon' ]


/* 
sort() : 배열의 요소를 정렬한 후 그 배열을 반환(새로운 배열로 반환 X)
arr.sort([compareFunction]);
compareFunction (선택) ; 정렬 순서를 정의하는 함수. 생략하면 배열은 각 요소의 문자열 변환에 따라 각 문자의 유니 코드 코드 포인트 값에 따라 정렬된다.
*/
const nums1 = [3, 2, 1, 0]
nums1.sort()
// console.log(nums1);  //[ 0, 1, 2, 3 ]

const nums2 = [23, 5, 1000, 42];
// console.log(nums2);  //[ 1000, 23, 42, 5 ]
// 숫자를 정렬하려고 하면 의도와 다르게 정렬이 된다.
// 숫자를 정렬하고 싶은때는 compareFunction을 이용한다.

// 오름차순으로 정렬 (작은수에서 큰수)
function compareNumbersAscending(a, b) {
  return a - b;
}

// 내름차순으로 정렬 (큰수에서 작은수)
function compareNumbersDescending(a, b) {
  return b - a;
}

var numbers = [4, 2, 5, 1, 3];

numbers.sort(compareNumbersAscending);
// console.log(numbers);  //[ 1, 2, 3, 4, 5 ]

numbers.sort(compareNumbersDescending);
// console.log(numbers);  //[ 5, 4, 3, 2, 1 ]


/* 
forEach() : 배열의 각 요소에 대해 주어진 함수를 실행
forEach(callbackFn)
callbackFn
  배열의 각 요소에 대해 실행할 함수입니다. 반환값은 없습니다.(undefined)
  함수는 다음 인수를 사용하여 호출됩니다.
  - element
    배열에서 처리 중인 현재 요소
  - index
    배열에서 처리 중인 현재 요소의 인덱스
  - array
    forEach()를 호출한 배열
*/

const fruits3 = ["사과", "바나나", "포도"];
fruits3.forEach(function (item, index) {
  // console.log(item, index);
  fruits3[index] = index;
});
// console.log(fruits3);

// 결과
// 사과 0
// 바나나 1
// 포도 2
// [0, 1, 2]

const zootopia = ['닉', '주디', '핀닉', '프루프루']
const newZootopia = [];

zootopia.forEach(function (item) {
  newZootopia.push('❤️' + item + '❤️');
});

// console.log(newZootopia);
//[ '❤️닉❤️', '❤️주디❤️', '❤️핀닉❤️', '❤️프루프루❤️' ]


/* 
map() : callback 함수를 각각의 요소에 대해 한번씩 순서대로 불러 그 함수의 반환값으로 새로운 배열을 만듭니다.
callback 함수는 값이 삭제되거나 아직 값이 할당/정의되지 않은 인덱스에 대해서는 호출되지 않습니다.
arr.map(callback(currentValue[, index[, array]])[, thisArg])
*/
const arr3 = [1, 4, 9];
const roots = arr3.map(Math.sqrt);
// console.log(arr3);
// console.log(roots);

const arr4 = [1, 2, 3];
const newArr = arr4.map(function (item, index) {
  return item * index;
});

// console.log(newArr);  //[ 0, 2, 6 ]

const kvArray = [
  { key: 1, value: 10 },
  { key: 2, value: 20 },
  { key: 3, value: 30 },
];

const reformattedArray = kvArray.map(function (obj) {
  const rObj = {};
  rObj[obj.key] = obj.value;
  return rObj;
});

// console.log(reformattedArray);
// reformattedArray는 [ { '1': 10 }, { '2': 20 }, { '3': 30 } ]

// console.log(kvArray);
// kvArray는 그대로
// [ { key: 1, value: 10 }, { key: 2, value: 20 }, { key: 3, value: 30 } ]


/* 
forEach()와 map()
forEach()와 map()은 둘 다 배열의 각 요소에 대해 주어진 함수를 실행합니다. 
하지만 forEach 메소드의 경우 반환값이 없지만 map 메소드는 새로운 배열을 반환한다는 차이가 있습니다.
*/


/* 
filter() : 기존의 배열에서 특정 조건을 만족하는 요소들만 추출하여 새로운 배열을 만듭니다. 
filter(callbackFn)
callbackFn
  배열의 각 요소에 대해 실행할 함수입니다. 결과 배열에 요소를 유지하려면 true을 반환하고 그렇지 않으면 false을 반환해야 합니다. 
  이 함수는 다음 인수를 사용하여 호출됩니다.
  - element
    배열에서 처리 중인 현재 요소.
  - index
    배열에서 처리 중인 현재 요소의 인덱스.
  - array
    filter()가 호출된 배열.
*/
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter((word) => word.length > 6);

// console.log(result);
// ["exuberant", "destruction", "present"]

const arr5 = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function isPrime(num) {
  for (let i = 2; num > i; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

// console.log(arr5.filter(isPrime)); // [2, 3, 5, 7, 11, 13]


/* 
reduce() :  배열의 각 요소에 대해 주어진 리듀서 (reducer) 함수를 실행하고, 하나의 결과값을 반환
배열의 요소를 모두 더해주고 싶을 경우 많이 사용
arr.reduce(callback[, initialValue])

callback
  배열의 각 요소에 대해 실행할 함수. 다음 네 가지 인수를 받습니다.
  - accumulator
    누산기는 콜백의 반환값을 누적합니다. 
    콜백의 이전 반환값 또는, 콜백의 첫 번째 호출이면서 initialValue를 제공한 경우에는 initialValue의 값입니다.
  - currentValue
    처리할 현재 요소. 현재 값
  - currentIndex (Optional)
    처리할 현재 요소의 인덱스. 현재 인덱스
    initialValue를 제공한 경우 0, 아니면 1부터 시작합니다.
  - array (Optional)
    reduce()를 호출한 배열. 원본 배열

initialValue (Optional)
  callback의 최초 호출에서 첫 번째 인수에 제공하는 값. 초기값을 제공하지 않으면 배열의 첫 번째 요소를 사용합니다.
  빈 배열에서 초기값 없이 reduce()를 호출하면 오류가 발생합니다.
*/
var sum = [0, 1, 2, 3, 4].reduce((prev, curr) => prev + curr);
// console.log(sum);  //10

// 객체로 이루어진 배열에 들어 있는 값을 합산하기 위해서는 
// 반드시 초기값을 주어 각 항목이 함수를 거치도록 해야 합니다.
var initialValue = 0;
var sum = [{ x: 1 }, { x: 2 }, { x: 3 }].reduce(function (
  accumulator,
  currentValue,
) {
  return accumulator + currentValue.x;
}, initialValue);

// console.log(sum);  //6


/* 
includes() : 요소가 포함되어 있으면 true, 아니면 false 반환
arr.includes(valueToFind[, fromIndex])

valueToFind
  탐색할 요소.(참고: 문자나 문자열을 비교할 때, includes()는 대소문자를 구분합니다.)
fromIndex Optional
  이 배열에서 searchElement 검색을 시작할 위치입니다. 
  음의 값은 array.length + fromIndex의 인덱스를 asc로 검색합니다. 기본값은 0입니다.
*/
const pets = ['cat', 'dog', 'bat'];

// console.log(pets.includes('cat'));  // true
// console.log(pets.includes('at'));  // false

// console.log([1, 2, 3].includes(3, 3)); // false
// console.log([1, 2, 3].includes(3, -1)) // true


/* 
join() : 배열의 모든 요소를 연결해 하나의 문자열로 만듭니다.
*/
const elements = ['Fire', 'Air', 'Water'];

// console.log(elements.join());  // "Fire,Air,Water"
// console.log(elements.join(''));  // "FireAirWater"
// console.log(elements.join('-'));  // "Fire-Air-Water"