---
layout:     post
title:      "마크다운 문법 및 사용법(feat.강화수)"
desc: "블로깅을 위한 마크다운 사용법!"
date:       2019-03-31 
writer: 강동기
about-me: "안녕하십니까. OnAD의 대표 강동기입니다. 여자친구 구합니다"
github_id: "GoMotiv"
categories: [Etc]
header-bg: "post-bg-papers"
tags: [Blog,markdown]
icon: icon-wordpress
catalog: true
---

> “Yeah It's on. ”

# 팀원 사용법

- `git clone` 을 통해 로컬에 깃 저장소 다운로드
- `_post/` 에 Markdown file 작성 후 `commit`
- 이후 `push` 를 통해 블로그에 업로드
- 이미지 파일은 `/static/assets/img/post_img/너의의름폴더/이미지파일.확장자`
- 포스팅 작성 시, 게시물 설정을 다음과 같이 작성한다(필수).

  ~~~yml
  ---
  layout:     post
  title:      "제목을 적으세요"
  desc:   "블로그의 간단한 설명적으세요"
  date:       0000-00-00
  writer:     한글이름
  about-me: "포스트의 프로필로, 자신을 소개하는 말"
  github_id: "자신의 깃허브 아이디"
  header-img: "post-bg-xxxxx"  (assets/img/header_bg 안의 파일명만 입력하면 됩니다)
  categories: [Xxxxxx] ( 반드시 첫글자는 대문자 / 사용가능 범주 - Javascript, Node.js, ML&Statistics, React, Marketing, Startup, Etc )
  tags: [xxxx,xxxx]
  icon: icon-xxxxxxxx (대부분의 언어들을 소문자로 xxxxxxxx에 쓰면됩니다)
  ---
  ~~~

- 블로그 탭에서는 ```Crtl 두 번``` 입력하여 헤당 포스트 찾기 기능을 활성화 할 수 있다.

--------
# 마크다운 작성법

### 1. 헤더Headers

- 글의 제목

  ```md
  글 제목
  =============
  글 부제목
  -------------
  ```

- 글머리: #개수에 따른 글머리 크기 변화

  ```md
  # This is a H1
  ## This is a H2
  ### This is a H3
  #### This is a H4
  ##### This is a H5
  ###### This is a H6
  ```

  # This is a H1
  ## This is a H2
  ### This is a H3
  #### This is a H4
  ##### This is a H5
  ###### This is a H6

- 줄 한칸 띄우기 : 행의 마지막에 Space를 두 번이상 쳐줄것

### 2. 인용문

이 안에서는 다른 마크다운 요소를 포함할 수 있다.

```md
> 인용문
```

  > 인용문

### 3. 순서있는 목록(번호)

순서있는 목록은 숫자와 점을 사용한다.

  ```md
  1. 첫번째
  2. 두번째
  3. 세번째
  ```

1. 첫번째
2. 두번째
3. 세번째

### 4. 순서없는 목록(글머리 기호)

  ```md
  - 글
    - 하위 글
      - 하위 글의 하위 글
  ```

- 글
  - 하위 글
    - 하위 글의 하위 글

### 5. 코드 ~~~ ... ~~~

  ```md
  ~~~[[언어 이름]] js
  [[코드]]
  var a = 1;
  console.log(a);
  ~~~
  ```

  ~~~js
  var a = 1;
  console.log(a);
  ~~~

### 6. 수평선 <hr/>

  ```md
  *****
  ```

*****

### 7. 링크

- 참조링크

```md
[링크를 걸 단어][링크 아이디]
[링크 아이디]: URL "Optional Title here"

[Google][googlelink]
[googlelink]: https://google.com
```

[Google][googlelink]  
[googlelink]: https://google.com

- 인라인 링크

```md
[링크를 걸 단어](URL)
```

[Google](https://google.com, "google link")

### 8. 강조

```md
*이탤릭*
**강조**
~~지운표시~~
```

*이탤릭*  
**강조**  
~~지운표시~~  

### 9. 이미지

```md
![이미지 이름](/path/to/img.jpg)
ex) ![](/static/assets/img/post_img/이미지이름.확장자) -> 당연히 저 경로에 이미지 넣을것
![이미지 이름](/path/to/img.jpg "Optional title")
```

사이즈 조절 기능은 없기 때문에 ```<img width="" height=""></img>```를 이용한다.

--------

### markdown 장점

1. 간결하다.
2. 별도의 도구없이 작성가능하다.
3. 다양한 형태로 변환이 가능하다.
4. 텍스트(Text)로 저장되기 때문에 용량이 적어 보관이 용이하다.
5. 텍스트파일이기 때문에 버전관리시스템을 이용하여 변경이력을 관리할 수 있다.
6. 지원하는 프로그램과 플랫폼이 다양하다.

### markdown 단점

1. 표준이 없다.
2. 표준이 없기 때문에 도구에 따라서 변환방식이나 생성물이 다르다.
3. 모든 HTML 마크업을 대신하지 못한다.

