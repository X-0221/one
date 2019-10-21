<template>
  <div class="login mask">
      <div class="box">
          <h3 class="text-center text-primary">登录</h3>
          <select v-model="user.type">
              <option value="" disabled>请选择角色</option>
              <option value="0">超级管理员</option>
              <option value="1">普通管理员</option>
          </select>
          <input type="text" placeholder="请输入账号" v-model="user.name">
          <input type="password" placeholder="请输入密码" v-model="user.pass">
          <div class="text-center">
            <el-button type="success" plain class="text-primary" @click="login">点击登录</el-button>
          </div>
      </div>
  </div>
</template>

<script>
import API from '../common/js/API'
export default {
  data(){
    return{
      user:{
        name:"",
        pass:"",
        type:""
      }
    }
  },
  methods:{
    login(){
      // console.log(this.user)
      this.$axios({
        url:API.login,
        method:"post",
        data:this.user
      }).then(res=>{
        if(res.data.isok){
          this.$router.push("/index")
        }else{
          alert(res.data.info)
        }
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../common/stylus/index.styl';
.el-button{
    color: #fff;
    background-color: #c0ff3e;
    border-color: #c0ff3e;
}
</style>