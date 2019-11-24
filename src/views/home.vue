<template>
  <div>
    首页
    <router-link to="/top_page"> top-page</router-link>
    <footbar></footbar>
  </div>
</template>

<script>
  import footbar from "../components/common/footerbar/footbar";
  export default {
    name: "home",
    components:{
      footbar
    }
  }
</script>

<style scoped lang="scss">

</style>
