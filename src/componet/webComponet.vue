<script>

    //es6
    export default {
        el:"#test",
         //data:function(){}，下面是es6写法
        props: ['msg','myMessage'],
        data () {
            return {
                name:"这是组件的引用",
                age:"test"
            }
        },
        methods:{
            notify: function () {
              if (this.msg.trim()) {
                this.$dispatch('child-msg', this.msg)
                this.msg = ''
              }
            }
        }

    }
</script>
<template>
    <div id="test">
        <h1>姓名：{{name}}-{{msg}}--{{myMessage}}</h1>
        <h2>{{age}}</h2>

        <input v-model="msg">
        <button v-on:click="notify">Dispatch Event</button>
        <button v-on:child-msg="handleIt">Dispatch new Event</button>
    </div>
    
    <!-- 指令-->
    <div v-my-directive:hello.a.b="msg" ></div>
    <div v-my-directive="{ color: 'white', text: 'hello!' }" ></div>

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