// 接入虚拟dom
require('jsdom-global')()
// 全局引入，不用单个引用
global.expect = require('expect')