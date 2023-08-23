console.log("parseInt======================");
/*
parseInt() : 문자열을 정수로 바꿔주는 함수
*/
console.log(`parseInt(false) : ${parseInt('30')}`);  //30
console.log(`parseInt('hello') : ${parseInt('hello')}`);  //NaN
console.log(`parseInt('30b') : ${parseInt('30b')}`);  //30
console.log(`parseInt('b30') : ${parseInt('b30')}`);  //NaN
console.log(`parseInt('33.33') : ${parseInt('33.33')}`);  //33

// parseFloat은 문자열을 소수로 바꿔주는 함수다. 추가적인 인자를 갖지 않는다.
console.log(`parseFloat('45.4') : ${parseFloat('45.4')}`);  //45.4
console.log(`parseInt('10     ') : ${parseInt('10     ')}`);  //10
console.log(`parseInt('     10') : ${parseInt('     10')}`);  //10
console.log(`parseInt('     10     ') : ${parseInt('     10     ')}`);  //10

// 숫자 인자를 전달하면 변환하고자하는 문자열를 해당하는 인자만큼의 진수로 인식
// 2진수로 11인 10진수를 표현하면 => 3
console.log(`parseInt('11', 2) : ${parseInt('11', 2)}`);
// 16진수로 B인 10진수를 표현하면 => 11
console.log(`parseInt('11', 10) : ${parseInt('B', 16)}`);


console.log();
console.log("toString======================");
/* 
toString() : 숫자를 문자열로 변환
*/
let num = 5;
console.log(`num.toString() : ${typeof num.toString()}`);  //string
console.log(`num.toString() : ${(3).toString()}`);  //3
// 전달인자를 통해 원하는 진수로 표현 가능
console.log(`num.toString(2) : ${(3).toString(2)}`);  //11


console.log();
console.log("isNaN======================");
/* 
isNaN() : 데이터를 숫자로 변환했을 때 NaN인지 아닌지 확인하기 위해 사용하는 메소드
Number에서 isNaN 사용 권장
*/
console.log(`isNaN('5') : ${isNaN('5')}`);  //false
console.log(`isNaN(3) : ${isNaN(3)}`);  //false
console.log(`isNaN('b3') : ${isNaN('b3')}`);  //true
console.log(`isNaN('3b') : ${isNaN('3b')}`);  //true

// ES6에서 추가 도입
console.log(Number.isNaN(undefined)); // false
console.log(Number.isNaN(null)); // false
console.log(Number.isNaN(NaN)); // true


console.log();
console.log("toLocaleString======================");
/* 
toLocaleString() : 숫자를 사용자가 사용하는 언어의 표기법대로 변환하여 문자열로 반환하는 메소드
 국가코드를 전달하여 특정 언어의 포멧으로 변경하는것이 가능
*/
console.log(`(12345678910).toLocaleString() : ${(12345678910).toLocaleString()}`);  //12,345,678,910
console.log(`(12345678910).toLocaleString() : ${(12345678910).toLocaleString('ko-KR')}`); //12,345,678,910
console.log(`(12345678910).toLocaleString() : ${(12345678910).toLocaleString('ar-IQ')}`); //١٢٬٣٤٥٬٦٧٨٬٩١٠
console.log(`(12345678910).toLocaleString() : ${(12345678910).toLocaleString('ko-KR', { style: 'currency', currency: 'KRW' })}`); //₩12,345,678,910


console.log();
console.log("Math======================");
/*Math 객체 (자바스크립트에 기본 내장됨)*/
console.log(`Math.PI : ${Math.PI}`);  //3.141592653589793
console.log(`Math.round(4.7) : ${Math.round(4.7)}`);  //올림,5
console.log(`Math.pow(2, 8) : ${Math.pow(2, 8)}`);  //n제곱,256
console.log(`Math.sqrt(64) : ${Math.sqrt(64)}`);  //루트,8
console.log(`Math.abs(-5) : ${Math.abs(-5)}`);  //절대값5
console.log(`Math.random() : ${Math.random()}`);  //0에서 1사이 수
console.log(`Math.max(10, 20, 30, 40, 50) : ${Math.max(10, 20, 30, 40, 50)}`);  //50
console.log(`Math.min(10, 20, 30, 40, 50) : ${Math.min(10, 20, 30, 40, 50)}`);  //10