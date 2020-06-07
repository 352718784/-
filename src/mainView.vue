<template>
    <div class="main-view">
      <section class="user">
         <i class="ri-user-3-fill" @click="$router.push({path: '/mainView/mainPage'})"></i>
      </section>
      <el-menu mode="horizontal" router :default-active="defaultActive">
        <el-menu-item  v-for="item in menuList" :key="item.index" :index="item.index">{{item.name}}</el-menu-item>
      </el-menu>
      <article class="sub-view">
        <transition name="fade" >
          <router-view class="fade-item"></router-view>
        </transition>
      </article>
    </div>
</template>

<script>
export default {
  name: 'mainView',
  data () {
    return {
      menuList: [
        {index: '/mainView/mainPage', name: '主页'},
        {index: '/mainView/devTools', name: '开发工具', path: '/mainView/devTools'}
      ],
      defaultActive: ''
    }
  },
  mounted () {
    this.defaultActive = this.$route.path
  },
  methods: {
  }
}
</script>

<style scoped lang="scss">
  @import './style/vars.scss';
  .main-view{
    height: 100%; width: 100%;
    display: flex;flex-direction: column;
    >.user{
    }
    .sub-view {
      flex: 1;position: relative;
    }
    .fade-item{
      transition: all .5s;
    }
    .fade-enter-active, .fade-leave-active {
      transform: translateX(0);
    }
    .fade-enter, .fade-leave-to {
      opacity: 0;transform: translateX(-5rem);
    }
    .fade-leave-active {
      position: absolute;
    }
  }
</style>
