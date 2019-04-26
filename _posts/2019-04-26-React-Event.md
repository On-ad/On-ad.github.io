---
layout: post
title:  "리액트의 event처리 그리고 중요한 immutability!"
date:   2019-04-26
desc: "이벤트 처리와 map, filter, concat을 사용해야하는 이유와 사용법"
writer: 강화수
about-me: "OnAD의 개발자 강화수입니다. 지속적인 성장을 추구합니다."
github_id: "hwasurr"
header-bg: "post-bg-universe"
categories: [React.js]
catalog: true
tags: [front-end,react]
icon: icon-reactjs
# /static/assets/img/post_img/hwasurr/
---

## 이벤트?

유저가 웹 브라우저에서 DOM 요소들과 상호작용 하는 것을 이벤트라고 한다.  
예를 들어, 버튼에 마우스 커서를 올린 경우에는 mouseover 이벤트를 실행하고, 클릭했을 때는 onclick 이벤트를 실행하는 것들 말이다.
Form 요소는 값이 바뀔 때 onchange 이벤트를 실행한다.  

리액트의 이벤트 시스템은 웹 브라우저의 HTML 이벤트와 인터페이스가 동일하기 때무에 사용법이 꽤 비슷하다.  
다른 점은 **onClick, onChange와 같이 모든 이벤트명을 카멜케이스로 접근한다는 점**, **이벤트 핸들시 자바스크립트 코드를 실행하는 것이 아니라 함수 형태의 값을 전달**한다. 또, **DOM 요소에만 이벤트를 설정할 수 있다. Component에 이벤트를 설정하면, props로 전달되게 된다**는 점이다.