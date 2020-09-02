<template>
  <div id="TopHeader">
    <div class="left">
      <i :class="`left-icon ${isCollapse ? 'el-icon-s-grid' : 'el-icon-menu'}`" @click="setCollapse"></i>
    </div>

    <div class="center">
    
    </div>

    <div class="right">
      <img class="avatar" :src="headerSrc"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopHeader',
  data() {
    return {
      headerSrc: 'https://xxx-1256319553.cos.ap-guangzhou.myqcloud.com/images/default.png', // 默认图
      isCollapse: false,
    }
  },
  methods: {
    setCollapse() {
      this.isCollapse = !this.isCollapse;
    }
  }
}
</script>

<style lang="less" scoped>
#TopHeader {
  background-color: #8896b3;
  width: 98vw;
  padding: 0 1vw;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .left-icon {
    font-size: 27px;
  }

  .avatar {
    width: 30px;
    height: 30px;
    border-radius: 30px;
  }
}
</style>