// 导入 Vue.js 和组件，进行测试
import Vue from 'vue'
import MyComponent from './../src/components/msg.vue'

// 这里是一些 Jasmine 2.0 的测试，你也可以使用你喜欢的任何断言库或测试工具。

describe('MyComponent', () => {
  // 检查原始组件选项
  it('has a created hook', () => {
    expect(typeof MyComponent.created).toBe('function')
  })

  // 评估原始组件选项中的函数的结果
  it('sets the correct default data', () => {
    expect(typeof MyComponent.data).toBe('function')
    const defaultData = MyComponent.data()
    expect(defaultData.message).toBe('hello!')
  })

  // 检查 mount 中的组件实例
  it('correctly sets the message when created', () => {
    const vm = new Vue(MyComponent).$mount()
    expect(vm.message).toBe('bye!')
  })

  // 创建一个实例并检查渲染输出
  it('renders the correct message', () => {
    const Constructor = Vue.extend(MyComponent)
    const vm = new Constructor().$mount()
    expect(vm.$el.textContent).toBe('bye!')
  })

  // 在状态更新后检查生成的 HTML
  it('updates the rendered message when vm.message updates', done => {
    const vm = new Vue(MyComponent).$mount()
    vm.message = 'foo'

    // 在状态改变后和断言 DOM 更新前等待一刻
    Vue.nextTick(() => {
      expect(vm.$el.textContent).toBe('foo')
      done()
    })
  })
})