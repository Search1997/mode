<template>
  
    <div>
         <div class="toph_a">

        </div>
        <Toph></Toph>
       
    </div>
</template>
<script>
import Toph from "../../components/common/top/toph";

export default{
    nmae:"topZuixin",
    components:{       
         Toph  
       }
}
</script>
<style scoped>
 .toph_a{
        width: 100%;
        height: 1.2rem;
        background-image: url("../../assets/home/top-x2.png");
        background-size: 100% ;
        border-radius: 0.1rem; 
 }
</style>