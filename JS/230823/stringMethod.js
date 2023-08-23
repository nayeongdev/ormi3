// 문자열 메소드
/* 
indexOf() : 문자열 안에 존재하는 특정한 문자를 검색하여 문자의 인덱스를 반환
*/
let text = "Next level 제껴라 제껴라 제껴라";
console.log(text.indexOf('level'));
// 5

console.log(text.indexOf('제껴라'));
// 11
console.log(text.indexOf('제껴라', 16));
// 19

console.log(text.indexOf('광야'));
// -1


/* 
lastIndexOf :특정한 문자를 검색하는 순서가 indexOf()와 정반대
*/
console.log(text.lastIndexOf('level'));
// 5

console.log(text.lastIndexOf('제껴라'));
// 19
console.log(text.lastIndexOf('제껴라', 16));
// 15

console.log(text.lastIndexOf('광야'));
// -1


/* 
match() : 정규표현식을 인자로 받아 일치하는 문자열을 찾아 배열의 형태로 반환
 */
console.log("Naevis 우리 ae, ae들을 불러봐".match(/ae/));
// g 플래그가 없는 경우 : ["ae"]

console.log("Naevis 우리 ae, ae들을 불러봐".match(/ae/g));
// g 플래그가 있는 경우 : ["ae", "ae", "ae"]

console.log("Naevis 우리 ae, ae들을 불러봐".match(/[a-zA-Z]\w+/g));
// w+ => 하나 이상의 문자로 이루어진 단어를 찾습니다 : ["Naevis", "ae", "ae"]


/* 
replace() : 문자열안에서 일치하는 첫번째 문자열을 찾고, 대체하여 새로운 문자열을 반환
 */
console.log("제껴라 제껴라 제껴라 huh!".replace("제껴라", "check it out"));
// "check it out 제껴라 제껴라 huh!"

console.log("제껴라 제껴라 제껴라 huh!".replace(/제껴라/g, "check it out"));
// "check it out check it out check it out huh!"


/* 
slice() : slice는 “얇게 썰다”라는 의미처럼 문자열의 일부분을 복사하여(썰어서) 새로운 문자열을 반환
 */
console.log("중심을 잃고 목소리도 잃고".slice(7));
// "목소리도 잃고"

console.log("중심을 잃고 목소리도 잃고".slice(7, 14));
// "목소리도 잃고"

console.log("중심을 잃고 목소리도 잃고".slice(-3));
// " 잃고"

console.log("중심을 잃고 목소리도 잃고".slice(-3, 13));
// " 잃"


/* 
split()
인자로 전달하는 구분자로 문자열을 쪼개어 각각의 값을 원소로 하는 배열을 반환
두 번째 인자로 나눌 갯수를 전달 할 수 있다. (옵션)
*/
console.log("La la la la la la".split(" "));
// ["La", "la", "la", "la", "la", "la"]

console.log("La la la la la la".split(""));
// ["L", "a", " ", "l", "a", " ", "l", "a", " ", "l", "a", " ", "l", "a", " ", "l", "a"]

console.log("La-la-la-la-la-la".split("-", 3));
// ["La", "la", "la"]


/* 
toLowerCase(), toUpperCase() : 문자열을 소문자, 혹은 대문자로 변환
*/
console.log("What's the name? Black mamba".toLowerCase());
// "what's the name? black mamba"

console.log("Watch me while I make it out".toUpperCase());
// "WATCH ME WHILE I MAKE IT OUT"


/* 
trim() : 문자열 앞 뒤의 공백 제거
*/
console.log("         abc  ".trim());  // "abc"


/* 
padStart() : 자릿수에 맞춰 값 채우기
*/
let str = '99'

// '99'를 5자리 채웁니다. 부족한 부분은 0으로 채웁니다.
console.log(str.padStart(5, '0'));   // "00099"