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
const $imageList = document.querySelector(".list_btn_group > ul");
//---------------------------------------------------------------------------
// 앨범커버목록 render 해주는 함수
const renderMusicList = () => {
  musicListData.forEach((data) => {
    const $albumCover_img = document.createElement("img");
    $albumCover_img.setAttribute("src", data.src);
    $albumCover_img.classList.add("album_cover");
    $imageList.appendChild($albumCover_img);
  });
};
window.onload = renderMusicList();
//musicListData를 순회하며 src를 <img>에넣어주면서 ul태그의 자식들로 넣어주며 rendering
//---------------------------------------------------------------------------
//$albumcoverList에 img정보를 모두 담는다.
const $albumcover_List = Array.from(
  document.querySelectorAll(".list_btn_group > ul > img")
);
const filter = document.querySelector(".filter");
//구조분해 할당
const [img0, img1, img2] = [
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
//선택된 앨범 커버확인하는 함수
const clickAlbumCover = (img) => {
  if (img.target.classList.contains("album_cover")) {
    $albumcover_List.forEach((el, i) => {
      if (el.contains(img.target)) {
        $albumcover_List[i].classList.add("play");
      } else {
        $albumcover_List[i].classList.remove("play");
      }
    });
  }
};
//클릭된 앨범커버 사진 확대해주는 event
$imageList.addEventListener("click", clickAlbumCover);
//---------------------------------------------------------------------------
//2.버튼들을가져와서 이벤트부터 만들어주자
const $playBtn = document.querySelector(".play_btn");
const $stopBtn = document.querySelector(".stop_btn");
const $nextBtn = document.querySelector(".next_btn");
const $prevBtn = document.querySelector(".prev_btn");
//---------------------------------------------------------------------------
// $nextBtn.addEventListener("click",f );
//==> 버튼을 클릭하면 -> 현재 click클래스는 remove하고 -1번째 앨범컵버의 click on
$nextBtn.addEventListener("click", (button) => {
  $albumcover_List.forEach((img, i) => {
    if (img.classList.contains("play")) {
      img.classList.remove("play");
      if ((i = 1)) {
        i = 3;
        $albumcover_List[i - 1].classList.add("play");
      } else {
        $albumcover_List[i - 1].classList.add("play");
      }
    }
  });
});
$prevBtn.addEventListener("click", (button) => {
  $albumcover_List.forEach((img, i) => {
    if (img.classList.contains("play")) {
      img.classList.remove("play");
      if ((i = $albumcover_List.length)) {
        i = 0;
        $albumcover_List[i + 1].classList.add("play");
      } else {
        $albumcover_List[i + 1].classList.add("play");
      }
    }
  });
});
// $prevBtn.addEventListener("click",f );
//---------------------------------------------------------------------------
