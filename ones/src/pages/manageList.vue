<template>
  <div>
    <el-button type="success" class="add" @click="$router.push('/index/manage/add?id='+0)">添加</el-button>
    <table>
      <tr>
        <th>序号</th>
        <th>账号</th>
        <th>属性</th>
        <th>时间</th>
        <th>操作</th>
      </tr>
      <tr v-for="(item,index) in d" :key="item.id">
        <td>{{index+1}}</td>
        <td>{{item.name}}</td>
        <td>{{item.des}}</td>
        <td>{{item.time}}</td>
        <td>
          <el-button type="info" @click="toAdd(item.id)">修改</el-button>
          <!-- <el-button type="info" @click="toAdd(item.id)">修改</el-button> -->
          <!-- <v-del :idx="item.id" @del="myDel"></v-del> -->
        </td>
      </tr>
      <tr v-if="d.length==0">
        <td colspan="5">暂无数据</td>
      </tr>
    </table>
  </div> 
</template>
<script>
import API from "../common/js/API";
export default {
  data(){
    return{
      d:[]
    }
  },
  mounted(){
    this.$axios({
      url:API.findManage,
      method:"post"
    }).then(res=>{
      this.d=res.data.data
      // console.log(res)
    })
  },
  methods: {
    toAdd(id) {
      this.$router.push("/index/manage/add?id="+id);
    },
  },
    myDel(e) {
      this.$axios({
        url: API.delManage,
        params: {
          id: e
        }
      }).then(res => {
        if (res.data.isok) {
          alert(res.data.info);
          this.init()
        } else {
          alert(res.data.info);
        }
      });
    }
};
</script>
<style lang="stylus" scoped>
@import '../common/stylus/index.styl';

.add{
  margin-left 145px;
}
</style>