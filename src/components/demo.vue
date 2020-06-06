<template>
    <div @click="test">
      {{ msg }}
    </div>
</template>

<script>
export default {
  name: 'demo',
  data () {
    return {
      msg: 'demo'
    }
  },
  beforeRouteEnter (a, b, c) {
    console.log(a, b, c)
  },
  methods: {
    test: function () {
      console.log(this.msg)
    }
  },
  mounted: function () {
  }
}
</script>

<style scoped>

</style>
