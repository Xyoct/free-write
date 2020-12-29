---
sidebarDepth: 2
---
## VScode
### 设置代码块
1. 进入 snippet 设置文件，这里提供了两种方法：
* 按「Alt」键切换菜单栏，通过文件 > 首选项 > 用户代码片段，选择进入目的语言的代码段设置文件；
* 通过快捷键「Ctrl + Shift + P」打开命令窗口（all command window），输入「snippet」，通过候选栏中的选项进入目的语言的代码段设置文件。

2. 代码块模板
* es6function 模板
```
"es6function": {"prefix": "fnc","body": ["($1) => {\r\n\t$2\r\n}"],"description": "Log output to console"}
```
效果：
```javascript
() => {
      
}
```
* vue-temp 模板
```
"vue-temp": {"prefix": "temp","body": ["<template>\r\n\t<div>\r\n\t</div>\r\n</template>\r\n<style>\r\n</style>\r\n<script>\r\n\r\n\texport default {\r\n\r\n\t\tcomponents: {\r\n\t\t},\r\n\t\tprops: {\r\n\t\t},\r\n\t\tdata () {\r\n\t\t\treturn {\r\n\t\t\t}\r\n\t\t},\r\n\t\tcreated () {\r\n\t\t},\r\n\t\tmounted () {\r\n\t\t},\r\n\t\tmethods: {\r\n\t\t}\r\n\t}\r\n\r\n</script>"],"description": "Log output to console"}
```
效果：
```vue
<template>
    <div>
   </div>
</template>
<style>
</style>
<script>
   export default {
       components: {
       },
       props: {
       },
       data () {
           return {
           }
       },
       created () {
       },
       mounted () {
       },
       methods: {
       }
   }
</script>
```