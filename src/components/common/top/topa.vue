<template>
    <div class="top_item">
      <div @click="go(i)" v-for="(v,i) in arra" :key="i">    
        <img :src="v.imgurl" />
        <br>
         <span>{{v.title}}</span> 
       </div> 
    </div>
</template>
<script>
export default{
       name:"topa",
       components:{

       },
       methods:{
          go(i){
            this.$router.push('/top_aspx/topzonghe')
          }
       },
    data(){
        return{
        
          arra:[
            {
              title:"红薯",imgurl:require('../../../assets/home/b-1.png')
            },
             {
              title:"生姜",imgurl:require('../../../assets/home/b-2.png')
            },                           
             {
              title:"白菜",imgurl:require('../../../assets/home/b-3.png')
            },
             {
              title:"大葱",imgurl:require('../../../assets/home/b-4.png')
            },
             {
              title:"鲜辣椒",imgurl:require('../../../assets/home/b-5.png')
            },
             {
              title:"山药",imgurl:require('../../../assets/home/b-6.png')
            },
             {
              title:"西红柿",imgurl:require('../../../assets/home/c-1.png')
            },
             {
              title:"土豆",imgurl:require('../../../assets/home/c-2.png')
            },
             {
              title:"胡萝卜",imgurl:require('../../../assets/home/c-3.png')
            },
             {
              title:"白菜",imgurl:require('../../../assets/home/b-2.png')
            }
          ]
        }   
      }
  }
</script>
<style scoped>
 .top_item{
      width:100%;
      display:flex; 
      flex-direction: row;
      flex-wrap: wrap;
      padding-left:0.1rem;
    }
    .top_item img{
      width: 0.45rem;
      height: 0.45rem;
      padding: 0.03rem;
    }
    .top_item span{
      font-size: 0.12rem;
      color: #666666;
      text-align: center;
      padding-left: 0.1rem;
    }
    .top_item>div{
      font-size: 0.16rem;
      width:20%;
      background-color:whitesmoke;
    }
</style>