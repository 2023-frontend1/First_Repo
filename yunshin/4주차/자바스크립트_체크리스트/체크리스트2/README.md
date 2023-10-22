# 2. 전역변수를 활용하여 함수 설계를 할 수 있는가

## (1) 자동차의 엔진 시동을 걸려고 합니다. 한번 시동을 킨 자동차는 다시 시동을 걸 수 없다고 하였을 때, 아래의 결과가 나오도록 함수를 설계하고 구현해보세요

> -- 올바른 경우 --
>
> - on() // 시동이 걸렸습니다.
> - off() // 시동이 꺼져있습니다.
> - on() // 시동이 걸렸습니다.

> -- 이미 엔진이 걸려있는 경우 --
>
> - on() // 시동이 걸렸습니다.
> - on() // 이미 시동이 걸려있습니다.

### 답변 ([SourceCode 🔗](https://github.com/2023-frontend1/First_Repo/blob/yunshin/yunshin/4%EC%A3%BC%EC%B0%A8/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8_%EC%B2%B4%ED%81%AC%EB%A6%AC%EC%8A%A4%ED%8A%B8/%EC%B2%B4%ED%81%AC%EB%A6%AC%EC%8A%A4%ED%8A%B82/%EC%8B%9C%EB%8F%99.js))

> -- 올바른 경우 --
<img width="324" alt="올바른_경우" src="https://github.com/2023-frontend1/First_Repo/assets/50646145/639ed175-65a4-47fc-bceb-67a284d66d9a">

> -- 이미 엔진이 걸려있는 경우 --
<img width="321" alt="이미_엔진이_걸려있는_경우" src="https://github.com/2023-frontend1/First_Repo/assets/50646145/c0adfbcc-5c6c-4f15-89ae-1ab587e91d68">
