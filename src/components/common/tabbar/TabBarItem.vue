<template>
<div class = "tab-bar-item" @click="cpnClick">
  <slot v-if="!isActive" name="item-icon"></slot>
  <slot v-else name="item-active"></slot>
  <slot name="item-content"></slot>
</div>
</template>

<script>
export default {
  name: 'tab-bar-item',
  props:{
    path:String
  },
  data() {
    return {
    }
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path) !== -1;
  }
  },
  methods:{
    cpnClick(){
      this.isActive = 
      this.$router.push(this.path);
    }
  }
}
</script>

<style lang="css" scoped>
.tab-bar-item{
  flex:1;
  height:49px;
  text-align: center;
}
</style>
