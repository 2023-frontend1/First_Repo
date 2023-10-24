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

//앨범커버가 선택됬을때
//1. 커버이미지 확대  2. 배경화면이 커버이미지로 바뀜

// 커버이미지 선택시 배경화면 바꿔주는 함수
const changeBackgroundcolor = (index) => {
  $filter.classList.add("main");
  
};
//선택된 앨범 커버확인하는 함수
const clickAlbumCover = (img) => {
  if (img.target.classList.contains("album_cover")) {
    $albumcover_List.forEach((el, i) => {
      if (el.contains(img.target)) {
        $albumcover_List[i].classList.add("play");
        // changeBackgroundcolor(i) 
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
$prevBtn.addEventListener("click", (button) => {
  let curIdx ;
  $albumcover_List.forEach((img, i) => {
    if (img.classList.contains("play")) {
      img.classList.remove("play");
      curIdx = i;
    }
  });
  if (curIdx == 0) {
    curIdx = $albumcover_List.length;
  }
  $albumcover_List[curIdx - 1].classList.add("play");
});
$nextBtn.addEventListener("click", (button) => {
  let curIdx;
  $albumcover_List.forEach((img, i) => {
    if (img.classList.contains("play")) {
      img.classList.remove("play");
      curIdx = i;
    }
  });
  if (curIdx == ($albumcover_List.length-1)) {
    curIdx=-1
  }
  $albumcover_List[curIdx + 1].classList.add("play");
});
// $prevBtn.addEventListener("click",f );
//---------------------------------------------------------------------------
//배경화면
const $filter = document.querySelector(".filter");
//play버튼을 누르면 현재 커버이미지를 바탕화면으로 보여주는 함수
const changeBackgroundImg = (index) => {
  $filter.classList.add("main");
  const backgroundImg = document.createElement("img");
  backgroundImg.setAttribute("src", musicListData[index].src);
  backgroundImg.classList.add("blur");
  $filter.appendChild(backgroundImg);
};

$playBtn.addEventListener("click", (button) => {
  // changeBackgroundImg(index)
});
