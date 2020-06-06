<template>
    <div @click="back">
      demo1
    </div>
</template>

<script>
import router from '@/router'
export default {
  name: 'demo1',
  props: {
    arg: ''
  },
  methods: {
    back: function () {
      alert(this.arg)
      router.go(-1)
    }
  }
}
</script>

<style scoped>

</style>
