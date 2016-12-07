
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
    <li v-for="item in items">
      {{ item.message }}
    </li>
  </ul>

</template>
