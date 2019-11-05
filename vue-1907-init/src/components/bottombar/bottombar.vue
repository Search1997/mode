<template>
  <div class="bottombar">
     <router-link to="/home"> 首页 </router-link>
     <router-link to="/discounts"> 商城 </router-link>
     <router-link to="/my"> 优惠 </router-link>
     <router-link to="/store"> 个人中心 </router-link>
  </div>
</template>
<script>
  export default {
  
  
   
  }
</script>
<style scoped>
div{
    color:blue
}
a{
    font-size: 0.16rem;
    flex: 1;
    text-align: center;
}
.bottombar{
    position:fixed;
    bottom: 0px;
    display: flex;
    flex-direction:row;
    width: 100%; 
}
</style>
