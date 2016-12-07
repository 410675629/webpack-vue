

<script>
    //es6
    import myComponent from './webComponet';
    import  ComputeDd from './compute';
    

    // 定义一个混合对象
    const myMixin = {
      created: function () {
        this.hello()
      },
      methods: {
        hello: function () {
          console.log('hello from mixin!')
        }
      }
    }
    export default {
        el:"#app",
         //data:function(){}，下面是es6写法
         data () {
            return {
                name:"zhangzhang",
                age:"2q1",
                a:'1',
                messages:[]
            }
        },
        myOption:'hello!!!',
        mixins:[myMixin],
        
        created: function () {
            console.log('component hook called')
        },
        components:{
           'my-component':myComponent,
           "my-compute":ComputeDd
        },
        events: {
            'child-msg': function (msg) {
              // 事件回调内的 `this` 自动绑定到注册它的实例上
              this.messages.push(msg)
            }
        },
        methods:{

        }
    }
</script>
<template>
    <div>
        <h1>姓名：{{name}}</h1>
        <h2>{{age}}</h2>
    </div>
    <p>Messages: {{ messages | json }}</p>
    <input v-model="parentMsg">
    <my-component msg="hello!" :my-message="parentMsg" v-bind:my-message2="parentMsg2"></my-component>

    <my-compute></my-compute>
</template>
<style lang="sass">
    /*一定要加lang不然无法编译*/
    /*测试一下对sass的编译*/
    $qwe:#098;
    body{
        background-color: $qwe;
        h1{
            background-color: #eee;
            color: red;
            transform: translate(10%, 10%);/*测试自动添加前缀*/
        }
        h1:hover{
            height:100px;
        }
        h2{
            background-color: #999;
        }
    }
</style>