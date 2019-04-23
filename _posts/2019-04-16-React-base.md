---
layout: post
title:  "리액트의 기본!"
date:   2019-04-19
desc: "자바스크립트의 프론트엔드 라이브러리 리엑트의 가장 기본적인 내용들"
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

## React?

<img src="/static/assets/img/post_img/hwasurr/react-angular-vue.png" style="width:400px;">

리액트는 **Virtual-DOM** 을 사용하여 실제 DOM 을 업데이트한다.  
리액트에서 데이터가 변하여 웹 브라우저의 실제 DOM 을 업데이트하는 과정은 다음과 같다.

1. 데이터를 업데이트하면 전체 UI를 VirtualDOM 에 렌더링한다.
2. 이전 VirtualDOM에 있던 내용과 현재 내용을 비교한다.
3. **바뀐 부분만** 실제 DOM에 적용한다.

리액트 매뉴얼에는 다음 문장을 볼 수 있다.

> 우리는 다음 문제를 해결하려고 리액트를 만들었습니다.  
> **지속적으로 데이터가 변화하는 대규모 애플리케이션 구축**

리액트가 가지는 가장 큰 장점은 업데이트 처리 간결성이다. 리액트는 UI를 업데이트하는 과정에서 생기는 복잡함을 모두 해소하고, 더욱 쉽게 업데이트에 접근할 수 있도록 만들어준다.

리액트는 **오직 프론트엔드(View단) 만을 담당**한다. 따라서 프레임워크라기 보다는 라이브러리에 해당된다. 다른 프레임웤들은 Ajax, Data모델링, routing 기능등을 내장하고 있는데, 리액트는 정말 view만 신경쓰는 라이브러리 이므로 기타 기능은 직접 구현하고나, 서드파티 라이브러리를 사용하여야 한다. **라우팅 에는 react-router**, **Ajax 처리에는 axios 또는 fetch**, **상태 관리에는 리덕스나 MobX**를 사용할 수 있다.

## create-react-app 을 통해 리액트 프로젝트를 쉽게 만들기

npm은 패키지를 설치하고 관리할 때 사용된다. 매우 간편하며 유용한 패키지 관리자 이지만, **의존하는 라이브러리 개수가 많으면 속도가 저하**되고 의존하는 버전이 설치되는 시점을 기준으로 결정하기 때문에 설치하는 시기에 따라 다른 버전을 설치할 가능성이 있다는 이슈가 있다.

<img src="/static/assets/img/post_img/hwasurr/yarn.png" style="width:100px;">

yarn 은 npm 의 문제점을 개선한 패키지 관리자로, npm 을 대체할 수 있다. 이 도구를 사용하면 패키지를 훨씬 빠르게 설치할 수 있다.  
[윈도우 설치 링크&rarr;](https://yarnpkg.com/lang/en/docs/install/#windows-stable)  
[MacOs 설치 링크&rarr;](https://yarnpkg.com/lang/en/docs/install/#mac-stable)  

리액트 프로젝트에서는 Webpack, babel 등 여러 도구들을 활용한다. 이런 필요한 여러 도구들을 설치하고 일일이 설정을 해 주어야 하는데, **create-react-app** 은 간단하게 프로젝트를 생성할 수 있도록 도와주는 도구이다. (리액트 개발사인 facebook 에서 제공해준다.)

create-react-app 은 yarn 패키지를 통해 설치할 수 있다. 패키지를 설치할 때는 local에 설치할 것인지, global에 설치할 것인지를 설정할 수 있다. 프로젝트에 귀속되도록 한다면 local을, 모든 디렉토리에서 사용할 수 있도록 한다면 global을 부여하면 된다.

- 글로벌 설치: `$ yarn global add create-react-app`  
- 로컬 설치: `$ yarn add create-react-app`  

리액트 프로젝트를 생성하는 법은 `create-react-app <프로젝트 이름>` 명령어를 사용하여 할 수 있다. 이후 개발 서버를 시작하려면 `yarn start` 명령을 통해 할 수 있다. 3000번 포트로 열리며, 파일을 수정할 때마다 프로젝트를 다시 빌드하고 웹브라우저를 리로딩하기 때문에 수정하고 저장하기만하면 변화한 부분을 볼 수 있어 테스트하기 편하다.

## 첫 리액트 코드

`create-react-app <프로젝트 이름>` 을 통해 만든 프로젝트를 열고, src/App.js 파일을 열면 다음과 같을 것이다.

~~~jsx
import React. { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>
            </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
        </div>
        );
    }
}
~~~

