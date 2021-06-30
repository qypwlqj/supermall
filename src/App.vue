<template>
  <div id = "app">
    <main-tab-bar />
  </div>

</template>
<script>
import MainTabBar from 'components/content/MainTabBar'
export default ({
components:{
MainTabBar
}
})
</script>

<style>
@import 'assets/css/base.css'
.tab-bar-item img{
  width:24px;
  height:24px;
}
</style>
