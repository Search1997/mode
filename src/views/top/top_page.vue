<template>
    <div class="top_page_a">
        <div class="top_page_ab"></div>
     <Topa></Topa>
     <br>
      <Topb></Topb>
    </div>
</template>
<script>
import Topa from "../../components/common/top/topa";
import Topb from "../../components/common/top/topb";
export default{
    nmae:"top_page",
    components:{
         Topa,
         Topb
       }
}
</script>
<style scoped>
 .top_page_a{
     background-color:whitesmoke;
 }
 .top_page_ab{
     width: 100%;
     height: 1.7rem;
     text-align: center;
     background-image: url(../../assets/home/top-x1.jpg);
    border-radius: 0.1rem;
 }
</style>