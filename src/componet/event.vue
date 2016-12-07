
<script>
    
    export default {
        el:"#demoEvent",
         //data:function(){}，下面是es6写法
        data() {
            return{
               ok:1,
               isA: true,
              isB: false
            }
        },
        methods: {
        say: function (msg, event) {
          // 现在我们可以访问原生事件对象
          event.preventDefault()
        },
        submit:function(){
          alert('submit')
        }
      }
    }
</script>
<template>
    <div id="demoEvent">
      <button v-on:click="say('hello!', $event)">Submit</button>

      <input v-on:keyup.13="submit">
      <input v-on:keyup.enter="submit">
      <div class="static" v-bind:class="{ 'class-a': isA, 'class-b': isB }"></div>
    </div>

</template>
