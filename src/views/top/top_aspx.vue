<template>
    <div class="top_aspx_a">
         <br>
       
    <Toptou></Toptou> 
    <div id="top_aspx_ti">
    <Topdzong></Topdzong>
   <router-view></router-view>
    </div>
    </div>
</template>
<script>
import Topdzong from "../../components/common/top/topdzong";
import Toptou from"../../components/common/top/toptou";
export default{
    name:"top_aspx",
    components:{
          Topdzong,
          Toptou   
       },
        data:function(){
           return{
               cource:"综合",
       
		}                     
     }       
}

</script>
<style scoped>
.top_aspx_a{
     position: relative;
 }
 #top_aspx_ti{
     position: relative;
     z-index: 3
 }
</style>