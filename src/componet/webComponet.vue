<script>

    //es6
    export default {
        el:"#test",
         //data:function(){}，下面是es6写法
         data () {
            return {
                name:"这是组件的引用",
                age:"test"
            }
        }
    }
</script>
<template>
    <div id="test">
        <h1>姓名：{{name}}</h1>
        <h2>{{age}}</h2>
    </div>
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