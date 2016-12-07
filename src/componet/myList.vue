
<!--列表渲染-->
<script>
    
    export default {
        el:"#example-1",
         //data:function(){}，下面是es6写法
        data() {
            return{
              items: [
                { message: 'Foo' },
                { message: 'Bar' }
              ]
            }
         }
    }
</script>
<template>
  
  <ul id="example-1">
    <li v-for="(index, item) in items">
      {{index}}-{{ item.message }}
    </li>
  </ul>

  <span v-for="n in 10">{{ n }} </span>

</template>
