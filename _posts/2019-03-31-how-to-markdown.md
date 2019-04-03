---
layout:     post
title:      "마크다운 문법 및 사용법"
subtitle:   "블로깅을 위한 마크다운 사용법!"
date:       2019-03-31 15:00:00
writer: 박찬우
categories: [Network]
header-img: "img/post-bg-2015.jpg"
catalog: true
tags:
    - markdown
---

> “Yeah It's on. ”


## 팀원 사용법
- `git clone` 을 통해 로컬에 깃 저장소 다운로드
- `_post/` 에 Markdown file 작성 후 `commit`
- 이후 `push` 를 통해 블로그에 업로드
- 포스팅 작성 시, 게시물 설정을 다음과 같이 작성한다(필수).
	```yml
	---
	layout:     post
	title:      "제목을 적으세요"
	subtitle:   "소제목을 적으세요"
	date:       2015-01-29 12:00:00
	author:     "이름"
	header-img: "img/header-img/path.jpg"
	catalog: true
	tags:
		- javascript
		- js
		- 태그를 더 적을 수 있다. (검색 시 태그별로 볼 수 있음)
	---
	```

## 마크다운 작성법
#### 헤더Headers

* 글의 제목
    ```
	글 제목
	=============
    글 부제목
    -------------
    ```

* 글머리: 카타롤그에 태그로 남겨져, 클릭시 해당 스크롤로 이동
	```
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

#### 인용문
이 안에서는 다른 마크다운 요소를 포함할 수 있다.

```
> 인용문
```
> 인용문

#### 순서있는 목록(번호)
순서있는 목록은 숫자와 점을 사용한다.
```
1. 첫번째
2. 두번째
3. 세번째
```
1. 첫번째
2. 두번째
3. 세번째

#### 순서없는 목록(글머리 기호)
```
- 글
  - 하위 글
    - 하위 글의 하위 글
```
- 글
  - 하위 글
    - 하위 글의 하위 글

#### 코드 ~~~ ... ~~~
```
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

#### 수평선 <hr/>
```
*****
```
*****


#### 링크
- 참조링크

```
[링크를 걸 단어][링크 아이디]
[링크 아이디]: URL "Optional Title here"

[Google][googlelink]
[googlelink]: https://google.com
```

[Google][googlelink]  
[googlelink]: https://google.com

- 인라인 링크

```
[링크를 걸 단어](URL)
```
[Google](https://google.com, "google link")

#### 강조
```
*이탤릭*
**강조**
~~지운표시~~
```

*이탤릭*  
**강조**  
~~지운표시~~  

#### 이미지

```
![이미지 이름](/path/to/img.jpg)
![이미지 이름](/path/to/img.jpg "Optional title")
```

사이즈 조절 기능은 없기 때문에 ```<img width="" height=""></img>```를 이용한다.

#### markdown 장점
	1. 간결하다.
	2. 별도의 도구없이 작성가능하다.
	3. 다양한 형태로 변환이 가능하다.
	4. 텍스트(Text)로 저장되기 때문에 용량이 적어 보관이 용이하다.
	5. 텍스트파일이기 때문에 버전관리시스템을 이용하여 변경이력을 관리할 수 있다.
	6. 지원하는 프로그램과 플랫폼이 다양하다.

#### markdown 단점
	1. 표준이 없다.
	2. 표준이 없기 때문에 도구에 따라서 변환방식이나 생성물이 다르다.
	3. 모든 HTML 마크업을 대신하지 못한다.

