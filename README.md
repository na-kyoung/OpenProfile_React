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
  - defaultValue - input form에 데이터 가져오기
  - useRef - 수정한 데이터 value 전달
- 데이터 전달/가져오기
  <div style="text-align:center">
    
  [![데이터 전달하는 3가지 방법](https://velog-readme-stats.vercel.app/api?name=knk00&slug=React-리액트-값-전달)](https://github.com/na-kyoung/open_profile_react)
  
  </div>

<br />

## 결과