하나하나 살펴보자.

~~~js
import React, { Component } from 'react';
~~~

여기서 `{ Component }` 는 비구조화 할당을 사용하여 import 한 것인데, 이는 python의 언패킹의 개념과 비슷하다. 비구조화 할당과 관련한 쉽고 간단한 학습자료는 [여기&rarr;](https://on-ad.github.io/javascript/2019/04/08/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EB%B0%B0%EC%97%B4.html#es6%EB%B6%80%ED%84%B0-%EC%B6%94%EA%B0%80%EB%90%9C-%EB%B0%B0%EC%97%B4-%EA%B8%B0%EB%8A%A5)에서 볼 수 있다!

Node.js 의 주요 특징은 코드를 모듈화하여 쓸 수 있다는 건데, `const fs = require('fs');` 와 같이 사용할 수 있었다. ES6 에서는 이에 대한 새로운 문법이 생겼다.(우리에게 매우 친숙한) `import fs from 'fs';` 와같이 모듈을 불러와 사용할 수 있다.  

하나 중요하게 생각해야 할 점은, 웹브라우저에서 사용하는 자바스크립트는 Node.js 런타임이 아니므로 `require` 기능을 지원하지 않는다는 것이다.  
보통의 웹브라우저의 경우 `<script>` 태그를 통해 여러 파일을 불러오곤 한다. 하지만 `import, require` 등이 지원하는 코드모듈화 기능을 웹 브라우저에서도 비슷하게 사용할 방법이 있는데 이는 `bundling` 도구(여러 소스코드파일을 하나로 통합)를 이용하는 것이다. 대표적인 번들링 도구로는 **webpack** 이 있다.

우리 프로젝트에서는 src/index.js 를 시작(entrypoint)으로 필요한 파일을 다 불러온 후 하나의 파일로 합쳐주는 것이다.  

webpack 에는 여러 로더(loader)가 있어 여러 파일종류를 불러 올 수 있다. css-loader는 css 파일을, file-loader는 웹 폰트나 미디어파일을, babel-loader 는 js 파일들을 불러오면서 es6 코드로 작성된 코드를 es5 문법으로 변환해준다.  

로더는 원래 직접 설치하고 설정해야 하는데, create-react-app이 이 귀찮은 작업들을 대신 해준다.

~~~js
class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
        </div>
        );
    }
}
~~~

App 이라는 클래스를 생성하는데, 리액트 라이브러리 내부에 있는 Component 클래스를 상속하여 생성한다. 리액트의 컴포넌트들은 모두 Component를 상속하여 생성한다. (함수형 컴포넌트도 존재한다. - 이후)

리액트 컴포넌트는 멤버함수 `render()` 를 무.조.건 가지고 있어야 한다. 이 함수는 컴포넌트를 유저에게 어떻게 보일지를 설정해 줄 수 있다. 마치 HTML을 작성한 듯 보이는데, 이는 `JSX` 라는 리액트만의 확장문법이다. (이는 번들링 시 babel-loader에 의해 자바스크립트 코드로 읽어진다.)

## JSX

