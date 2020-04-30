# vue-manage-system

<a href="https://github.com/vuejs/vue">
    <img src="https://img.shields.io/badge/vue-2.6.10-brightgreen.svg" alt="vue">
  </a>
  <a href="https://github.com/ElemeFE/element">
    <img src="https://img.shields.io/badge/element--ui-2.8.2-brightgreen.svg" alt="element-ui">
  </a>
  <a href="https://github.com/lin-xin/vue-manage-system/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/mashape/apistatus.svg" alt="license">
  </a>
  <a href="https://github.com/lin-xin/vue-manage-system/releases">
    <img src="https://img.shields.io/github/release/lin-xin/vue-manage-system.svg" alt="GitHub release">
  </a>
  <a href="https://lin-xin.gitee.io/example/work/#/donate">
    <img src="https://img.shields.io/badge/%24-donate-ff69b4.svg" alt="donate">
  </a>

基于 Vue + Element UI 的后台管理系统解决方案。[线上地址](https://lin-xin.gitee.io/example/work/)

# 使用技术解析：
* 使用vue-cli脚手架就能很快地运行一个带有 .vue 组件、ES2015、webpack 和热重载 (hot-reloading) 的 Vue 项目
* 前后端分离后，所有有关于页面的问题，全部由前端负责，比如页面跳转等（如权限控制，后端只提供接口，接受数据，权限是否足够）
* 可以将构建之后的dist文件夹放到web服务器上运行，在单页面的情况下，可以使用路由来跳转界面。
* 在进行开发时，路由用来设定访问路径，并将路径与相应的组件映射起来，用户在访问相应的路径时，路由根据映射关系实现不同组件间的切换，整个过程都是在同一个页面中实现，不涉及页面间的跳转，也就是我们常说的单页应用。
* 需要安装vue-cli和webpack和node.js，使用vue create [项目名] 命令来创建本项目，这时程序入口是main.js，可以通过npm run serve来开启服务器
。在前后端分离式开发时，可以单独写前端，写完后用vue-cli的服务器来启动测试页面的逻辑。成功之后，再在代码中写入与服务器接口交互的代码。同时本
项目在vue-cli创建项目时，默认的使用npm，其中有package.json（关于发布版本和程序入口和程序依赖的json）和package-lock.json（npm5的产物）和postcss.config.js
。由于默认使用了webpack所以可以在js中写入import来导入模块。可以使用npx webpack来构建最小化项目，但是在package.json中配置了脚本，可以使用
npm run build来构建了。
> React + Ant Design 的版本正在开发中，仓库地址：[react-manage-system](https://github.com/lin-xin/react-manage-system)

* 前端路由的优势
        1. 页面刷新速度快。由于后端路由在请求一个新路径时，会重新向服务器发送请求，之后再根据服务器的相应结果重新渲染页面，这个过程会受到网络延迟的影响，而前端路由省略了整个请求过程，只是完成部分组件间的切换，因此页面的刷新速度会相对较快，用户体验相对较好。
        2. 复用性强。使用前端路由，代码中的layout、css、js都可以共用，以此来减少重复加载，提供程序性能。
        3. 页面状态可记录。不使用前端路由，仅通过ajax进行页面局部切换的单页应用，由于url始终保持不变，因此页面的状态是无法记录的，而前端路由很好的解决了这个问题。例如使用了前端路由的url：http://music.taihe.com/fe/a这个链接，再打开后会直接触发/a的事件。
* 前端路由的实现：[前端路由实现](https://www.jianshu.com/p/5231e7e125da)

## 项目截图

### 登录

![Image text](https://github.com/lin-xin/manage-system/raw/master/screenshots/wms3.png)

### 默认皮肤

![Image text](https://github.com/lin-xin/manage-system/raw/master/screenshots/wms1.png)

### 浅绿色皮肤

![Image text](https://github.com/lin-xin/manage-system/raw/master/screenshots/wms2.png)


## 特别鸣谢

- [实验楼](https://www.shiyanlou.com?source=vue-manage-system)

## 前言

该方案作为一套多功能的后台框架模板，适用于绝大部分的后台管理系统（Web Management System）开发。基于 vue.js，使用 vue-cli3 脚手架，引用 Element UI 组件库，方便开发快速简洁好看的组件。分离颜色样式，支持手动切换主题色，而且很方便使用自定义主题色。

## 功能

-   [x] Element UI
-   [x] 登录/注销
-   [x] Dashboard
-   [x] 表格
-   [x] Tab 选项卡
-   [x] 表单
-   [x] 图表 :bar_chart:
-   [x] 富文本编辑器
-   [x] markdown 编辑器
-   [x] 图片拖拽/裁剪上传
-   [x] 支持切换主题色 :sparkles:
-   [x] 列表拖拽排序
-   [x] 权限测试
-   [x] 404 / 403
-   [x] 三级菜单
-   [x] 自定义图标
-   [x] 可拖拽弹窗
-   [x] 国际化

## 安装步骤

```
git clone https://github.com/lin-xin/vue-manage-system.git      // 把模板下载到本地
cd vue-manage-system    // 进入模板目录
npm install         // 安装项目依赖，等待安装完成之后，安装失败可用 cnpm 或 yarn

// 开启服务器，浏览器访问 http://localhost:8080
npm run serve

// 执行构建命令，生成的dist文件夹放在服务器下即可访问
npm run build
```

## 组件使用说明与演示

### vue-schart

vue.js 封装 sChart.js 的图表组件。访问地址：[vue-schart](https://github.com/linxin/vue-schart)

<p><a href="https://www.npmjs.com/package/vue-schart"><img src="https://img.shields.io/npm/dm/vue-schart.svg" alt="Downloads"></a></p>

```html
<template>
    <div>
        <schart class="wrapper" canvasId="myCanvas" :options="options"></schart>
    </div>
</template>

<script>
    import Schart from 'vue-schart'; // 导入Schart组件
    export default {
        data() {
            return {
                options: {
                    type: 'bar',
                    title: {
                        text: '最近一周各品类销售图'
                    },
                    labels: ['周一', '周二', '周三', '周四', '周五'],
                    datasets: [
                        {
                            label: '家电',
                            data: [234, 278, 270, 190, 230]
                        },
                        {
                            label: '百货',
                            data: [164, 178, 190, 135, 160]
                        },
                        {
                            label: '食品',
                            data: [144, 198, 150, 235, 120]
                        }
                    ]
                }
            };
        },
        components: {
            Schart
        }
    };
</script>
<style>
    .wrapper {
        width: 7rem;
        height: 5rem;
    }
</style>
```

## 其他注意事项

### 一、如果我不想用到上面的某些组件呢，那我怎么在模板中删除掉不影响到其他功能呢？

举个栗子，我不想用 Vue-Quill-Editor 这个组件，那我需要分四步走。

第一步：删除该组件的路由，在目录 src/router/index.js 中，找到引入改组件的路由，删除下面这段代码。

```JavaScript
{
    // 富文本编辑器组件
    path: '/editor',
    component: resolve => require(['../components/page/VueEditor.vue'], resolve)
},
```

第二步：删除引入该组件的文件。在目录 src/components/page/ 删除 VueEditor.vue 文件。

第三步：删除该页面的入口。在目录 src/components/common/Sidebar.vue 中，找到该入口，删除下面这段代码。

```js
{
	index: 'editor',
	title: '富文本编辑器'
},
```

第四步：卸载该组件。执行以下命令：
npm un vue-quill-editor -S

完成。

### 二、如何切换主题色呢？

第一步：打开 src/main.js 文件，找到引入 element 样式的地方，换成浅绿色主题。

```javascript
import 'element-ui/lib/theme-default/index.css'; // 默认主题
// import './assets/css/theme-green/index.css';       // 浅绿色主题
```

第二步：打开 src/App.vue 文件，找到 style 标签引入样式的地方，切换成浅绿色主题。

```javascript
@import "./assets/css/main.css";
@import "./assets/css/color-dark.css";     /*深色主题*/
/*@import "./assets/css/theme-green/color-green.css";   !*浅绿色主题*!*/
```

第三步：打开 src/components/common/Sidebar.vue 文件，找到 el-menu 标签，把 background-color/text-color/active-text-color 属性去掉即可。

## License

[MIT](https://github.com/lin-xin/vue-manage-system/blob/master/LICENSE)
