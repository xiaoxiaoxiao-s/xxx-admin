<template>
  <div id="app">
    <!-- <el-header height="50px">
      <TopHeader></TopHeader>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <LeftMenu></LeftMenu>
      </el-aside>
      <el-main>
         <router-view></router-view>
      </el-main>
    </el-container> -->

    <router-view></router-view>
  </div>
</template>

<script>
// import TopHeader from './components/TopHeader.vue';
// import LeftMenu from './components/LeftMenu.vue';

export default {
  name: 'App',
  // components: { TopHeader, LeftMenu }
}
</script>

<style lang="less">
@import './element.less';

html,body {
  margin: 0;
  padding: 0;
}

input {
  background-color: rgba(0,0,0,0);
  border: none;
  padding: 0;
  margin: 0;
  &:focus {
    outline:none;
    border: none;
  }
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
}
</style>
