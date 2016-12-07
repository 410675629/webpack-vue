

<script>
    
    export default {
        el:"#demoIf",
         //data:function(){}，下面是es6写法
        data() {
            return{
               ok:1
            }
        }
    }
</script>
<template>
    <div id="demoIf">
       {{#if ok}}
        <h1>Yes</h1>
       {{/if}}

      
      <h1 v-if="ok">Yes</h1>
      <h1 v-show="ok">Hello!</h1>
    
      <div v-if="Math.random() > 0.5">
        Sorry
      </div>
      <div v-else>
        Not sorry
      </div>

    </div>

</template>
