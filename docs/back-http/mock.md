## 1、安装
``` js
npm i mockjs --save
var Mock = require(‘mockjs’)
```
## 2、模拟数据的两种方式
1.数据模板
2.数据占位符

详见 [https://github.com/nuysoft/Mock/wiki/Syntax-Specification](https://github.com/nuysoft/Mock/wiki/Syntax-Specification)

## 3、主要方法

3.1	Mock.mock()
完整用法：
``` js
Mock.mock(url, type, template|function)
```

 - url: 请求的地址
 - type: 请求的方法
 - template: 请求的数据模板
 - function: 用于生成请求数据的函数，传入一个参数function(options),options有三个属性（url,type,body），前面两个属性和上文的url和type一样，body中带有请求的一些参数


3.2	Mock.setup()

配置拦截 Ajax 请求时的行为
作用之一：设置异步
例子

``` js
Mock.setup({
	Timeout: 400
})
Mock.setup({
	Timeout: '200-600'
})
```
#### 4、具体例子，在vue中使用（我在项目中的用法）
1.创建mockdata文件夹，新建两个文件：data.js和index.js，名字可以自定义，一个作为数据源文件，一个处理请求简单逻辑
Random.* 的用法[详见第二点的第二小点](https://github.com/nuysoft/Mock/wiki/Mock.Random)

2.mockdata/data.js
``` js
/****************************************************************************************/
// mockdata/data.js文件

const Random = require('mockjs').Random
const total = 120 
/** 
 *  uid 序号
 *  title 标题
 *  author 作者
 *  moduleName 所属板块
 *  createTime 创建时间
 *  reading 阅读
 *  focus 关注
 *  good 点赞
 *  forum 评论
 *  status 状态
 */
const tiezi = Array(total).fill().map((item, idx) => {
    let reading = Random.integer(1, 99999) 
    return {
      uid: idx + 1,
      title: Random.ctitle(7, 13),
      author: Random.cname(),
      moduleName: Random.pick(
        ['早筛', '肺癌', '治疗', '提问', '肠癌']
      ),
      createTime: new Date(Random.datetime('yyyy/MM/dd HH:mm:ss')),
      reading: reading,
      focus: Random.integer(reading/50, reading/10),
      good: Random.integer(reading/10, reading/5),
      forum: Random.integer(reading/100, reading/50),
      status: Random.pick(
        ['待审核', '已审核', '未通过', '封贴']
      )
    }
  })

  let data = {
    tiezi: tiezi
  }
  export default data
```

3.mockdata/index.js文件

``` js
/****************************************************************************************/
// mockdata/index.js

var Mock = require('mockjs')

import _data from './data'

/**
 *  @request query
 *  type 请求数据类型（tiezi，tiwen），默认为tiezi
 *  page 请求页数，默认为1
 *  pageSize 每页数据条数，默认为10
 * 
 * @repsonse data
 *  type 请求数据类型（tiezi，tiwen），默认为tiezi
 *  page 请求页数，默认为1
 *  pageSize 每页数据条数，默认为10
 *  data 表格数据
 *  total 数据总数
 *  
 */

function mockData(_query) {
    let query = _query || {}
    let page = query.page || 1
    let pageSize = query.pageSize || 10
    let type = query.type || 'tiezi'
    let total = _data[type].length
    console.log(query)
    let data = _data[type].filter((item, index) => {
        return (index >= (page-1)*pageSize) && (index <= page*pageSize-1)
    })
    return {
        type: type,
        page: page,
        total: total,
        data: data,
        pageSize: pageSize
    }
}

// Mock.mock( url, post/get , 返回的数据)
/**
 * options: {
 *  url: 请求地址,
 *  type: 请求方式get/post
 *  body: 请求参数,注意类型是字符串
 *  }
 */
Mock.mock('/table/list', 'get', (options) => {
    console.log(options)
    // 这里的options.body类型为字符串，传入的时候要转化一下，将其转成json格式。这里我偷懒，就没写了。。。
    return mockData(options.body)
});

Mock.setup({
    timeout: '200-600'
})

```

4.main.js和components
```js
/****************************************************************************************/
// main.js文件

require('./mockdata')

/****************************************************************************************/
// components/*

this.$http({
    url: '/table/list',
    method: 'GET',
    data: {
      name: 'XYTang'
    }
}).then((resp) => {
    console.log(resp)
})

```
