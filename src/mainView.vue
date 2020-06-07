<template>
    <div class="main-view">
      <section class="user"></section>
      <ol>
        <li>开发工具</li>
      </ol>
      <router-view></router-view>
    </div>
</template>

<script>
export default {
  name: 'mainView'
}
</script>

<style scoped lang="scss">
  @import './style/vars.scss';
  .main-view{
    color: red;
    height: 100%; width: 100%;background-color: $color;
    >.user{
    }
  }
</style>
