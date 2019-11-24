<template>
  <div class="topdzong_a">
      <div><router-link to="/top_aspx/topzonghe"> <img src="../../../assets/home/top-x4.png" alt=""><br> 综合</router-link></div>
       <div><router-link to="/top_aspx/topfujin"><img src="../../../assets/home/top-x4.png" alt=""><br>附近货源</router-link></div> 
       <div><router-link to="/top_aspx/topzuixin"><img src="../../../assets/home/top-x4.png" alt=""><br>最新货源</router-link></div>
       <div><router-link to="/top_aspx/topzuigao"><img src="../../../assets/home/top-x4.png" alt=""><br>价格最高</router-link></div>
       <div><router-link to="/top_aspx/topzuidi"><img src="../../../assets/home/top-x4.png" alt=""><br>价格最低</router-link></div>                         
  </div>     
</template>
<script>
export default {
    name:"topdzong",
     methods:{
          
     },
       
  }
</script>
<style scoped>
    .topdzong_a{
      display: flex;
      width:100%;
       flex-direction: row;
       font-size: 0.14rem;
       padding: 0.02rem;
       text-align: center;  
       color: black; 
      
       border-radius: 0.1rem;   
    }
    .topdzong_a :hover{
      color: red;
    }
    .topdzong_a div{
      width: 20%;
    }
     .topdzong_a div img{
       width: 0.4rem;
       border-radius: 50%;  
     }
</style>