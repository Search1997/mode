<template>
    <div class="topc_item">  
      <div class="hen" v-for="(v,i) in arrd" :key="i">
        <div class="ve"><img :src="v.imgurl" /></div>
         <div class="ne">{{v.title}}<br><br><br><span style="color:red">{{v.price}}</span><br>
           <span style="color:dimgrey">{{v.tity}}</span></div> 
       </div> 
    </div>
</template>
<script>
export default{
       name:"topd",
       components:{

       },
       methods:{
        
       },
    data(){
        return{
         arrd:[
            {
               title:"紫土豆，黑静态土豆，整车发货，价格优惠",price:"￥1.50/斤",tity:"山东好再来果蔬服务中心",imgurl:require("../../../assets/home/2-c.jpg")
            },
             {
               title:"山东产地直销 荷兰十五土豆 质量好 规格全 价格低",tity:"真果庄",price:"￥2.02/公斤",imgurl:require("../../../assets/home/2-c.jpg")
            },
             {
              title:"云南高山红皮土豆",price:"￥1.75/公斤",tity:"徐林生鲜蔬果店",imgurl:require("../../../assets/home/2-c.jpg")
            },
             {
              title:"黑土豆 5斤装包邮 可做种用",price:"￥0.75/吨",tity:"庆学蔬菜土豆供应基地",imgurl:require("../../../assets/home/2-c.jpg")
            },
             {
              title:"土豆批发 产地直销 品种规格全 货源充足",tity:"廊坊市微网智慧农业有限公司",price:"￥0.5元/斤",imgurl:require("../../../assets/home/2-c.jpg")
            },
             {
              title:"云南高山红皮土豆",price:"￥1.75/公斤",tity:"诚信农副产品",imgurl:require("../../../assets/home/2-c.jpg")
            },
             {
              title:"黑土豆 5斤装包邮 可做种用",price:"￥0.75/吨",tity:"契税县万农果蔬购销中心",imgurl:require("../../../assets/home/2-c.jpg")
            },
             {
              title:"土豆批发 产地直销 品种规格全 货源充足",tity:"廊坊市微网智慧农业有限公司",price:"￥0.5元/斤",imgurl:require("../../../assets/home/2-c.jpg")
            }  

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
        border-radius: 0.11rem;
    }
    .ne{
      font-size: 0.14rem;
      width:60%;
      height:1.1rem;
      padding-left: 0.2rem; 
    }
</style>