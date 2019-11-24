<template>
  
    <div>
         <Topp></Topp>
         <br>
        <Topi></Topi>
       
    </div>
</template>
<script>
import Topi from "../../components/common/top/topi";
import Topp from "../../components/common/top/topp";
export default{
    name:"topZonghe",
    components:{       
         Topi,
         Topp 
       }
}
</script>
<style scoped>
 
</style>