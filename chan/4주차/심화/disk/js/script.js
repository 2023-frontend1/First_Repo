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
//---------------------------------------------------------------------------
//--------------------------변수 정의------------------------------------
const $albumcover_List = Array.from(
  document.querySelectorAll(".list_btn_group > ul > img")
);

const $main = document.querySelector("main");
const $filter = document.querySelector(".filter");

const $disk = document.querySelector(".disk");
const $disk_inner = document.querySelector(".disk_inner");

const $playBtn = document.querySelector(".play_btn");
const $stopBtn = document.querySelector(".stop_btn");
const $nextBtn = document.querySelector(".next_btn");
const $prevBtn = document.querySelector(".prev_btn");

let targetIndex;
//---------------------------------------------------------------------------
//--------------------------함수 정의------------------------------------
//현재 선택된 앨범 index값 가져오는 함수
const checkTargetIndex = () => {
  $albumcover_List.forEach((el, i) => {
    if (el.classList.contains("play")) {
      targetIndex = i;
    }
  });
  return targetIndex;
};
// 커버이미지 선택시 배경화면 바꿔주는 함수
const changeBackgroundcolor = (index) => {
  $main.style.background = `linear-gradient(120deg, ${musicListData[index].color[0]},  ${musicListData[index].color[1]})`;
};

// 커버이미지 선택시 inner_disk색상 변경해주는 함수
const changeDiskInnerColor = (index) => {
  if ($filter.classList.contains("blur")) {
    return 0;
  }
  $disk_inner.setAttribute(
    "style",
    `background-color : ${musicListData[index].color[0]} `
  );
};

//play버튼을 누르면 현재 커버이미지를 바탕화면으로 보여주는 함수
const changeBackgroundImg = () => {
  checkTargetIndex();
  $filter.style.animation = "none";
  void $filter.offsetWidth;
  $filter.style.animation = "null";

  $filter.classList.add("blur");
  $filter.style.backgroundImage = `url(${musicListData[targetIndex].src}`;
  $filter.style.backgroundRepeat = "no-repeat";
  $filter.style.backgroundPosition = "center";
  $filter.style.backgroundSize = "100% 100%";
  $filter.style.animation = "upToDown";
  $filter.style.animationDuration = "0.5s";
  $filter.style.animationTimingFunction = "linear";
  $filter.style.animationFillMode = "forwards";
};

//stop버튼 누르면 커버이미지 삭제하는 함수
const removeBackgroundImg = () => {
  $filter.style.animation = "downToUp";
  $filter.style.animationDuration = "0.5s";
  $filter.style.animationTimingFunction = "linear";
  $filter.style.animationFillMode = "forwards";
};
//선택된 앨범 커버확인하는 함수
const clickAlbumCover = (img) => {
  if (img.target.classList.contains("album_cover")) {
    $albumcover_List.forEach((el, i) => {
      if (el.contains(img.target)) {
        $albumcover_List[i].classList.add("play");
        changeBackgroundcolor(i);
        changeDiskInnerColor(i);
      } else {
        $albumcover_List[i].classList.remove("play");
      }
    });
  }
};
//---------------------------------------------------------------------------
//--------------------------버튼이벤트 정의------------------------------------
//클릭된 앨범커버 사진 확대해주는 event
$imageList.addEventListener("click", clickAlbumCover);

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
  changeBackgroundcolor(curIdx - 1);
  changeDiskInnerColor(curIdx - 1);
  $albumcover_List[curIdx - 1].classList.add("play");
  targetIndex--;
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
  changeBackgroundcolor(curIdx + 1);
  changeDiskInnerColor(curIdx + 1);
  $albumcover_List[curIdx + 1].classList.add("play");
  targetIndex++;
});

//palyBtn click event
$playBtn.addEventListener("click", (button) => {
  $disk.classList.add("active");
  changeBackgroundImg();
  $disk_inner.setAttribute(
    "style",
    `background-color : ${musicListData[targetIndex].color[0]} `
  );
});

//stopBtn click event
$stopBtn.addEventListener("click", (button) => {
  $disk.classList.remove("active");
  $filter.classList.remove("blur");
  removeBackgroundImg();
  checkTargetIndex();
  changeDiskInnerColor(targetIndex);
});
//---------------------------------------------------------------------------