babel에 의해 변환된 javascript 코드를 보면 가독성도 낮고, 매우 불편하다. 몇 초만 보아도 JSX를 사용할 수 있는 것에 감사해야할 정도이다.  
JSX 에서는 기본 div, span과 같은 HTML 태그를 사용할 수 있다. App.js 에서는 App 컴포넌트를 만들었었는데, 이것이 src/index.js 파일을 열어보면 HTML 태그와 같이 사용되는 것을 볼수 있다.

~~~js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
~~~

### JSX의 규칙

JSX는 매우 편리한 문법인데, 올바르게 사용하고자 한다면 몇가지 규칙을 준수해야 한다.

1. `render()` 함수의 리턴값은 무조건 요소 하나로 감싸져 있어야한다. (div, React.Frgment 등.)

    - YES!

    ~~~js
    class App extends Component {
        render() {
            return (
                <React.Fragment>
                    <h1>hi!</h1>
                    <h2>this is JSX!</h2>
                </React.Fragment>
            )
        }
    }
    ~~~

    - No!

    ~~~js
    class App extends Component {
        render() {
            return (
                <h1>hi!</h1>
                <h2>this is JSX!</h2>
            )
        }
    }
    ~~~

2. `{}` 를 통해 자바스크립트 표현식을 JSX 내부에서 사용할 수 있다.

    ~~~js
    class App extends Component {
        render() {
            const name = "온애드";
            let level = "초보자";
            return (
                <div>
                    <h1>당신의 이름은 {name} 입니다.</h1>
                    <h2>당신의 react level은 {level} 입니다.</h2>
                </div>
            )
        }
    }
    ~~~

3. if...else 를 사용하지 못한다. 조건에 따른 렌더링을 해야 할 때는 JSX 문 밖에서 if 연산자를 이용하여 직접 작업하거나, `{}` 안에서 **삼항연산자** 또는 `&&`연산자를 사용하여야 한다.

    - 삼항연산자는 다음과 같이 사용할 수 있다 `조건식? true시 실행코드: false시 실행코드`

    ~~~js
    class App extends Component {
        render() {
            const name = 'Onad';
            const condition = true;

            return (
                <div>
                    <h1>hi! {name}</h1>
                    {
                        condition
                        ? "true입니다."
                        : "false입니다."
                    }
            )
        }
    }
    ~~~

    - `&&`연산자를 사용한 조건부 렌더링 : 특정 조건을 만족할때는 보여주고 아닐때는 넘어가는 경우는 간단히 사용할 수 있다.

    ~~~js
    class App extends Component {
        render() {
            const name = 'Onad';
            const condition = true;

            return (
                <div>
                    <h1>hi! {name}</h1>
                    {
                        condition && "참인경우만 코드실행!"
                    }
            )
        }
    }
    ~~~

