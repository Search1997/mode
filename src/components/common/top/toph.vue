<template>
    <div class="topc_item">  
      <div class="hen" v-for="(v,i) in arrh" :key="i">
        <div class="ve"><img :src="v.imgurl" /></div>
         <div class="ne">{{v.title}}<br><br><span style="color:red">{{v.price}}</span>&nbsp;&nbsp;<img src="../../../assets/home/top-x6.png" alt=""><br>
           <span style="color:dimgrey">{{v.tity}}</span></div> 
       </div> 
    </div>
</template>
<script>
export default{
       name:"toph",
       components:{

       },
       methods:{
         
       },
    data(){
        return{
         arrh:[
            {
               title:"车厘子树苗矮化，樱桃树，车厘子，俄罗斯8号",price:"￥4.99/棵",tity:"果趣农业",imgurl:require("../../../assets/home/3-a.jpg")
            },
            {
               title:"车厘子树苗矮化，樱桃树，车厘子，俄罗斯8号",price:"￥4.99/棵",tity:"果趣农业",imgurl:require("../../../assets/home/3-a.jpg")
            },
             {
               title:"车厘子树苗矮化，樱桃树，车厘子，俄罗斯8号",price:"￥4.99/棵",tity:"果趣农业",imgurl:require("../../../assets/home/3-a.jpg")
            },
             {
               title:"车厘子树苗矮化，樱桃树，车厘子，俄罗斯8号",price:"￥4.99/棵",tity:"果趣农业",imgurl:require("../../../assets/home/3-a.jpg")
            },
            {
               title:"车厘子树苗矮化，樱桃树，车厘子，俄罗斯8号",price:"￥4.99/棵",tity:"果趣农业",imgurl:require("../../../assets/home/3-a.jpg")
            },
             {
               title:"车厘子树苗矮化，樱桃树，车厘子，俄罗斯8号",price:"￥4.99/棵",tity:"果趣农业",imgurl:require("../../../assets/home/3-a.jpg")
            },
             {
               title:"车厘子树苗矮化，樱桃树，车厘子，俄罗斯8号",price:"￥4.99/棵",tity:"果趣农业",imgurl:require("../../../assets/home/3-a.jpg")
            },
            {
               title:"车厘子树苗矮化，樱桃树，车厘子，俄罗斯8号",price:"￥4.99/棵",tity:"果趣农业",imgurl:require("../../../assets/home/3-a.jpg")
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
      .ne img{
      width: 0.2rem;
    }
</style>