/* 배열 */

/* 1. 배열 생성 */

/* 배열 리터럴 */
const testArr = [1, '공우정', 950118, '010-123-123'];
console.log(testArr);

/* 배열 생성자 */
const testArr2 = new Array(2, '공우정2', 94313, '011-123-123');
console.log(testArr2);

/* 2. 배열 요소 접근 */
console.log(testArr[0]);
console.log(testArr[3]);

/* 3. 배열 요소 추가 */
const testArr3 = [];

testArr3[0] = 0;
testArr3[1] = 1;
testArr3[3] = 2;

console.log(testArr3);
console.log(testArr3[2]); // 해당 인덱스 값이 없으므로 undefined

/* 4. 배열 요소 삭제 */
const testArr4 = [0, 1, 2, 3];

delete testArr4[2];
console.log(testArr4);
console.log(testArr4[2]);

delete testArr4; // delete 키워드는 배열 자체를 삭제 할수는 없다. 
console.log(testArr4);

/* 5. 배열과 반목문 */
const testArr5 = [1, '공우정', 950117, '010-1234-1235'];

/* for 문 */
for(let i = 0; i < testArr5.length; i++) {
    console.log(`${i} : ${testArr5[i]}`);
}

/* for ... in 문 */
testArr5.test = 'test';

for(key in testArr5) {
    console.log(`${key} : ${testArr5[key]}`);
}
// test : 'test' 값도 반환된다. 
// 그래서 배열에는 for ... in 문 사용을 자제하자.

/* foreach */
testArr5.forEach((value, index) => (console.log(`${index} : ${value}`)));

/* 5. Array property */

/* length */
const testArr6 = [0, 1, 2, 3];

console.log(testArr6);
console.log(testArr6.length); // length : 4

/* 해당 배열의 인덱스 번호가 아닌 다른 값을 key 넣었을때는 그 값은 length에 포함이 안된다. */
testArr6.test = 'test';
console.log(testArr6);
console.log(testArr6.length);

/* 배열의 마지막 요소 기준으로 length 값이 결정된다. */
testArr6[10] = 10;
console.log(testArr6);
console.log(testArr6.length);

/* 배열의 length 값을 변경하게 된다면 해당 배열의 값들이 length 값에 맞춰서 변화한다. */
testArr6.length = 3;
console.log(testArr6);
console.log(testArr6.length);

/* 6. Array Method */

/* isArray */

/* true */
const testArr7 = [1];

console.log(Array.isArray(testArr7));
console.log(Array.isArray([]));
console.log(Array.isArray([1, 2]));
console.log(Array.isArray(['']));
console.log(Array.isArray(new Array(1, 3)));
console.log(Array.isArray(Array(1, 2, 3)));

/* false */
let num = 1;
let str = 'string';
let obj = { test : 'test'};

console.log(Array.isArray(num));
console.log(Array.isArray(str));
console.log(Array.isArray(obj));
console.log(Array.isArray(123));
console.log(Array.isArray('string'));
console.log(Array.isArray({}));
console.log(Array.isArray(null));
console.log(Array.isArray(undefined));
console.log(Array.isArray(true));
console.log(Array.isArray(false));

/* from */

/* 문자열 변환 */
const testArr8 = Array.from('hello');
console.log(testArr8);

let testStr = 'string';
const testArr9 = Array.from(testStr);
console.log(testArr9);

/* 객체 변환 */

/* 객체 프로퍼티의 lenth 프로퍼티가 없으면 배열로 변환이 안된다. */
let testObj = {test : 'test', 0 : 'a', 1 : 'b'};
const testArr10 = Array.from(testObj); // 변환 불가능
console.log(testArr10);

let testObj2 = {0 : 'c'};
const testArr11 = Array.from(testObj2); // 변환 불가능
console.log(testArr11);

let testObj3 = {0 : 'c', length : 1};
const testArr13 = Array.from(testObj3); // 변환 가능
console.log(testArr13)

const testArr14 = Array.from({length : 1, 0 : 'a', 1 : 'b'}); // 변환 가능, length 값에 따라 프로퍼티 갯수 결정
console.log(testArr14);

/* 두번째 매개변수인 함수 선언 */

// 함수의 첫번째인수는 배열의 value, 두번째 인수는 index
const testArr15 = Array.from('string', function(value, index) { return value + index });
console.log(testArr15);


/* of */
const testArr16 = Array.of(1);
console.log(testArr16); // [1]

let num2 = 134;
const testArr17 = Array.of(num2);
console.log(testArr17); // [134]

const testArr18 = Array.of('str');
console.log(testArr18); // ["str"]

const testArr19 = Array.of(1, 2, {test:'test'});
console.log(testArr19); // [1, 2, {}] , 인수에 객체를 전달하여도 변환 된다.

/* indexOf */
const testArr20 = [1, 2, 3, 3, 4];

console.log(testArr20.indexOf(1)); // 0
console.log(testArr20.indexOf(2)); // 1
console.log(testArr20.indexOf(3)); // 2
console.log(testArr20.indexOf(3, 3)); // 3
console.log(testArr20.indexOf(19)); // -1

const strArr = ['nike', 'puma', 'vans'];

// 해당 배열의 특정요소 존재 여부 확인
if (strArr.indexOf('nike') !== -1) {
    console.log('존재한다');
}

