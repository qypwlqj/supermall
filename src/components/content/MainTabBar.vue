<template>
<div id="main-tab-bar">
    <router-view></router-view>
    <tab-bar>
      <tab-bar-item path="/home">
        <template v-slot:item-icon>
        <img src="~assets/img/tabbar/Homehomepagemenu.svg" alt = "首页">
        </template>
        <template v-slot:item-content>
        <div>首页</div>
        </template>
        <template v-slot:item-active>
        <img src="~assets/img/tabbar/Home.svg" alt = "首页">
        </template>
      </tab-bar-item>
      <tab-bar-item path="/class">
        <template v-slot:item-icon>
        <img src="~assets/img/tabbar/leimupinleifenleileibie.svg" alt = "分类">
        </template>
        <template v-slot:item-content>
        <div>分类</div>
        </template>
        <template v-slot:item-active>
        <img src="~assets/img/tabbar/leimupinleifenleileibie2.svg" alt = "首页">
        </template>
      </tab-bar-item>
      <tab-bar-item path="/shoppingCart">
        <template v-slot:item-icon>
        <img src="~assets/img/tabbar/gouwuchekong.svg" alt = "购物车">
        </template>
        <template v-slot:item-content>
        <div>购物车</div>
        </template>
        <template v-slot:item-active>
        <img src="~assets/img/tabbar/gouwuche.svg" alt = "购物车">
        </template>
      </tab-bar-item>
      <tab-bar-item path="/mine">
        <template v-slot:item-icon>
        <img src="~assets/img/tabbar/wode.svg" alt = "我的">
        </template>
        <template v-slot:item-active>
        <img src="~assets/img/tabbar/wode2.svg" alt = "我的">
        </template>
        <template v-slot:item-content>
        <div>我的</div>
        </template>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
  import TabBar from '../common/tabbar/tabbar.vue'
  import TabBarItem from '../common/tabbar/TabBarItem.vue'
export default {
  name: 'mainTabBar',
  components: { TabBar,TabBarItem }
}
</script>

<style lang="css" scoped>
.tab-bar-item img{
  width:24px;
  height:24px;
}
</style>
