

<script>
    
    export default {
        el:"#demo1",
         //data:function(){}，下面是es6写法
        data() {
            return{
                firstName: 'Foo',
                lastName: 'Bar',
                a: 1
            }
        },
        computed: {
            fullName: function () {
              return this.firstName + ' ' + this.lastName
            },
            b: function () {
              // `this` 指向 vm 实例
              return this.a + 1
            }
        }
    }
</script>
<template>
    <div>
       <div id="demo1">
       {{fullName}}
        a={{ a }}, b={{ b }}
       </div>
    </div>

</template>
