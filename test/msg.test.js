// 导入 Vue.js 和组件，进行测试
const Vue = require('vue')
const expect = require('expect')
const MSG = require('./../src/components/msg')

describe('MSG', () => {
  // 检查原始组件选项
  it('has a created hook', () => {
    expect(typeof MSG.created).toBe('function')
  })

  // 评估原始组件选项中的函数的结果
  it('sets the correct default data', () => {
    expect(typeof MSG.data).toBe('function')
    const defaultData = MSG.data()
    expect(defaultData.message).toBe('hello')
  })

  // 检查 mount 中的组件实例
  it('correctly sets the message when created', () => {
    const vm = new Vue(MSG).$mount()
    expect(vm.message).toBe('bye')
  })

  // 创建一个实例并检查渲染输出
  it('renders the correct message', () => {
    const name = 'haha'
    const Constructor = Vue.extend(MSG)
    const vm = new Constructor({
      propsData: {
        name
      }
    }).$mount()
    expect(vm.name).toBe(name)
  })
})