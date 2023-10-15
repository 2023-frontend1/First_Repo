# 🚀 Frontend 동료학습 1조 학습 저장소입니다.

<br/>
<br/>

## 📌 진행 방식

### - Flow 발생 
- 매 주 화요일, 한 주간의 풀이할 문제 혹은 JS 관련 과제를 설정합니다.

### - 페어 타임
- 매일 3시간씩 페어 타임을 가지며, Flow 를 해결하고 commit 을 남겨주세요. (매일!!)

### - Pull Request
- 매주 토요일, 개인 Branch 에서 작업한 해결 과제에 대해서 PR 을 날려주세요.
- 다른 조원들의 코드 리뷰가 완료되면 main branch 에 본인이 merge 합니다. 

### - 정기 회의
- 매주 일요일 9시, 조원 모두 회의 참석합니다.
- 각 문항 별로 가독성이 좋고 효율적인 코드를 선정하여, main Branch ```명예의전당_4주차``` 이름의 폴더에 commit 합니다. 

<br/>
<br/>

## ⭐️ 코드 공유

### 0. 저장소 Clone
 
  ```
  git clone https://github.com/2023-frontend1/First_Repo.git
  cd ./First_Repo
  ```

<br/>

### 1. 자기 이름으로 Branch 생성합니다. 
  
```
git pull origin main
git checkout -b [내 이름] 
```

<br/>

### 2. 자기 이름으로 Floder 생성합니다.

```
mkdir [내 이름]
```

<br/>

### 3. Flow 해결
+ 폴더/파일 추가나 문제풀이 등의 작업은 ```[내 이름] Branch``` > ```[내 이름] Floder``` 아래에서 진행한 후, commit 합니다.
+ 자기 이름으로 된 폴더 내부 구조는 자유롭게 꾸며도 좋습니다. 👍
+ 다른 사람 폴더 내부는 건들지 말아주세요.! 🙏 (보는 건 가능!!)

<br/>

### 4. Push
+ **🚨** ```[내 이름] Branch``` 로 업로드하기 !!
```git
git push origin [내 이름]
```

<br/>

### 5. Pull Request
+ 정기 회의 하루 전에 [main] <- [내 이름] 방향으로 Pull Request 을 열어주세요.
+ 제목은 ```[내 이름]-[해당주차]주차``` 로 통일합시다.!
<img width="1275" alt="PR_example" src="https://github.com/2023-frontend1/First_Repo/assets/50646145/a2a5adf5-382a-4e43-8883-483f8f0afa67">


<br/>
<br/>

## 💻 커밋 컨벤션
_(이모지까지 꼭 같이 넣어서 작성해세요~!)_

- 문제풀이 추가 or 새로운 기능 추가
  ```
  ✨ Feat: 추가한 (기능/문제풀이) 간략히 설명
  ```
- html, css 문법 추가 및 수정
  ```
  💄 Design: 변경한 내용에 대해 간략히 설명
  ```
- 이슈(버그) 수정
  ```
  🚑 Fix: 이슈(버그)내용 + 수정내용 간략히 설명
  ```
- 코드 구조 개선
  ```
  ♻️ Refactor : 리팩토링한 내용 간략히 설명
  ```
- 폴더 혹은 파일 삭제
  ```
  🔥 Remove: 삭제한 폴더 혹은 파일 이름
  ```
- README 파일 등 문서 작업
  ```
  📃 Docs : 문서 작업한 파일 이름
  ```
- 폴더 혹은 파일 이동
  ```
  🚚 Move: 이동한 폴더 혹은 파일 이름
  ```
- 그 외
  ```
  🌀 Chore: 작업 내용 설명
  ```