/* concat */
const originalArr = [1, 2, 3];
const testArr21 = [4, 5, 6];

let result = originalArr.concat(testArr21);
console.log(result); // [1, 2, 3, 4, 5, 6]
console.log(originalArr); // [1, 2, 3]

result = originalArr.concat(4);
console.log(result); // [1, 2, 3, 4]
console.log(originalArr); // [1, 2, 3]

result = originalArr.concat(testArr21, 7); // 인수로 전달된 배열과 두번째 인수인 값을 배열에 추가한다.
console.log(result); // [1, 2, 3, 4, 5, 6, 7]

/* join */
const testArr22 = [1, 2, 3, 4];

let result2 = testArr22.join();
console.log(result2); // 1,2,3,4

result2 = testArr22.join('');
console.log(result2); // 1234

result2 = testArr22.join(':');
console.log(result2); // 1:2:3:4

/* push */
const testArr23 = [1, 2];

let result3 = testArr23.push(3, 4, 5);
console.log(result3); // 5
console.log(testArr23); // [1, 2, 3, 4, 5]

result3 = testArr23.push('2'); // 문자열도 추가 가능 
console.log(result3); // 6
console.log(testArr23); // [1, 2, 3, 4, 5, 6]

/* concat 과 push 차이점 */
const testArr24 = [1, 2];

testArr24.concat(3); // 원본배열이 변경되지 않는다.
console.log(testArr24); // [1, 2]

testArr24.push(3); // 원본배열이 변경 된다.
console.log(testArr24); // [1, 2, 3]

/* push 보다는 length 값을 요소 추가하기 */
const testArr25 = [3, 4];

testArr25[testArr25.length] = 5;
console.log(testArr25); // [3, 4, 5]

/* pop */
const testArr26 = [5, 6];

let result4 = testArr26.pop();
console.log(result4); // 6,,,, 마지막 요소
console.log(testArr26); // [5]

/* 스택 */
const stack = []; // 스택 자료 구조 형태 선언

stack.push(1); // 배열의 마지막 요소로 값 추가 
console.log(stack); // [1]

stack.push(2); // 배열의 마지막 요소로 값 추가 
console.log(stack); // [1, 2]

let value = stack.pop(); // 배열의 마지막 요소 제거 
console.log(value); // 2
console.log(stack); // [1]

value = stack.pop() // 배열의 마지막 요소 제거 
console.log(value); // 1
console.log(stack); // []

/* reverse */
const testArr27 = [1, 2, 3, 4];
let result5 = testArr27.reverse();

console.log(result5); // [4, 3, 2, 1]
console.log(testArr27); // [4, 3, 2, 1]

/* shift */
const testArr28 = ['a', 'b', 'c'];
let result6 = testArr28.shift();

console.log(result6); // a
console.log(testArr28); // ['b', 'c']

/* FIFO */
const fifo = [];

fifo.push(1);
console.log(fifo); // [1]

fifo.push(2);
console.log(fifo); // [1, 2]

fifo.push(3);
console.log(fifo); // [1, 2, 3]

fifo.shift();
console.log(fifo); // [2, 3]

fifo.shift();
console.log(fifo); // [3]

fifo.shift();
console.log(fifo); // []

/* slice */
const testArr29 = [1, 2, 3];

let result7 = testArr29.slice(1); // 배열의 인덱스 1 부터 배열의 마지막 요소까지 반환된다.
console.log(result7); // [2, 3]
console.log(testArr29); // [1, 2, 3] .... 원본 배열 변경 되지 않는다

result7 = testArr29.slice(0, 0); // 인덱스 0 부터 배열의 길이가 0 만큼 반환
console.log(result7); // []

result7 = testArr29.slice(0, 1); // 인덱스 1 부터 배열의 길이가 1 만큰 반환
console.log(result7); // [1]

result7 = testArr29.slice(-1); // 인자가 음수일경우 매열의 끝에서부터 해당 인자 값 만큼 반환
console.log(result7); // [3]

result7 = testArr29.slice(-2);
console.log(result7); // [2, 3]

result7 = testArr29.slice(); // 인자 값이 없을 경우 배열의 모든 값은 반환
console.log(result7); // [1, 2, 3]

// 반환된 배열과 원본 배열은 같은 배열이 아니다. 
console.log(testArr29 === result7); // false 

/* splice */
const testArr30 = ['a', 'b', 'c', 'd'];

let result8 = testArr30.splice(1, 3); // 인젝스 1 부터의 3개의 요소 만큼 제거
console.log(result8); // ['b', 'c', 'd']
console.log(testArr30); // [a] .... 원본 배열 변경

const testArr31 = [1, 2, 3, 4];

result8 = testArr31.splice(1); // 인덱스 1 에 해당하는 값만 제거
console.log(result8); // [2, 3, 4]
console.log(testArr31); // [1] .... 원본 배열 변경

const testArr32 = [1, 2, 3, 4, 5];

result8 = testArr32.splice(1, 2, 55, 56); // 인덱스 1 부타 2개의 요소 제거
console.log(result8); // [2, 3]
console.log(testArr32);  // [1, 55, 56, 4, 5]

result8 = testArr32.splice(1, 0, 1000); // 배열 중간에 값 추가
console.log(result8); // []
console.log(testArr32); // [1, 1000, 55, 56, 4, 5]






