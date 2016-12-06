/*require('./style/index.css');

document.getElementById('app').innerHTML="这是我第一个打包成功的程序.";

//添加
require("./first.js");
*/
// import Vue form ("vue") //如果你安装了babel-loader的话，可以直接使用ES6的语法
var Vue =require("vue");

new Vue({
    el: "body",
    data: {
        message: "hello vue.js"
    }
});