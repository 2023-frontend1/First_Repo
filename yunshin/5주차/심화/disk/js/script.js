const musicListData = [
  {
    src: './assets/image/iu_0.jpg',
    color: ['#0272a4', '#f6a564'],
  },
  {
    src: './assets/image/iu_1.jpg',
    color: ['#b6bfc8', '#36595b'],
  },
  {
    src: './assets/image/iu_2.jpg',
    color: ['#e58e82', '#6f569f'],
  },
]

const $main = document.querySelector('main')

const $div_filter = document.querySelector('div.filter')

const $div_disk = document.querySelector('div.disk')
const $div_disk_inner = document.querySelector('div.disk_inner')

const $ul = document.querySelector('ul')

const $div_list_btn_group = document.querySelector('div.list_btn_group')
const $button_list_btn_group = $div_list_btn_group.querySelectorAll('button')
const $button_prev = $button_list_btn_group[0]
const $button_next = $button_list_btn_group[1]

const $div_play_btn_group = document.querySelector('div.play_btn_group')
const $button_play_btn_group = $div_play_btn_group.querySelectorAll('button')
const $button_play = $button_play_btn_group[0]
const $button_stop = $button_play_btn_group[1]

let curMusicIndex = 0

// disk 가 돌아가지 않으면 돌려버림.
const StartDiskRotation = () => {
  if (!$div_disk.classList.contains('active')) $div_disk.classList.add('active')
}
// disk가 돌아가고 있으면 멈추기.
const StopDiskRotation = () => {
  if ($div_disk.classList.contains('active'))
    $div_disk.classList.remove('active')
}
// 배경 화면 수정
const ChangeMainBackGround = (changeColorsArr) => {
  $main.style.background = `linear-gradient(120deg, ${changeColorsArr[0]}, ${changeColorsArr[1]})`
}
// html tag 에 내려가거나 올라가는 애니메이션 설정
const SetUpOrDownAnimToTag = (tag, animationName) => {
  tag.style.animationName = animationName
  tag.style.animationDuration = '0.5s'
  tag.style.animationTimingFunction = 'linear'
  tag.style.animationFillMode = 'forwards'
}
// 음악 시작시, cover Image 를 로드
const LoadCoverImageToFilter = (imgSrc) => {
  $div_filter.style.backgroundImage = `url(${imgSrc})`
  $div_filter.style.backgroundRepeat = 'no-repeat'
  $div_filter.style.backgroundPosition = 'center'
  $div_filter.style.backgroundSize = '100% 100%'
}
// disk 내부의 원판 색상을 변경
const ChangeDiskColor = (color) => {
  $div_disk_inner.style.backgroundColor = color
}
// 앨벌 리스트에 앨범 추가
const InsertAlbumImgIntoUl = (imgSrc) => {
  const $new_li = document.createElement('li')
  $new_li.style.width = '100%'
  $new_li.style.height = '100%'
  $new_li.style.display = 'flex'
  $new_li.style.justifyContent = 'center'
  $new_li.style.alignItems = 'center'

  const $new_img = document.createElement('img')
  $new_img.src = imgSrc
  $new_li.appendChild($new_img)
  $ul.appendChild($new_li)
}
// Album 이미지에 하이라이트 효과 부여
const OnHighlightEffectForAlbumImg = (imgIdx) => {
  const $li_group = Array.from($ul.querySelectorAll('li'))
  $li_group.forEach((li) => {
    li.firstChild.classList.remove('play')
  })
  $li_group[imgIdx].firstChild.classList.add('play')
}
// 클릭한 album 의 index 를 반환
const GetClickedAlbumIdx = (clickedItem) => {
  const $li_group = Array.from($ul.querySelectorAll('li'))
  let result = -1
  $li_group.forEach((li, idx) => {
    if (li.firstChild === clickedItem) result = idx
  })
  return result
}

/* 첫 로드시, ul 태그내부에 앨범이미지 삽입 */
addEventListener('load', () => {
  curMusicIndex = 0
  musicListData.forEach((val) => {
    InsertAlbumImgIntoUl(val.src)
  })
  OnHighlightEffectForAlbumImg(curMusicIndex)
})

/* prev 버튼을 눌렀을 경우 */
$button_prev.addEventListener('click', () => {
  StopDiskRotation()
  // 현재 '실행' 혹은 '실행 대기 중' 인 음악 index 감소
  if (--curMusicIndex === -1) curMusicIndex = musicListData.length - 1
  ChangeMainBackGround(musicListData[curMusicIndex].color)
  ChangeDiskColor(musicListData[curMusicIndex].color[0])
  OnHighlightEffectForAlbumImg(curMusicIndex)
})

/* next 버튼을 눌렀을 경우 */
$button_next.addEventListener('click', () => {
  StopDiskRotation()
  // 현재 '실행' 혹은 '실행 대기 중' 인 음악 index 증가
  if (++curMusicIndex === musicListData.length) curMusicIndex = 0
  ChangeMainBackGround(musicListData[curMusicIndex].color)
  ChangeDiskColor(musicListData[curMusicIndex].color[0])
  OnHighlightEffectForAlbumImg(curMusicIndex)
})
/* play 버튼을 눌렀을 경우 */
$button_play.addEventListener('click', () => {
  StartDiskRotation()
  LoadCoverImageToFilter(musicListData[curMusicIndex].src)
  SetUpOrDownAnimToTag($div_filter, 'upToDown')
})
/* stop 버튼을 눌렀을 경우 */
$button_stop.addEventListener('click', () => {
  StopDiskRotation()
  SetUpOrDownAnimToTag($div_filter, 'downToUp')
})
/* 앨범 이미지를 클릭한 경우 */
$ul.addEventListener('click', (e) => {
  const clickedAlbumIdx = GetClickedAlbumIdx(e.target)
  if (clickedAlbumIdx === -1) return
  curMusicIndex = clickedAlbumIdx
  OnHighlightEffectForAlbumImg(curMusicIndex)
  ChangeMainBackGround(musicListData[curMusicIndex].color)
  ChangeDiskColor(musicListData[curMusicIndex].color[0])
})
