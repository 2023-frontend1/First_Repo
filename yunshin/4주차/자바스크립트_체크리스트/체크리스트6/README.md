# 6. 배열에서 순회문의 종류와 적절한 순간에 올바른 순회문을 적용할 수 있는가

## (1) 배열의 순회문에는 어떤 종류가 있고 각 아래의 상황에 어떤 순회문을 사용하는게 좋을지 고민해보세요

<br/>
<br/>

- 1-1) 모든 요소를 순회할 필요 없이 특정 조건의 인덱스만 순회하고 싶을 때

### 답변

```js
arr.map((val, idx) => {
  if (특정조건) console.log(idx, val)
})
```

```js
arr.forEach((val, idx) => {
  if (특정조건) console.log(idx, val)
})
```

```js
for (let idx = 0; idx < arr.length; idx++) {
  if (특정조건) console.log(idx, arr[idx])
}
```

---

<br/>
<br/>

- 1-2) 모든 요소를 순회해야하지만 순회시 내 설계상 인덱스가 필요할 때

### 답변

```js
arr.map((val, idx) => {
  console.log(idx, val)
})
```

```js
arr.forEach((val, idx) => {
  console.log(idx, val)
})
```

```js
for (let idx = 0; idx < arr.length; idx++) {
  console.log(idx, arr[idx])
}
```

---

<br/>
<br/>

- 1-3) 모든 요소를 순회해야할 때

### 답변

```js
arr.map((val, idx) => {
  console.log(val)
})
```

```js
arr.forEach((val) => {
  console.log(val)
})
```

```js
for (let idx = 0; idx < arr.length; idx++) {
  console.log(arr[idx])
}
```

```js
for (const val of arr) {
  console.log(val)
}
```

---

<br/>
<br/>

- 1-4) 객체의 키를 순회해서 객체의 모든 키 값에 접근해야할 때

### 답변

```js
for (const key in obj) {
  console.log(key, obj[key])
}
```

```js
for (const key of Object.keys(obj)) {
  console.log(key, obj[key])
}
```

```js
for (const [key, val] of Object.entries(obj)) {
  console.log(key, val)
}
```
