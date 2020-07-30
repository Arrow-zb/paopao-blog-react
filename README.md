
<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [1. 为什么要做这个博客](#1-为什么要做这个博客)
- [2. 如何开始](#2-如何开始)
  - [2.1 架构](#21-架构)
  - [2.2 功能](#22-功能)
    - [2.2.1 登录注册](#221-登录注册)
    - [2.2.2 文章的发布展示评论和点赞](#222-文章的发布展示评论和点赞)
    - [2.2.3 个人动态板块](#223-个人动态板块)
    - [2.2.4 留言板块](#224-留言板块)
  - [2.3 数据库](#23-数据库)
  - [2.4 设计和原型](#24-设计和原型)
  - [2.5 前端](#25-前端)
  - [2.6 后端](#26-后端)
- [3. 开始](#3-开始)
  - [3.1 探索 —— 7.28  前端部分](#31-探索-728-前端部分)

<!-- /code_chunk_output -->
#### 1. 为什么要做这个博客
应该是在2年多以前，那时候我自己写了一个十分简单的个人博客，仅仅包含了个人的信息展示和一些简单的说明， 然后在一年多以前，我重新搭建了一次个人博客，彼时的博客内容就比较丰富了，包含了主页，动态页，留言页，文章页，个人展示页，管理页，功能也是比较完善的，包含登录注册，留言评论，文章发布，再到后台管理，当时开发的技术栈是： react + react-router + redux + redux-thunk + express + mongoodb, 部署采用的 pm2 + nginx 

时隔多时，以前的技术早已经是老古董了，而且很多功能没有完善，例如登录注册方面是否能够接入github 或者 wechat， 动态是否能跟着时间线，文章是否支持 markdown，评论是否支持点赞和删除， 后台管理是否有效和全面；同时代码是否规范，公共组件是否抽离复用，api 获取是否包装， 是否采用 ts， 数据库是否能够直接查询，等等！

因此，我决定再次重构个人博客，但并不能一步到位，我打算循序渐进，打算分以下几个步骤来进行
1. react + react-router + redux + redux-thunk + typescript + antd + koa2 + mysql
这里我前端技术栈仍然采用 react + react-router + redux + redux-thunk，但是如今的react 已经进行了大改，所以我将尽量不再class component组件，而尽量全面使用 函数组件 + hooks 来实现， 同样路由也是, 至于 redux 的异步处理，本阶段仍使用redux-thunk， 不仅如此，本阶段将全面引入 typescript静态检查以及 将 antd UI 作为组件库。前端的设计风格走简约风格。
这里的后端技术将调整为 koa2 + mysql， 这样的组合我接触过，但并未实践过， koa2 作为一个优秀的 express 进阶，仅仅 6 个 api 便可实现所有功能，mysql 想必比 mongoodb 更加普遍，因此，这对我来说也是一个学习的过程。
2. react+ umi + redux + redux-saga + typescript + antd + koa2 + mysql

#### 2. 如何开始
##### 2.1 架构
关于架构，其实我也不是非常的了解，只是觉得，如果要想有一个流程舒服的开发过程，架构是必须要有的，这里先留白，如果后面了解了，再来补上
##### 2.2 功能
###### 2.2.1 登录注册
这是最为基本的功能，用户可以简单的注册，只需要用户名和密码，然后输入相应的图形验证码就可以注册了（本来最开始打算用手机号码注册的，但是觉得没有必要，所以不做，但是这个功能我打算在某一个版本中实现，只是不使用）
###### 2.2.2 文章的发布展示评论和点赞
文章支持markdown展示，支持markdown评论，支持点赞，后台文章的发布
###### 2.2.3 个人动态板块
支持发布图片 文字 视频
###### 2.2.4 留言板块
支持留言
##### 2.3 数据库
用户表
文章表
动态表
留言表
##### 2.4 设计和原型

##### 2.5 前端

##### 2.6 后端
1
#### 3. 开始
##### 3.1 探索 —— 7.28  前端部分
因为公司是使用的 vue 技术栈，所以很久没有使用 react了，很多东西都遗忘了，本来以为自己能够短时间给熟悉起来，结果发现，有些难度，因为看了一个git的项目，好多东西都不懂了，因为react在这两年更新的确是快速。
所以我决定，首先还是采用相对基础的方式来搭建，在搭建的过程中慢慢间接性重构。
1. 搭建前端框架 

采用creat-react-app脚手架，同时使用ts
```bash
yarn create react-app paopao-blog-client --template typescript
```
先清理项目目录，然后测试
```bash
cd paopao-blog-client
yarn start
```
后期可以通过 `yarn eject` 来解锁相关的配置项，但是目前我并不打算使用，个人喜欢6090端口，因此在script中添加了端口号
```js
"scripts": {
  "start": "PORT=6090 react-scripts start"
}
```
项目以 antd 为 ui组件，引入 antd
```bash
yarn add antd
```
修改 src/App.css，在文件顶部引入 antd 的样式。
```css
@import '~antd/dist/antd.css';
```
之后我计划采用 less或者sass, 并且将所有的样式抽离到文件夹中，使得看起来更加干净
```bash
yarn add node-sass
```
安装 node-sass 就可以直接使用了, 当然别忘记文件后缀名更改 

前端框架方面基本就搭建得差不多了，接下来开始思考前端的编码流程了

2. 前端编码流程
    - 高复用 低耦合
    - 模块化 标准化
    - 单独布局 单独页面
    - 数据 请求 API 路由 最好分离 
    
以上是我理解的前端编码原则（我从工作中的工程项目总结的，或许小项目可不用那么细分） 

基于以上的几个原则，项目的目录结构如下：

```js
paopao-blog-client              // 前端项目目录结构
├── package.json                
├── public                      // html 入口 
│   ├── index.html
│   └── manifest.json
├── src                         // 项目源码
│   ├── App.tsx                 // 主组件
│   ├── assets                  // 静态资源
│   ├── components              // 公共组件
│   ├── index.tsx               // 入口文件
│   ├── layout                  // 布局组件
│   ├── react-app-env.d.ts      // ts申明
│   ├── router                  // 路由
│   ├── store                   // 状态 redux 数据
│   ├── styles                  // 样式
│   └── utils                   // 项目工具
│   │   ├── hooks               // hooks 钩子
│   │   └── server              // 请求
│   └── views                   // 页面
├── tsconfig.json               // ts配置
└── yarn.lock   

```
这里顺便说一下如何查看自己的目录结构， 我是 mac 电脑，因此首先安装 tree
```bash
homebrew install tree
```
然后查询 -L 是层级 -I 是忽略
```bash
tree -L 3  -I "node_modules" paopao-blog-client
```
3. 开始编写布局 - 响应式

要想编写布局，首先就得将页面进行分解，这里，我先依葫芦画瓢，就按照头部 Header 左侧侧边栏 leftSideBar 主体部分 mainContent 这三个大块
同时对这三个大块进行分解
- Header
left middle right
left: 题目和logo 
middle: 导航
right: 搜索 登录 注册 个人信息
- leftSideBar
个人展示
最新文章
个人标签
归档
- mainContent
首页： 左右布局： 希望是展示那种能吸引人的图片或视频 右边来一个对首页的简介和对未来的期盼 
文章页： 左右布局： 左边文章 右边分类
动态页：个人动态，模仿朋友圈
留言页：
归档页：左右布局： 左边归档 右边分类
管理页：左右布局 左边标签 右边主体

- 右下角有个动漫人物在播报

##### 3.2 搭建布局 —— 7.30  前端部分
1. 按照7.28对布局的构想，利用 antd 搭建了响应式了布局框架
2. 由于create-react-app 在eject 之前不能修改webpack的任何配置，但是这里设计到路径的使用，因此，我计划run eject，

