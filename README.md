# :bust_in_silhouette:개발자 오픈 프로필 홈페이지
간편하게 내 스킬과 프로필을 등록!

<br />

## 프로젝트 개요
처음으로 React를 공부하며 간단하게 진행해 본 프로젝트이다. <br />
누구나 연차에 따라 프로필을 추가하고 수정/삭제를 할 수 있다. <br />
또한, 구직 상태를 변경할 수 있어 취업 여부를 구분하기 쉽다.

<br />

## 구현 기능
- 경력 연차 / 프로필 추가 기능
- 프로필 수정 기능
- 구직 상태 변경 기능
- 프로필 삭제 기능

<br />

## 기본적인 처리
- json server에서 데이터 가져오기
- fetch()를 이용하여 REST API 호출 및 데이터 CRUD 처리
- 라우터를 이용한 페이지 렌더링
- 훅스를 이용한 데이터 처리
- 오류 처리 - 잘못된 주소로 이동 시 홈으로 안내

<br />

## 고민하고 중점을 둔 부분
- json 서버에서 fetch() 함수로 데이터를 가져와 json 형식으로 반환하는 복잡하고 반복되는 코드 <br />
  → UseFetch 컴포넌트로 분리하여 필요 시 호출 (UseFetch.jsx) <br />
  → 코드 간결해짐
- 프로필 수정 기능 (UpdateProfile.jsx)
  <div style="text-align:center">
    
    [![데이터 수정하기](https://velog-readme-stats.vercel.app/api?name=knk00&slug=React-데이터-수정하기-useRef-defaultValue-selected)](https://velog.io/@knk00/React-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EC%88%98%EC%A0%95%ED%95%98%EA%B8%B0-useRef-defaultValue-selected)

    </div>

- 데이터 전달하기
  <div style="text-align:center">
    
  [![데이터 전달하는 3가지 방법](https://velog-readme-stats.vercel.app/api?name=knk00&slug=React-리액트-값-전달)](https://velog.io/@knk00/React-%EB%A6%AC%EC%95%A1%ED%8A%B8-%EA%B0%92-%EC%A0%84%EB%8B%AC)
  
  </div>

<br />

## 결과
![1](https://github.com/na-kyoung/open_profile_react/assets/137421820/e953de12-4125-45f9-ae1a-0b98d49713d5)

![2](https://github.com/na-kyoung/open_profile_react/assets/137421820/04e0b98c-efb5-4a0b-ba1f-ebef24b16907)

![3](https://github.com/na-kyoung/open_profile_react/assets/137421820/17fa7c62-db9d-4ee9-9829-a978fc21c53d)

![4](https://github.com/na-kyoung/open_profile_react/assets/137421820/977c307a-52e6-4681-b860-2da47a4947e4)

![5](https://github.com/na-kyoung/open_profile_react/assets/137421820/4a2a355d-5c5a-486a-b572-407a49e7cc91)

![6](https://github.com/na-kyoung/open_profile_react/assets/137421820/fb8cd545-78e0-48ec-a1c6-b230730b6d7e)

![7](https://github.com/na-kyoung/open_profile_react/assets/137421820/ddc65203-5ce2-4856-b76d-7aa4b878d737)
