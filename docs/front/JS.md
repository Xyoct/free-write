---
sidebarDepth: 2
---

## 算法积累
### 等差数列求和
* 计算1-100的自然数的和
``` js
// for循环算法
var len = 100;
var sum = 0;
for (var i = 1; i <= len; i++) {
    sum += i
}
console.log(sum)

// 递归算法
function num(n){
    if(n==1) return 1;
    return num(n-1)+n;
}
num(100);
```

## 工具函数
### 移动端动态设置rem值
``` js
window.addEventListener(('orientationchange' in window ? 'orientationchange' : 'resize'), (function() {
    function c() {
      var d = document.documentElement;
      var cw = d.clientWidth || 750;
      d.style.fontSize = (20 * (cw / 375)) > 40 ? 40 + 'px' : (20 * (cw / 375)) + 'px';
    }
    c();
    return c;
  })(), false);
```
### 跨浏览器的事件对象
``` js
var eventUtil = {
    // 添加事件处理程序
    addHandler: function(ele, type, handler) {
        if (ele.addEventListener) {
            ele.addEventListener(type, handler, false);
        } else if (ele.attachEvent) {
            ele.attachEvent('on' + type, handler, false); // IE            
        } else {
            ele['on' + type] = handler;
        }
    },
    // 获取事件对象
    getEvent: function(event) {
        return event? event: window.event;
    },
    // 获取Target对象
    getTarget: function(event) {
        return event.target || event.srcElement;
    },
    // 阻止默认事件
    preventDefault: function(event) {
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false; // IE
        }
    },
    // 阻止事件冒泡
    stopPropagation: function(event) {
        if (event.stopPropagation) {
            event.stopPropagation();
        } else {
            event.cancelBubble = true; // IE
        }
    },
    // 移除事件处理程序
    removeHandler: function(ele, type, handler) {
        if (ele.removeEventListener) {
            ele.removeEventListener(type, handler, false);
        } else if (ele.detachEvent) {
            ele.detachEvent('on' + type, handler, false); // IE            
        } else {
            ele['on' + type] = null;
        }
    }
}
```
### cookie的用法
``` js
var cookieUtil = {
    getCookie: function(name) {
        var cookieName = encodeURIComponent(name) + '=',
            cookieStart = document.cookie.indexOf(cookieName),
            cookieValue = null;

        if (cookieStart > -1) {
            var cookieEnd = document.cookie.indexOf(';', cookieStart);
            if (cookieEnd == -1) {
                cookieEnd = document.cookie.length;
            }
            cookieValue = decodeURIComponent(document.cookie.substring(cookieStart + cookieName.length, cookieEnd));
        }
        return cookieValue;
    },
    setCookie: function(name, value, expires, path, domain, secure) {
        var cookieText = encodeURIComponent(name) + '=' + encodeURIComponent(value);
        if (expires instanceof Date) {
            cookieText += '; expires=' + expires.toGMTString();
        }

        if (path) {
            cookieText += '; path=' + path;
        }

        if (domain) {
            cookieText += '; domain=' + domain;
        }

        if (secure) {
            cookieText += '; secure';
        }

        document.cookie = cookieText;
    },
    delCookie: function(name, path, domain, secure) {
        this.setCookie(name, '', new Date(0), path, domain, secure);
    }
}
```

### localstorage
``` js
/**
 * 用的是ES6的语法
 * 存储localstorage
 */
const setStore = (name, content) => {
    if (!name) return;
    if (typeof content !== 'string') {
        content = JSON.stringify(content);
    }
    window.localstorage.setItem(name, content);
}

/**
 * 获取localstorage
 */
const getStore = name => {
    if (!name) return;
    return window.localstorage.getItem(name);
}

/**
 * 删除localstorage
 */
const removeStore = name => {
    if (!name) return;
    window.localstorage.removeItem(name);
}
```

### sessionstorage
``` js
/**
 * 存储sessionStorage
 */
const setStore = (name, content) => {
    if (!name) return;
    if (typeof content !== 'string') {
        content = JSON.stringify(content);
    }
    window.sessionStorage.setItem(name, content);
}

/**
 * 获取sessionStorage
 */
const getStore = name => {
    if (!name) return;
    return window.sessionStorage.getItem(name);
}

/**
 * 删除sessionStorage
 */
const removeStore = name => {
    if (!name) return;
    window.sessionStorage.removeItem(name);
}
```