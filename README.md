# About
Update project wq-antd-cms.
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Out of the box it comes with support for:
- Webpack 1.0->3.8.1
- ES6 ES7 via Babel-Loader
- Different supported style languages (less,css,css module)
- Style transformations via PostCSS
- Automatic code linting via esLint
- Ability to unit test components via Karma and Mocha/Chai
- Support fetch
- React 15.0->16.2
- React Router 3.0->4.1
- Antd 2.X->3.X
- Support yarn
- Support Redux 2.X-> 3.7


# Example
- Add Echart React Support
- Add login example
- Add Redux example
- Add PortalTable example(Create auto table CRUD)

# Document
## PortalTable

参数 | 说明 | 返回 
- | :-: | -: 
url | 请求的链接地址 | string 
pageSize | 设置每页最大数据 | number 
operation | 开启操作选项 ``edit``,``show``,``delete``,``create``| Array<T>
columns | 数据设置 | Array<object>

### columns
参数 | 说明 | 返回 
- | :-: | -: 
title | 标题 | string 
dataIndex | 数据源，用于表格显示，修改默认数据 | string
key | 唯一的key,且用与不显示表格显示在弹窗上使用 | string
columns | 数据设置 | Array<object>