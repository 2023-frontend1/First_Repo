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
const $albumcover_List = Array.from(
  document.querySelectorAll(".list_btn_group > ul > img")
);
const $main = document.querySelector('main')
const $filter = document.querySelector('.filter')
// 커버이미지 선택시 배경화면 바꿔주는 함수
const changeBackgroundcolor = (index) => {
  $main.style.background = `linear-gradient(120deg, ${musicListData[index].color[0]},  ${musicListData[index].color[1]})`
}
//선택된 앨범 커버확인하는 함수 
const clickAlbumCover = (img) => {
  if (img.target.classList.contains("album_cover")) {
    $albumcover_List.forEach((el, i) => {
      if (el.contains(img.target)) {
        $albumcover_List[i].classList.add("play");
        changeBackgroundcolor(i)
      } else {
        $albumcover_List[i].classList.remove("play");
      }
    });
  }
};
//클릭된 앨범커버 사진 확대해주는 event
$imageList.addEventListener("click", clickAlbumCover);
//---------------------------------------------------------------------------
const $playBtn = document.querySelector(".play_btn");
const $stopBtn = document.querySelector(".stop_btn");
const $nextBtn = document.querySelector(".next_btn");
const $prevBtn = document.querySelector(".prev_btn");
//---------------------------------------------------------------------------
//prevBtn click event 
$prevBtn.addEventListener("click", (button) => {
  let curIdx;
  $albumcover_List.forEach((img, i) => {
    if (img.classList.contains("play")) {
      img.classList.remove("play");
      curIdx = i;
    }
  });
  if (curIdx == 0) {
    curIdx = $albumcover_List.length;
  }
  changeBackgroundcolor(curIdx-1)
  $albumcover_List[curIdx - 1].classList.add("play");
});
//nextBtn click event 
$nextBtn.addEventListener("click", (button) => {
  let curIdx;
  $albumcover_List.forEach((img, i) => {
    if (img.classList.contains("play")) {
      img.classList.remove("play");
      curIdx = i;
    }
  });
  if (curIdx == $albumcover_List.length - 1) {
    curIdx = -1;
  }
  changeBackgroundcolor(curIdx+1)
  $albumcover_List[curIdx + 1].classList.add("play");
});
//---------------------------------------------------------------------------

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
