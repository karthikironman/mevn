<template>
    <div>
        <img class="pushright" src="../../src/assets/images/loginleft.jpg" />
        <div class="leftcard">
        <logincard />
        </div>
    </div>
</template>
<script>
import logincard from "../components/logincard"
export default {
   components:{
       logincard
   } 
}
</script>
<style scoped>
.pushright{
    width:60vw;
    height:100vh;
    position:fixed;
    right:0;
    /* transition:all 2s; */
}
.leftcard{
width:40vw;
text-align:center;
padding:3rem;
}
@media only screen and (max-width: 700px) {
 .pushright{
   display:none;
}
.leftcard{
width:100vw;
padding:1rem;
}
}

</style>