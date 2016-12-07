//es6语法：
import Vue from "../node_modules/vue/dist/vue.min.js";//其实不用写完，会自动查找。可以直接写import Vue from "vue";
//外部引入别的库都可以用这样的方式，比如jquery等。。
//引入我们编写的测试用vue文件。
import app from './componet/app';
Vue.config.debug = true;//开启错误提示


//增加指令
Vue.directive('my-directive', {
  bind: function () {
  	console.log('demo bound!')
    // 准备工作
    // 例如，添加事件处理器或只需要运行一次的高耗任务
  },
  update: function (value,oldValue) {
    // 值更新时的工作
    // 也会以初始值为参数调用一次
    this.el.innerHTML =
      'name - '       + this.name + '<br>' +
      'expression - ' + this.expression + '<br>' +
      'argument - '   + this.arg + '<br>' +
      'modifiers - '  + JSON.stringify(this.modifiers) + '<br>' +
      'value - '      + value+ '<br>' +
      'oldValue-'     + oldValue
  },
  unbind: function () {
    // 清理工作
    // 例如，删除 bind() 添加的事件监听器
  }
})


new Vue(app);