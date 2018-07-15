<template>
  <div id="app">
    <router-view/>
    <nav class="navbar navbar-default navbar-fixed-bottom">
      <div class="" style="width:100%;height:20px;">
        <table style="height:100%;width:100%;text-align:center;font-weight:bold;font-family: 微软雅黑,宋体;">
          <tr>
            <td>
              <router-link to="/">
                <button class="btn btn-default" style="width:100%;height:100%;border:none">
                  <span class="glyphicon glyphicon-home"></span>
                  <p>首页</p>
                </button>
              </router-link>
            </td>
            <td>
              <router-link to="/Two">
                <button class="btn btn-default" style="width:100%;height:100%;border:none">
                  <span class="glyphicon glyphicon-th"></span>
                  <p>分类</p>
                </button>
              </router-link>
            </td>
            <td>
              <router-link to="/First">
              <button class="btn btn-default" style="width:100%;height:100%;border:none">
                <span class="glyphicon glyphicon-user"></span>
                <p>我的</p>
              </button>
              </router-link>
            </td>
          </tr>
        </table>
      </div>
  </nav>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
