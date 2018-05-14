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
## PortalTable 组件设置

参数 | 说明 | 类型 
| --------   | --------  | :----:  |
url | 请求的链接地址 | string 
pageSize | 设置每页最大数据 | number 
operation | 开启操作选项 ``edit``,``show``,``delete``,``create``| Array<T>
columns | 数据设置 | Array<object>

### PortalTable.operation
参数 | 说明 | 类型 
| --------   | --------  | :----:  |
edit | 开启修改 | string 
show | 开启显示 | string 
delete | 开启删除 | string
create | 开启创建 | string

### columns
参数 | 说明 | 类型 
| --------   | --------  | :----:  |
title | 标题 | string 
dataIndex | 数据源，用于表格显示，修改默认数据 | string
key | 唯一的key,且用于不显示表格，显示在弹窗上使用 | string
type | Input标识 | string
rule | 验证规则,参考antd Form 表单rule验证器 | object 
render | 渲染界面 | function(text)
showTitle | 显示在showModal上数据 | string
range |  ``type :'number' `` 对数据的限制范围  | Array
options | ``type :'select' ``下拉列表数据 | Array
disabled | 是否在修改数据时禁用 | bool
primary | 是否为主键.``default:id`` | bool

#### columns.type
参数 | 说明 | 类型 
| --------   | --------  | :----:  |
time | 时间控件 | string 
text | 输入框 | string
password | 密码框 | string
textArea | 多行文本 | string
number | 数字文本 | string
select | 下拉列表 | string

#### columns.options
参数 | 说明 | 类型 
| --------   | --------  | :----:  |
text | 显示的文字 | string 
value | ``value``值 | string

## PortalTable 服务端接口规范
使用PortalTable服务端请根据RestFul接口标准规范定制路由组件。

### Route
参数 | 说明 | 类型 
| --------   | --------  | :----:  |
get | 获取请求``route.get('/list')`` | Route 
put | 修改请求``route.put('/list/:id')`` | Route
post | 创建请求``route.post('/list')`` | Route
delete | 删除请求``route.delete('/list/:id')`` | Route

### Route.get

参数 | 说明 | 类型 
| --------   | --------  | :----:  |
page | 获取当前页面 | request.query 
pageSize | 获取页面显示最大条数 | request.query

### Route.post

参数 | 说明 | 类型 
| --------   | --------  | :----:  |
body | 获取需要创建的数据 | request.body 

### Route.put

参数 | 说明 | 类型 
| --------   | --------  | :----:  |
/:primary | 获取修改信息的主键 | request.params 
body | 需要修改的信息 | request.body

### Route.delete

参数 | 说明 | 类型 
| --------   | --------  | :----:  |
/:primary | 获取删除信息的主键 | request.params 
