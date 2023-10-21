# 9. 배열의 고차함수는 어느 순간에 사용하는 것이 적절할까요

## (1) map

예를 들면 map은 각 요소를 순회하여 콜백함수가 반환하는 값을 새로운 배열로 만들어주는 메서드입니다.
이를 이용하면 아래와 같은 상황을 생각할 수 있습니다.

ex)

```
const posts = [post1, post2, post3]
```

저는 이 posts 배열의 각 요소를 `<div></div>` html로 이루어진 string 배열로 구현할거에요!

```
posts.map((post) => `<div>${post.title}</div>`)
```

posts의 모든 요소를 순회하여 각 순회당 데이터를 콜백함수의 반환값인
`<div>${post.title}</div>`로 변환하고자 합니다!

위 실행문의 반환 값은 아래와 같습니다 :)

`['<div><div>', '<div><div>', '<div><div>']`

이를 join method를 활용하면 `<div></div><div></div><div></div>`의 형태로
변환되고 이를 innerHTML로 보여줄 수도 있겠죠!?

즉 map은 기본 배열을 다른 형태로 변환하거나 바꾸어 나타낼 때 많이 사용하며 주로 사용되는 곳은 Read, 배열의 각 요소 데이터를 파싱(가공)하여 다른 형태로 보여줄 때 사용합니다.

위의 방식에 맞춰 아래의 메서드들에도 예시를 생각해보며 직접 내가 구현하고자 싶은 함수를 상상하고
설계해보세요!

    find, findInex, filter, sort, reduce, ....

### 답변 ([SourceCode 🔗](https://github.com/2023-frontend1/First_Repo/blob/yunshin/yunshin/4주차/자바스크립트_체크리스트/체크리스트9/blog.js))
![게시물_정렬](https://github.com/2023-frontend1/First_Repo/assets/50646145/40715ab5-982e-4a2c-82a8-2689ce3c03c1)

