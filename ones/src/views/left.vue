<template>
  <div class="left">
      <router-link to="/index/manage" active-class="select">管理员管理</router-link>
  </div>
</template>

<script>
import API from '../common/js/API'
export default {

}
</script>

<style lang="stylus" scoped>
@import '../common/stylus/index.styl';

.left{
    width 150px;
    background #EEE685;
    a{
      display block;
      text-align center;
      line-height 40px;
      margin 10px auto;
    }
    .select{
      background $select-color;
      color $color4;
    }
}
 
</style>