4. 리액트에서 DOM 요소에 스타일을 적용할 때, 문자열의 형태로 적용할 수 없다. 대신 CSS 스타일을 자바스크립트 객체형식으로 만들어 적용해야한다.

    ~~~js
    class App extends Component {
        render() {
            const name = 'Onad';
            const condition = true;
            const style = {
                backgroundColor: 'gray',
                border: '1px solid black',
                height: Math.round(Math.random() * 300) + 50,
                width: Math.round(Math.random() * 300) + 50,
                WebkitTransition: 'all',
                MozTransition: 'all',
                msTransition: 'all'
            };
            return (
                <div>
                    <h1> 스타일의 적용 </h1>
                    <div style="style={style}"></div>
                </div>
    ~~~

5. HTML 에서의 class 대신 JSX에서는 className!! class 키워드는 이미 자바스크립트에 존재하는 키워드이기 때문이다.

    ~~~html
    <div className="my-div">
    ~~~

6. 태그는 꼭 닫아야한다. HTML의 경우 input 등의 태그는 닫지 않아도 문제가 생기지 않는다만, JSX에서는 언제나 태그를 닫아주어야 한다.

    ~~~js
    render() {
        return (
            <form>
                First name: <br/>
                <input type="text" name="name"></input>
            </form>
    }
    ~~~

7. 주석은 `{/* 주석 내용 */}`과 같이 사용한다 `//` 나 `/* */` 등을 사용하면 페이지에 고스란히 렌더링되는것을 볼 수 있을 것이다.

    ~~~js
    render() {
        return (
            {/* 주석은 이렇게 */}
        )
    }
    ~~~

## 컴포넌트

리액트를 사용하여 애플리케이션의 인터페이스를 설계할 때, 요소 요소는 여러 컴포넌트들로 구성되어 있다. 예를 들면, Header의 컴포넌트, content가 들어가는 컴포넌트, 아래의 Footer가 들어갈 컴포넌트 등 여러 컴포넌트를 제작하고 재사용할 수 있다.  

컴포넌트는 **단순한 템플릿의 역할만을 가지는 것이 아니다.** 데이터가 주어졌을 때, 이에 맞추어 UI를 만들어 주는 것은 물론이고, LifeCycle API 를 통해서 컴포넌트가 화면에 나타날 때, 사라질 때, 변화가 일어날때등 여러 상황에서 주어진 작업들을 처리하게 할 수 있으며, 메서드를 만들어 특별한 기능들을 추가할 수 있다.  
컴포넌트가 가지는 데이터는 props와 state로 나누어 볼 수 있다.

### 컴포넌트의 작성

MyComponent.js 를 하나 만들어 보자.  

~~~js
import React, {Component} from 'react';

class MyComponent extends Component {
    render() {
        return (
            <div>나의 새롭고 멋진 컴포넌트</div>
        )
    }
}

// 이 컴포넌트를 내보내어 다른 컴포넌트의 하위 컴포넌트로 사용하기
export default MyComponent;
~~~

이 컴포넌트를 App.js 에서 MyComponent를 불러와 사용해 보자.

~~~js
import React, { Component } from 'react';
import MyComponent from './MyComponent';

class App extends Component {
    render() {
        return (
            <MyComponent/>
        );
    }
}
~~~

이와 같이 다른 JS 파일에서 컴포넌트를 불러와 태그처럼 사용할 수 있다.

### props

props 는 properties를 줄인 표현으로, 컴포넌트 속성을 설정할 때 사용하는 요소이다. props 값은 해당 컴포넌트를 불러와 사용하는 부모 컴포넌트에서만 설정할 수 있다. **자식 컴포넌트에서는 props값을 읽는것만 가능하다.**  
앞의 예제에서 부모 컴포넌트인 App 에서 MyComponent에 props 값을 보내는 방법은 다음과 같다.

~~~js
render() {
        return (
            <MyComponent name="온애드"/>
        );
    }
~~~

이렇게 보낸 props 값 name을 MyComponent 에서 접근하기위해서는 다음과 같이 할 수 있다.

~~~js
class MyComponent extends Component {
    render() {
        return (
            <div>보낸 props? {this.props.name}</div>
        )
    }
}
~~~

props의 값을 설정하는 방법은 defaultProps 프로퍼티를 오버라이딩하는 것이다.
다음의 방법으로 기본값을 설정할 수 있다.

~~~js
class MyComponent extends Component {
    static defaultProps = {
        name: '기본 props.name 설정'
    };

    render() {
        return (
            <div>보낸 props? {this.props.name}</div>
        )
    }
}
~~~

### props의 검증 : propTypes

컴포넌트의 필수 props 를 지정하거나, props의 타입을 지정할 때는 propTypes 를 사용한다.  

~~~js
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
    static defaultProps = {
        name: '기본값'
    }
    static propTypes = {
        name: PropTypes.string,  // name props를 문자열 타입으로 설정
        // age props는 필수적으로 존재해야하며, 숫자여야한다.
        age: PropTypes.number.isRequired
    }
    render() {
        .....
    }
}
~~~

PropTypes 의 설정 종류는 다음과 같다.

| 종류                          | 설명            |
| --------------------------- | ------------- |
| `array`                     | 배열            |
| `bool`                      | 참 거짓          |
| `func`                      | 함수            |
| `number`                    | 숫자            |
| `object`                    | 객체            |
| `string`                    | 문자열           |
| `symbol`                    | Symbol객체      |
| `node`                      | 렌더링할수 있는 모든것  |
| `element`                   | 리액트 요소        |
| `oneOf(['male', 'female'])` | 주어진 배열의 값중 하나 |
| `any`                       | 아무 종류         |

리액트 프로젝트를 개인이 진행한다면 꼭 필요한 것은 아니지만, 협업 프로젝트라면 해당 컴포넌트에 어떤 props가 필요한지 잘 알 수 있으므로 명시한다면 개발 능률을 올릴 수 있다.

### state

앞서 보았던 props 는 부모 컴포넌트가 설정하여 넘겨주는 값이었다. 또한, props는 읽기 전용으로만 사용할 수 있다.  
**컴포넌트 내부에서 읽고 또 업데이트할 수 있는 값을 사용하려면 state를 써야한다.**  
이것은 언제나 **기본값을 미리 설정해야 사용할 수 있고**, **무.조.건 `this.setState()` 메서드를 통해 업데이트 해야한다.**

state를 설정하려면 컴포넌트의 생성자 메서드인 constructor (파이썬의 __init__과 비슷) 내부에서 설정해야 한다.

state의 초깃값을 설정하는 방법은 다음과 같고, `this.state.name` 과 같이 접근할 수 있다.

~~~js
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0,
            name: '따이섭'
        }
    }
    render() {
        return(
            <div>{this.state.number}번 {this.state.name}님 안녕하세요!</div>
        )
    }
}
~~~

