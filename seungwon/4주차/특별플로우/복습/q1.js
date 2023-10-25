const user = {
	name: "김성용",
	age: 20,
	height: 190,
};

// 문제1. 위의 객체를 아래의 메소드를 이용하여 반환 값을 출력 하고 각 메소드의 기능을 정의할 것

/* 
(1) user[”key”], user.key
(2) Object.keys()
(3) Object.values()
(4) Object.entries()
(5) for in
*/

// 문제2. 값이 “김성용”인 속성의 key 찾기
// 문제3. 깊은 복사를 통해 user 객체의 복사본을 만든 후 name을 본인의 이름으로 수정
//1-1
const userKey = user["name"];
const userAge = user.age;
console.log(userKey);
console.log(userAge);
//1-2
const objectKey = Object.keys(user);
console.log(objectKey);
//키값이 배열로 저장이 됨
//1-3
const objectValue = Object.values(user);
console.log(objectValue);
//밸류값이 배열로 저장이 됨
//1-4
const objectEntry = Object.entries(user);
console.log(objectEntry);
//배열 안의 배열로 저장
//1-5
for (let key in user) {
	console.log(key, user[key]);
}
//전체 돌면서 키와 밸류값을 모두 순회
//2
function FindSungYong(obj, value) {
	for (let key in obj) {
		if (obj[key] === value) {
			return key;
		}
	}
}

const sungyong = FindSungYong(user, "김성용");

console.log("키값은", sungyong);
//3
function deepCopy(obj) {
	if (Array.isArray(obj)) {
		const copyArr = [];
		for (let i = 0; i < obj.length; i++) {
			copyArr[i] = deepCopy(obj[i]);
		}
		return copyArr;
	}

	const objCopy = {};
	for (let key in obj) {
		if (obj.hasOwnProperty(key)) {
			objCopy[key] = deepCopy(obj[key]);
		}
	}
	return objCopy;
}

// 깊은 복사를 통해 user 객체의 복사본을 만들고 name을 본인의 이름으로 수정
const userCopy = deepCopy(user);
userCopy.name = "새로운 이름";

console.log(userCopy); // 수정된 복사본 출력
console.log(user); // 원본 객체는 변경되지 않음
