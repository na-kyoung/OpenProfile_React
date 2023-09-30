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
- 메인 화면

  <img width="500" alt="메인화면" src="https://github.com/na-kyoung/open_profile_react/assets/137421820/46aa341d-94bd-48bf-a00a-51d5995fcb65">
  
- 연차별 프로필 화면 (0년차)

  <img width="469" alt="프로필화면_0년차" src="https://github.com/na-kyoung/open_profile_react/assets/137421820/8172770d-b938-452a-9656-c37331f79354">
  
- 경력 추가 기능

  <img width="520" alt="경력추가기능" src="https://github.com/na-kyoung/open_profile_react/assets/137421820/5c311373-2278-445e-a2cb-a6aeb4c63dad">
  
- 프로필 추가 기능

  <img width="631" alt="프로필추가기능" src="https://github.com/na-kyoung/open_profile_react/assets/137421820/39d67cde-24e2-4b04-ba86-a03c9531e023">

- 프로필 수정 기능

  <img width="803" alt="프로필수정기능" src="https://github.com/na-kyoung/open_profile_react/assets/137421820/bd2bd84a-1bcf-4901-873e-ed664cb8268a">

- 구직 상태 변경 기능

  <img width="503" alt="구직상태변경기능" src="https://github.com/na-kyoung/open_profile_react/assets/137421820/cba495ec-de30-4bf3-9878-116edccba185">

- 프로필 삭제 기능

  <img width="842" alt="프로필삭제기능" src="https://github.com/na-kyoung/open_profile_react/assets/137421820/2d8a3833-7f01-4fcc-add0-0e51f2b89a4c">