직접 constructor 메서드를 작성하여 생성자 메서드에서 추가 작업을 하려면, 메서드 내부에서 부모 클래스인 Component의 constructor 메서드를 먼저 호출해야한다. 이때 super 키워드를 사용한다. 컴포넌트를 만들 때 props 값들을 사용하므로 props를 메서드의 파라미터로 전달한다.  

state 값을 업데이트기 위해서는 setState() 메서드를 반드시 사용하여야 한다. 사용하는 방법은 다음과 같다.

~~~js
this.setState({
    수정할 필드 이름: 값,
    수정할 또 다른 필드 이름: 값
})
~~~

버튼을 누를 때마다 number 값이 1이 올라가는 컴포넌트를 만들어 보자.  
버튼을 누를 때마다 `this.setState()` 함수를 실행하도록 설정했다. 함수를 만들 때는 ES6의 화살표 함수를 사용했다. 화살표 함수는 this가 자신이 종속된 인스턴스를  가리키기 때문에 유용하게 쓰일 수 있다. (일반 함수는 자신이 종속된 객체를 가리킨다.)

~~~js
render() {
    return (
        <div>
            <p>숫자 : {this.state.number}</p>
            <button onClick={ () => {
                this.setState({
                    number: this.state.number + 1
                })
            }}>더하기</button>
        </div>
    )
}
~~~

위에서 state 를 constructor 메서드 안에서 설정 방법을 보았는데, 이를 더욱 간단히 정의할 수 있는 방법이 있다.

~~~js
class MyComponent extends Component {
    state = {
        number: 0,
        name: 'park찬우'
    }

    render() {
        return (...)
    }
}
~~~

기모띠 라는 말이 절로 나올 정도로 간편하다!  
다시한번 주의사항을 환기 시키면 state 의 값을 업데이트 할 때는 언제나 setState() 메서드로만 업데이트 해야한다. 이 메서드는 파라미터로 전달받은 필드를 업데이트 한 후 컴포넌트를 리렌더링 하도록 트리거하는 것이다. setState() 를 사용하는 방법이 아닌 state 에 직접적으로 접근하여 값을 수정하면 컴포넌트를 자동으로 리렌더링 하지 않는다.