
## 1. jsonp方式跨越

``` js
var script = document.createElement("script");
script.src = "https://api.douban.com/v2/book/search?q=javascript&count=1&callback=handleResponse";
document.body.appendChild(script);
function handleResponse(response) {
    // 对response数据进行操作代码
    console.log(response)
}
```