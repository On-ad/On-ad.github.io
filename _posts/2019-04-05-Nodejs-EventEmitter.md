---
layout:     post
title:      "서버의 밑바닥, EventEmitter"
desc: "server, request, response 등 다양한 객체의 인터페이스인 EventEmitter 에 대해 알아보자."
date:    2019-04-05 
writer: 박찬우
about-me: "교육과장 박찬우입니다.
 진짜친구 구합니다."
github_id: "chanuuuuu"
categories: [node.js]
header-bg: "post-bg-template"
tags: [javascript, node]
icon: icon-nodejs
catalog: true
---

API
===

___node.js는 기본적으로 서버가 사용하는 객체들의 인터페이스를  API로 제공하고 있다.___  


API들을 통하여 서버의 요청 및 응답, 파일 입 / 출력등 모든 기능을 커스터마이징 할 수 있도록 한다. 이때문에 서버의 구동원리를 이해하기 위해서는 제공되는 API에 대한 이해가 필요하다.  


## 0. Interface


 `인터페이스가 뭐길래 시작도 하기전에 배울 것이 이렇게나 많나?`  

__Interface__ 란, `O-O`에서 클래스를 구현하기 전 상속받는 밑그림과 같은 역할을 담당한다. 정의해야할 `property`나 `method`와 같이 해당 클래스나 객체(`instance`)의 기본적인 틀을 정의해두는 것이다.  

이처럼 서버를 구성하는 객체들의 기능과 역할을 미리 Interface로 정의해두고 API로 제공함으로써 개발자는 API를  자신의 용도에 맞게 사용하여 서버를 개발할 수 있다.  

이제부터 node.js가 제공하는 API인 EventEmitter를 살펴보자.  
___

# EventEmitter  


### 1. 정의  

_event_ 에 동작할 listener function(`EventListener`)를 __정의__ 하고 _event_ 가 발생될 때 정의해둔 listener function들을 __호출__ 하는 클래스  

