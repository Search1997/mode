<template>
    <div class="topp_con">  
      <div class="topp_cona" v-for="(v,i) in arrp" :key="i">
        <div class="toppve"><img :src="v.imgurl" /></div><br>
         <div class="toppne">{{v.title}}<br><br><span style="color:red">{{v.price}}</span><br>
           <span style="color:green">{{v.tity}}</span></div> 
       </div> 
    </div>
</template>
<script>
export default{
       name:"topp",
       components:{

       },
       methods:{
          
       },
    data(){
        return{
         arrp:[
            {
               title:"紫土豆，黑静态土豆，整车发货，价格优惠",price:"￥1.50/斤",tity:"山东好再来果蔬服务中心",imgurl:require("../../../assets/home/3-4.jpg")
            },
             {
               title:"山东产地直销 荷兰十五土豆 质量好 规格全 价格低",tity:"真果庄",price:"￥2.02/公斤",imgurl:require("../../../assets/home/3-4.jpg")
            },
         ]
        }
    }
}
</script>


<style scoped>
.topp_con{
    width: 100%;
    display: flex;
    height: 2.8rem;
    background-color: rgb(255, 228, 196);
     margin: 0.1rem auto;
     border-radius: 0.2rem;
}
.topp_cona{
    width: 49%;
    margin: 0.04rem;
    height: 2.6rem;
    background-color: white;  
}
.topp_cona img{
    width: 100%;
    height: 1.2rem;
    border: 0.1rem solid whitesmoke;
    border-radius: 0.14rem;
}
.toppve{
    width: 90%;
    height: 0.4rem;
   
}
.toppne{
    font-size: 0.12rem;
     margin-top: 1rem;
     margin-left:0.1rem;
}
</style>
