const musicListData = [
  {
    src: "./assets/img/iu_0.jpg",
    color: ["#0272a4", "#f6a564"],
  },
  {
    src: "./assets/img/iu_1.jpg",
    color: ["#b6bfc8", "#36595b"],
  },
  {
    src: "./assets/img/iu_2.jpg",
    color: ["#e58e82", "#6f569f"],
  },
];
//1. musicListData부터 불러오자
const $imageList = document.querySelector(".list_btn_group > ul");

//---------------------------------------------------------------------------
// 앨범커버목록 render 해주는 함수
const renderMusicList = () => {
  musicListData.map((music, _) => {
    const $image = document.createElement("li");
    // $image.classList.add("album_cover");
    $image.innerHTML = `<img class="album_cover "src=${music.src} alt="">`;
    $imageList.appendChild($image);
  });
};
window.onload = renderMusicList();
//musicListData에 서 받아온 경로를 모두돌면서 ul태그밑에 li태그만들고 안에 img경로넣어주기
//---------------------------------------------------------------------------
//2.버튼들을가져와서 이벤트부터 만들어주자
const $playBtn = document.querySelector(".play_btn");
const $stopBtn = document.querySelector(".stop_btn");
const $nextBtn = document.querySelector(".next_btn");
const $prevBtn = document.querySelector(".prev_btn");
let pointIndex;
//---------------------------------------------------------------------------
//앨범커버리스트 배열화시키기
const $albumcover = Array.from(
  document.querySelectorAll(".list_btn_group > ul > li")
);
//선택된 앨범 커버확인
const clickAlbumCover = (img) => {
  if (img.target.classList.contains("album_cover")) {
    $albumcover.forEach((el, i) => {
      if (el.contains(img.target)) {
        $albumcover[i].classList.add("click");
      } else {
        $albumcover[i].classList.remove("click");
      }
    });
  }
};
//선택된 앨범커버 확대
$imageList.addEventListener("click", clickAlbumCover);
// $nextBtn.addEventListener("click",f );
//==> 버튼을 클릭하면 -> 현재 click클래스는 remove하고 -1번째 앨범컵버의 click on
$nextBtn.addEventListener("click",(button)=>{
  $albumcover.forEach((el,i)=>{
    if(el.classList.contains('click')){
      $albumcover[i].classList.remove("click");
    }
  })

});
// $prevBtn.addEventListener("click",f );
//---------------------------------------------------------------------------

/* 
ul태그를 클릭했을때 => 배열화한 nodelist의 index와 내가target으로클릭한놈의 index가같으면
pointIndex에 넣어준다 ==> 그러면 해당인덱스로 li선택가능
ul
  li
  li
  li
/ul

*/

/*

문제1.
    디스크 문제 구현하기. 필요한 html, css, animation은 모두 구현하였으나
    혹 본인 재량하에 추가하고 싶은 css와 animation이 있으면 추가해두시면 됩니다.

    요구사항
    
        (1) 구현영상을 참고하여 구현영상과 같은 효과를 진행해보세요
        (2) play 버튼 클릭시에는 해당 이미지에 맞는 이미지가 배경화면으로 보이고 disk가 회전되어야합니다
        (3) stop 버튼을 누르면 배경화면이 사라지고 disk는 멈추어야합니다.
        (4) 앨범은 총 3개가 있으며 만약 진행 중 다른 앨범을 선택하고 play를 누르면 다른 앨범이 play 되어야합니다.
        (5) 앨범 리스트는 (next, prev) 버튼으로도 움직일 수 있으며 클릭으로도 원하는 앨범으로 이동할 수 있습니다.
        (6) 현재 선택된 앨범은 focus되어 크기가 커지는 효과를 추가해야합니다.
        (7) 저작권 상 음악은 넣지 못했지만 만약 넣고 싶다면 본인이 다운로드 하여 audio 태그를 활용하여 실행할 수 있습니다.
        (8) 이 외 다른 구현 사항은 영상을 참고하여 만들어보세요 :)

    주의사항

        단, 아래의 조건만 채운다면 반드시 똑같이 만들 필요는 없습니다.
        즉 애니메이션과 css를 구현 영상과 똑같이 하실 필요는 없으며, 이를 위해 html이나 css를 따로 건드셔도 괜찮습니다.
        해당 html과 css, animation은 제가 빠른 시일 내에 급히 작성한 것이기 때문에 이해가 조금 어려울 수 있습니다

        (1) 각 노래에 맞는 앨범 자켓 이미지로 배경이 바뀌어야함 
        (2) 각 노래에 맞는 색상으로 disk_inner와 stop 상태의 배경이 바뀌어야함
        (3) start 시에는 disk가 돌아가고 stop 시에는 disk가 멈춰야함
        (4) 선택된 앨범에는 하이라이트 호과가 있어야하며 클릭 및 버튼을 통해 선택이 가능함
*/
