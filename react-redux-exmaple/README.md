# Redux (기존에 내가사용하던 방법이랑 다른지 확인겸 복습) react-redux 사용 안한버전 및 사용 버전

- Context api를 활용하여 데이터를 전달할수있지만 효과적으로 전달하기 위해 redux를 사용

## 단일 스토어를 만드는 법

- 단일 스토어이다
- 단일 스토어 사용 준비하기
  1.  import redux
  2.  액션 정의
  3.  액션을 사용하는 리듀서 만들기
  4.  리듀서 통합
  5.  합쳐진 리듀서 인자로 단일 스토어 만듬
- 준비한 스토어를 리액트 컴포넌트 적용
  1.  import react-redux
  2.  connect 함수를 이용해서 컴포넌트에 연결

## reudx Action 이란 ?

- 액션은 객체입니다.
- 두 가지 형태의 액션이 존재

  1. {type:'TEST'} // payload없는 액션 (데이터 미존재)
  2. {type:'TEST',data:object} // payload있는 액션 (데이터 존재)

- type만이 필수 프로퍼티이며 type은 문자열

### 리덕스의 액션의 역활

- 액션 생서자를 통해 액션을 만듬
- 만들어낸 액션 객체르 리덕스 스토어에 전달
- 리덕스 스토어가 액션 객체를 받으면 스토어의 상태값이 변경
- 변경된 상태값에 의해 상태를 이용하고 있는 컴포넌트가 변경
- 액션은 스토어에 보내는 일종의 인풋이라 생각할 수 있음

### 액션을 준비하기 위해서는 2가지 단계로 나눠짐

- 액션의 타입을 정의하여 변수로 빼는 단계
  1. 강제는 아니므로 안해도 됨
  2. 그냥 타입을 문자열로 넣기에는 실수를 유발할 가능성이 큼 (중복되는 문제로 인해 데이터가 꼬일수있음)
  3. 미리 정의한 변수를 사용하면 스펠링에 주의를 덜 기울여도 됨.(직접 문자열로 입력하였을때 오타가 발생할 수 있으므로 변수로 지정하여 해당 문제를 배제 할수있게 설계)
- 액션 객체를 만들어 내는 함수를 만드는 단계

1. 하나의 액션 객체를 만들기 위해 하나의 함수를 만들어 냄
2. 액션의 타입은 미리 정의한 타입 변수로 부터 가져와서 사용

## Redux 의 Reduce란?

- 액션을 주면 그액션이 적용되어 달라진 결과를 만들어줌 (액션만 이루어 지고 결과는 그대로일수도있음)
- 그냥 함수임

  1. pure Function
  2. Immutable
     - 리듀서를 통해 스테이트가(상태)가 달라졌음을 리덕스가 인지하는 방식

- 액션을 받아서 스테이트를 리턴하는 구조
- 인자로 들어오는 previouseState와 리턴되는 newState는 다른 참조를 가지도록 해야함.

## 스토어를 만드는 함수 만들어야함.

## combineReducers

## Redux Advanced

- 비동기 작업을 어디서 하냐가 중요
- 액션을 분리

  1. start
  2. success
  3. fail
  4. ...등등

- dispatch를 할때 진행

  1. 당연히 리듀서는 동기적
  2. dispatch도 동기적인거

## 리덕스 미들웨어

## redux devtools

## redux - thunk (내가 주로사용함 )

- 리덕스 미들웨어
- 리덕스 만든사람이 만듬
- 리덕스에서 비동기 처리를 위한 라이브러리
- 액션 생성자를 활용하여 비동기 처리
- 액션 생성자가 액션을 리턴하지 않고 함수를 리턴함

## Ducks Pattern

- 실무에서 덕스패턴을 선호한다고함 (현재는 나눠서 사용해봤는데 해당 패턴으로 변경해봐야할듯.)
- 규칙
- 하나의 모듈은...

  1. 항상 reducer()란 이름의 함수를 export default 해야합니다.
  2. 항상 모듈의 action 생성자들을 함수형태로 export 해야합니다.
  3. 항상 npm-module-or-app/reducer/ACTION_TYPE 형태의 action 타입을 가져야합니다.
  4. 어쩌면 action 타입들을 UPPER_SNAKE_CASE로 export 할 수 있습니다. 만약, 외부 reducer가 해당 action들이 발생하는지 계속 기다리거나, 재사용할 수 있는 라이브러리로 퍼블리싱할 경우에 말이죠.

## router redux

## redux saga

- 미들웨어 입니다
- 제너레이터 객체를 만들어 내는 제네레이터 생성 함수를 이용합니다.
- 리덕스 사가 미들웨어를 설정하고
- 내가만든 사가 함수를 등록한후
- 사가 미들웨어를 실행
- 그리고 등록된 사가 함수를 실행할 액션을 디스패치하면 됨
- 비동기로직이나 사이드 이팩트를 자유자제로 제어할수있다고 함,

## redux-actions

- 덕스 패턴을 쉽게 구현할수있게 도와준다고 함.
