import mockPost from './mock.json' assert { type: 'json' }

const posts = mockPost.post
const $ul = document.querySelector('ul')
const $button$class$likes = document.querySelector('button.likes')
const $button$class$views = document.querySelector('button.views')

// 초기화면
window.onload = (e) => {
  posts.forEach((val) => {
    CreateLi(val)
  })
}

// 좋아요 순으로 내림차순 정렬
$button$class$likes.addEventListener('click', (e) => {
  InitUl()
  posts.sort((prev, cur) => prev.likes - cur.likes)
  posts.forEach((val) => {
    CreateLi(val)
  })
})

// 조회수 순으로 내림차순 정렬
$button$class$views.addEventListener('click', (e) => {
  InitUl()
  posts.sort((prev, cur) => prev.viewCount - cur.viewCount)
  posts.forEach((val) => {
    CreateLi(val)
  })
})

// ul 초기화 함수
const InitUl = () => {
  $ul.innerHTML = ''
}

// post 객체를 전달받아 list 에 출력하는 함수
const CreateLi = (obj) => {
  const $new_li = document.createElement('li')

  const $new_div_top = document.createElement('div')
  $new_div_top.classList.add('top')

  const $new_p_title = document.createElement('p')
  $new_p_title.classList.add('title')
  $new_p_title.textContent = obj.title

  const $new_span_writer = document.createElement('span')
  $new_span_writer.classList.add('writer')
  $new_span_writer.textContent = obj.writer

  const $new_span_count = document.createElement('span')
  $new_span_count.classList.add('count')

  const $new_em_like = document.createElement('em')
  $new_em_like.classList.add('like')
  $new_em_like.textContent = '좋아요 : ' + obj.likes

  const $new_em_view = document.createElement('em')
  $new_em_view.classList.add('view')
  $new_em_view.textContent = '조회수 : ' + obj.viewCount

  const $new_div_content = document.createElement('div')
  $new_div_content.classList.add('content')
  $new_div_content.textContent = obj.content

  $new_span_count.appendChild($new_em_like)
  $new_span_count.appendChild($new_em_view)
  $new_div_top.appendChild($new_p_title)
  $new_div_top.appendChild($new_span_writer)
  $new_div_top.appendChild($new_span_count)

  $new_li.appendChild($new_div_top)
  $new_li.appendChild($new_div_content)

  $ul.appendChild($new_li)
}