참조 및 번역 문서 : [https://nodejs.org/api/events.html](https://nodejs.org/api/events.html)  



### 2. 특징  

- 서버객체, 요청 및 응답개체, 이 후에 배울 Stream객체까지 모두 해당 클래스의 객체(`instance`)이다.  
  

- 각 event에 여러개의 listener function(`EventListener`)을 정의할 수 있고 이 함수들은 function object array의 형태로 저장한다.  
  
- event가 발생되어 listener function(`EventListener`)가 호출될 때, 위의 배열을 순서로 호출하게된다.  
  

- `EventListener`를 등록하는 함수들은 모두 eventemitter객체를 반환하므로 연결하여 등록할 수 있다.  
  
- node.js는 이벤트 기반 비동기식 I/O를 제공한다. 이 것은 입출력의 경우, 작업과 callback 함수를 넘기면서 구현된다. 하지만 event의 경우, 함수들이 동기적으로 호출된다.  
  

### 3. Error 처리  
  
node.js의 치명적인 단점은 오류가 났을 때 server 자체가 hang-up 되기 때문에 예외처리는 `EventEmitter`에게 반드시 필요하다.  

> 에러가 나게되면 `error` 이벤트가 발생되는데, 반드시 이 이벤트에 리스너를 추가해주어야함.    

```js
const EventEmitter = require('events');
const myemit = new EventEmitter();

//error 이벤트에 Arrow function으로 리스너 추가.
myemit.on('error', (err)=>{
    console.log('에러발생! : ' + err);
})
```  
  
### 4. Method  
  
Class는 `Emitter`, Instance는 `emitter`로 표기한다.  

- ___emitter.addListener(eventName, listener)___  

  
    - 이벤트를 생성하고, 그 이벤트에 대한 리스너를 추가하기 위해 사용되는 함수.  

    - _emitter.on(eventName, listener)_ 으로 주로 사용된다.  
      
    - `eventName`의 이름을 가진 이벤트에 대응되는 함수 배열에 `listener`를 push한다.  
      
    ```js
    const myemit = new EventEmitter();

    myemit.on('first', ()=>{
        console.log("첫번째 이벤트 리스너 수행!");  
    })

    myemit.on('first', (a,b)=>{
        console.log("두번째 이벤트 리스너 수행!");  
        console.log(a);
        console.log(b);
    })
    ```

    - first라는 이벤트에 Arrow function 으로 리스너를 추가한 후, emit으로 이벤트 발생.  

    - _emit()_ 함수를 통해 이벤트를 발생시킬 때 인자값을 함께넘기면서 리스너를 호출할 수 있다.  

    하지만 첫번째 이벤트리스너처럼 인자값이 정해지지 않아도 반드시 호출된다.  
  
- ___emitter.once(eventName, listener)___
  
    - 이벤트를 생성하고 __일회성__ 의 리스너를 연결시키는 용도로 사용된다.
    <br>
    - `eventName`의 이름을 가진 이벤트에 대응되는 함수 배열에 `listener`를 push한다.
    <br>
    - 리스너가 호출된 이 후, 함수 배열에서 제거된다. 
    <br>
    ```js
    const myemit = new EventEmitter();
    let count = 0;

    var listener = function(){
        console.log('이벤트 리스너가 호출되었습니다.');
        ++count;
        
        // do something
    }

    myemit.once('first', listener);

    myemit.emit('first');
    myemit.emit('first');

    console.log(count);
    //output
    /*
    이벤트 리스너가 호출되었습니다.
    1
    */
    ```  
    이벤트을 2회 발생시켰으나, once로 이벤트에 연결시켰기 때문에 리스너는 1회 호출된다.  
      

- ___emitter.emit(eventName, [args])___
      
    - `eventName`의 이름의 이벤트에 대응되는 함수 배열을 기준으로 모든 리스너를 호출시킨다.  
      
    - 이벤트에 대응되는 함수가 필요한 인자값을 함께 넣을 수 있다. 단, 필요한 인자값이 없더라도 수행될 수 있다.  
    

    ```js
    const myemit = new EventEmitter();

    myemit.on('first', ()=>{
        console.log("첫번째 이벤트 리스너 수행!");  
    })

    myemit.on('first', (a,b)=>{
        console.log("두번째 이벤트 리스너 수행!");  
        console.log(a);
        console.log(b);
    })

    myemit.emit('first');
    myemit.emit('first',3,5);

    //output
    /*
    첫번째 이벤트 리스너 수행!
    두번째 이벤트 리스너 수행!
    undefined
    undefined
    첫번째 이벤트 리스너 수행!
    두번째 이벤트 리스너 수행!
    3 
    5
    */
    ```   

- ___emitter.eventNames()___
  
    - 함수를 호출하는 `eventEmitter`객체에 선언된 `event`들을 배열형태로 반환한다.  

    - 이벤트에 대응되는 함수가 필요한 인자값을 함께 넣을 수 있다. 단, 필요한 인자값이 없더라도 수행될 수 있다.  
      
    - 이벤트에 여러개의 리스너가 연결되어있더라도, 이벤트는 1개만 존재한다.  
      

- ___emitter.listenerCount(eventName)___  

    - `eventName`에 대응되는 함수 배열의 길이를 반환한다. 즉, `eventName`이 발생할 때 호출되는 리스너의 수를  반환한다.  
      
- _emitter.listeners(eventName)_  
      
    - `eventName`에 대응되는 함수 배열을 복사하여 반환한다. 즉, 반환형태는 <Function []> 함수배열이다.  
  
- ___emitter.removeListener(eventName, listener)___  
      
    - 해당 이벤트에 연결된 `listener`를 제거하는 용도로 사용된다.  
  
    - _emitter.off(eventName, listener)_ 으로 주로 사용된다.  
      
    - `eventName`의 이름을 가진 이벤트에 대응되는 함수 배열에 `listener`하나를 제거하며, 해당 이벤트에 연결된 `listener`중 여러개를 제거할 때는 여러번 호출되어야한다.  
      

    - __위 함수가 다른 리스너 내부에서 사용될 경우, 모든 리스너에 대한 호출이 완료된 후, 제거가 된다.__  
      
    - 배열의 내부 원소제거와 동일한 기능이므로 최대한 줄이는 것이 중요하다. __필요하다면, 마지막으로 이벤트에 연결시켜 사용하는 것이 효율적일 것이다.__  


- ___emitter.removeALlListeners(eventName)___  

    - 해당 이벤트에 연결된 `listener`를 모두 제거한다.  
  

- ___emitter.prependListener(eventName, listener)___  
      
    - _emitter.on(eventName, listener)_ 과 동일하게 이벤트를 생성하고, 그 이벤트에 대한 리스너를 추가하기 위해 사용되는 함수이나 배열에 넣는 방식이 다름.  
  
    - 리스너를 함수 배열의 push 하는 것이 아닌 맨 처음 순서에 넣어 이벤트 발생시 가장먼저 호출되도록 함.  
      
    ```js
    const myemit = new EventEmitter();

    var make_listener = function(num){
        return ()=>{
            console.log( num + ' 번째로 생성된 리스너 입니다!');
        }
    };

    myemit.on('first', make_listener(1));
    myemit.on('first', make_listener(2));
    myemit.prependListener('first', make_listener(3));

    myemit.emit('first');

    //output
    /*
    3 번째로 생성된 리스너 입니다!
    1 번째로 생성된 리스너 입니다!
    2 번째로 생성된 리스너 입니다!
    */
    ```
    가장 마지막에 생성되었으나, _prependListener()_ 을 통해 함수배열의 첫번째 순으로 삽입이 되어 가장먼저 호출된다.  
  

- ___emitter.prependOnceListener(eventName, listener)___
      
    - _emitter.prependListener()_ 와 _emitter.once()_ 의 기능을 결합하여, 함수배열의 맨 처음에 __일회성__ 의 리스너를 삽입한다.  
      
    - 두개의 기능이 존재함에도 따로 존재하는 것으로 보아 매우 중요한 함수일 것이다.  



### 5. 정리 및 요약
  
이 후, 우리가 Server 구현 시에 사용할 객체는 모두 EventEmitter 클래스의 객체이다. 서버에 대한 요청을 `event`라고 정의한다면 라우팅을 하는 행위를 `eventListener`로 볼 수 있을 것이다.
여러가지 메소드들을 이용하여 서버를 구현하여 보자.  
