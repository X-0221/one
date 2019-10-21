<template>
  <div class="right">
    <h1 class="text-center text-primary">{{$route.name}}</h1>
    <router-view></router-view>
  </div>
</template>

<script>
import API from '../common/js/API'
export default {

}
</script>

<style lang="stylus" scoped>
@import '../common/stylus/index.styl';
.right{
    flex 1;
    background #FFFFF0;
}

</style>