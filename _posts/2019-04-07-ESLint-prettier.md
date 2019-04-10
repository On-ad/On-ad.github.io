---
layout: post
title:  "ESLint 와 Prettier 사용하여 VScode에서 개발표준을 쉽게 적용하기"
date:   2019-04-07
desc: "npm 라이브러리 ESLint와 Prettier를 vscode의 환경설정을 통해 개발표준을 쉽게 적용시켜 소스코드의 품질을 유지할 수 있도록 하는 방법!"
writer: 강화수
about-me: "OnAd의 개발자 강화수입니다. 지속적인 성장을 추구합니다."
github_id: "hwasurr"
header-bg: "post-bg-prettier"
categories: [Etc]
catalog: true
tags: [Source-code,develop-environment,개발표준]
icon:
# /static/assets/img/post_img/hwasurr/
---

# ESLint? Prettier

![prettier-eslint](/static/assets/img/post_img/hwasurr/prettier-eslint.png)

ESLint는 자바스크립트 소스의 문법검사기이다. 문법에 대한 여러 환경설정이 가능하고, 다른 개발자들이 사용하는 환경설정을 불러와 사용할 수 있다.  
Prettier는 코드를 자동으로 정리해주는 프로그램으로, 코드 정리 규칙을 설정할 수 있다.  

이 두 프로그램을 합치게 되면, ESLint에서 정한 환경설정에 따르는 코드로 Prettier를 사용해 자동으로 코드 문법을 정리해주게 만들 수 있다.

우리는 대부분의 자바스크립트 개발 규칙을 airbnb 사의 규칙을 인용하여 사용한다. eslint 는 역시나! airbnb의 코드스타일 환경설정을 불러올 수 있도록 되어있다!  

유튜브도 하는 개발자 [wesbos&rarr;](https://www.youtube.com/watch?v=lHAeK8t94as&t=656s) 형님이 올려주신 [github&rarr;](https://github.com/wesbos/eslint-config-wesbos) 를 참고하면 더욱 쉽게 환경을 구축할 수 있다.

# npm 모듈 관리

![npm](/static/assets/img/post_img/hwasurr/npm.png)

npm은 (Nodejs Package Manager) 의 약자로, npm은 Node.js로 만들어진 모듈을 웹에서 받아서 설치하고 관리해주는 프로그램으로, 단 몇 줄의 명령어로 기존에 공개된 모듈들을 설치하고, 활용할 수 있다.

# 설치해보자!

우리가 사용할 prettier, eslint 역시 npm 을 통해서 다운로드하여 사용할 것이다. 먼저, npm init을 통해 package.json 을 생성한다.

~~~bash
npm init -y
~~~

init을 하게 되면, package.json 이 생성되고, 이 파일안에서 모든 라이브러리가 관리된다.  

그러고 난 후, eslint 와 prettier 를 엮은 wesbos 형님의 eslint config를 설치하고, 그에 동반되는 라이브러리 목록까지 모두 받아 설치하는 명령을 실행한다.

## dev local 환경에 개별로 적용하고 싶은 경우

~~~bash
npx install-peerdeps --dev eslint-config-wesbos
~~~

그런 다음, dev 환경으로 설정하고자 하는 폴더에서 `.eslintrc` 파일을 만들고 그 안을 이렇게 채운다.

~~~json
{
    "extends": [
        "wesbos"
    ]
}
~~~

하나의 팁은, 이 설정을 `package.json` 파일 안에서도 할 수 있다는 것이다. `"eslintConfig"` 프로퍼티의 값에 `.eslintrc` 의 내용을 갖다 넣으면 된다. 이를 통해 프로젝트 폴더에 파일을 하나 줄일 수 있다.  

## global 환경에 적용하고 싶은 경우

똑같이 npx 를 통해 다운로드 받는데 --dev 를 --global로 치환한다.

~~~bash
npx install-peerdeps --global eslint-config-wesbos
~~~

이후 글로벌 eslint 환경설정 파일을 만들고, 위에서와 같이 채워넣는다.  
on Mac &rarr;  `~/.eslintrc`  
on Windows &rarr;  `C:\Users\username\.eslintrc`  

# Setting

.eslintrc 파일 또는 package.json 의 `eslintConfig` 프로퍼티의 값을 수정함으로써 문법 룰을 수정할 수 있다. `rules` 프로퍼티 안에 prettier/prettier 프로퍼티의 값을 수정하면 prettier 환경설정도 가능하다.

~~~json
{
  "extends": [
    "wesbos"
  ],
  "rules": {
    "no-console": 2,
    "prettier/prettier": [
      "error",
      {
        "trailingComma": "es5",
        "singleQuote": true,
        "printWidth": 120,
        "tabWidth": 2,
      }
    ]
  }
}
~~~

# VScode 에서 저장시 수정 사용하기

VScode 확장프로그램 ESLint 를 설치한다. 이후 vscode 셋팅(탭상에서 File &rarr; Preference &rarr; Settings) 에서 우측 상단의 {} 표시를 누른 후 열린 setting.json 파일을 다음과 같이 설정한다.

~~~json
"editor.formatOnSave": true,
"[javascript]": {
  "editor.formatOnSave": false,
  "editor.tabSize": 2
},
"[javascriptreact]": {
  "editor.formatOnSave": false,
  "editor.tabSize": 2
},
"eslint.autoFixOnSave": true,

"prettier.disableLanguages": ["javascript", "javascriptreact"],
~~~

맨 아래의 `"prettier.disableLanguages"` 프로퍼티의 경우 prettier 확장프로그램을 깔고 사용하고 있던 경우면서, css, html 에 적용하고 있던 경우에 javascript와 javascriptreact 언어에 대해서 적용을 하지 않겠다는 뜻이다.(eslint 와 연동된 prettier(vscode 확장프로그램이 아닌 npm run으로 사용하는 프로그램) 를 사용하기 때문에).  

이 작업을 마치면 vscode 에서 작업하며 저장을 할 때 마다 eslint 와 prettier 가 설정한 문법에 맞도록 코드를 수정해준다.

----
저자 : 강화수 (hwasurr)