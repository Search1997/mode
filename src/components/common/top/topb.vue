<template>
    <div class="topb_item">
      <div v-for="(v,i) in arrb" :key="i">    
        <img :src="v.imgurl" />
        <br>
         <span class="topb_ens">{{v.title}}</span>
         <span style="color:block;font-size:0.10rem"> <br><br>
           <span style="color:red">{{v.price}}&nbsp;&nbsp;&nbsp;</span>
           {{v.cost}}<img src="../../../assets/home/top-x6.png" alt="">
         </span>
       </div> 
    </div>
</template>
<script>
export default{
       name:"topb",
       components:{
      
       },
       methods:{
          // toprounter(i){
          //   this.$router.push(this.$data.router[i])
          // }
       },
    data(){
        return{
          // router:[
          //   "/top_aspx/topzonghe"
          // ],
          arrb:[
            {
              title:"正宗烟薯25烟台产地直发包邮软甜香糯",price:"￥13.90",cost:"成交5.15万元",imgurl:require('../../../assets/home/c-5.png')
            },
             {
              title:"正宗烟薯25烟台产地直发包邮软甜香糯",price:"￥13.90",cost:"成交5.15万元",imgurl:require('../../../assets/home/c-5.png')
            },                           
             {
             title:"正宗烟薯25烟台产地直发包邮软甜香糯",price:"￥13.90",cost:"成交5.15万元",imgurl:require('../../../assets/home/c-5.png')
            },
             {
             title:"正宗烟薯25烟台产地直发包邮软甜香糯",price:"￥13.90",cost:"成交5.15万元",imgurl:require('../../../assets/home/c-5.png')
            },
             {
             title:"正宗烟薯25烟台产地直发包邮软甜香糯",price:"￥13.90",cost:"成交5.15万元",imgurl:require('../../../assets/home/c-5.png')
            },
             {
             title:"正宗烟薯25烟台产地直发包邮软甜香糯",price:"￥13.90",cost:"成交5.15万元",imgurl:require('../../../assets/home/c-5.png')
            },
             {
              title:"正宗烟薯25烟台产地直发包邮软甜香糯",price:"￥13.90",cost:"成交5.15万元",imgurl:require('../../../assets/home/c-5.png')
            },
             {
              title:"正宗烟薯25烟台产地直发包邮软甜香糯",price:"￥13.90",cost:"成交5.15万元",imgurl:require('../../../assets/home/c-5.png')
            },
             {
            title:"正宗烟薯25烟台产地直发包邮软甜香糯",price:"￥13.90",cost:"成交5.15万元",imgurl:require('../../../assets/home/c-5.png')
            },
             {
              title:"正宗烟薯25烟台产地直发包邮软甜香糯",price:"￥13.90",cost:"成交5.15万元",imgurl:require('../../../assets/home/c-5.png')
            }
          ]
        }   
      }
  }
</script>
<style scoped>
 .topb_item{
      width:100%;
      display:flex; 
      flex-direction: row;
      flex-wrap: wrap;
      margin-left:0.1rem;
    }
    .topb_item img{
      width: 1.63rem;
      height: 1.7rem;
      margin: 0.01rem;
    }
    .topb_item span{
      font-size: 0.14rem;
      color: #666666;
      display:-webkit-box;
      line-height: 0.20rem;
    }
    .topb_item span>img{
      width: 0.23rem;
      height: 0.23rem;
    }
    .topb_item topb_ens{
       overflow: hidden;
       -webkit-line-clamp:2;
       -webkit-box-orient: vertical;
    }
    .topb_item>div{
      font-size: 0.16rem;
      width:42%;
      padding-left: 0.1rem;
      padding-right: 0.1rem;
      background-color: white;
    }
</style>