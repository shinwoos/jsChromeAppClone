# greetings.js / input, localstorage, hidden ( display : none )

input에 값을 넣음. 그 값이 localstorage에 저장됨.
USERNAME_KEY와 value (username)으로 구성.

---

localstorage에 값이 없으면 loginForm을 classList.remove(hidden)을 이용해서

hidden을 지움. 브라우저에 다시 loginForm 생성

---

_if문 사용_  
localstorage에 값이 있으면 loginForm을 classList.add(hidden)을 통해
loginForm을 브라우저 상에서 안보이게 함.
그리고 paintgreeting 함수를 출력.
