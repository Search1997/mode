<template>
    <div class="topc_item">  
      <div class="hen" v-for="(v,i) in arrg" :key="i">
        <div class="ve"><img :src="v.imgurl" /></div>
         <div class="ne">{{v.title}}<br><br><br><span style="color:red">{{v.price}}</span><br>
           <span style="color:dimgrey">{{v.tity}}</span></div> 
       </div> 
    </div>
</template>
<script>
export default{
       name:"topg",
       components:{

       },
       methods:{
        
       },
    data(){
        return{
         arrg:[
            {
               title:"山地六年生大青叶美枣树",price:"￥1800/棵",tity:"瓦房店市佳美花卉园艺",imgurl:require("../../../assets/home/3-4.jpg")
            },
              {
               title:"山地六年生大青叶美枣树",price:"￥1800/棵",tity:"瓦房店市佳美花卉园艺",imgurl:require("../../../assets/home/3-4.jpg")
            },
             {
               title:"山地六年生大青叶美枣树",price:"￥1800/棵",tity:"瓦房店市佳美花卉园艺",imgurl:require("../../../assets/home/3-4.jpg")
            },
             {
               title:"山地六年生大青叶美枣树",price:"￥1800/棵",tity:"瓦房店市佳美花卉园艺",imgurl:require("../../../assets/home/3-4.jpg")
            },
             {
               title:"山地六年生大青叶美枣树",price:"￥1800/棵",tity:"瓦房店市佳美花卉园艺",imgurl:require("../../../assets/home/3-4.jpg")
            },
             {
               title:"山地六年生大青叶美枣树",price:"￥1800/棵",tity:"瓦房店市佳美花卉园艺",imgurl:require("../../../assets/home/3-4.jpg")
            },
              {
               title:"山地六年生大青叶美枣树",price:"￥1800/棵",tity:"瓦房店市佳美花卉园艺",imgurl:require("../../../assets/home/3-4.jpg")
            },
             {
               title:"山地六年生大青叶美枣树",price:"￥1800/棵",tity:"瓦房店市佳美花卉园艺",imgurl:require("../../../assets/home/3-4.jpg")
            },

          ]
        }   
      }
  }
</script>
<style scoped>
 .topc_item{
      width:100%; 
      padding-left:0.1rem; 
    }
    .hen{
      width:100%;
      display:flex; 
      flex-wrap: wrap;
      height: 1.1rem;
      width: 100%;
      border: 0.01rem solid whitesmoke;
      margin-bottom: 0.3rem;
    }
     .ve{
      width: 1.2rem;
      height: 1.1rem;  
    }
    .ve img{ 
      width: 100%;
      height: 1.1rem;
        border-radius: 0.12rem;
    }
    .ne{
      font-size: 0.14rem;
      width:60%;
      height:1.1rem;
      padding-left: 0.2rem; 
    }
</style>