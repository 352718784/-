<template>
  <div class="hello-world">
    <article>
      <p>内容</p>
      <aside>
        <h1>作者简介</h1>
        <p>小北，前端一枚</p>
      </aside>
    </article>
    <article>
      <header>
        <h1>一篇文章</h1>
        <p><time pubdate datetime="2012-10-03">2012/10/03</time></p>
      </header>
      <p>文章内容..</p>
      <article>
        <h2>评论</h2>
        <article>
          <header>
            <h3>评论者: XXX</h3>
            <p><time pubdate datetime="2012-10-03T19:10-08:00">~1 hour ago</time></p>
          </header>
          <p>哈哈哈</p>
        </article>
        <article>
          <header>
            <h3>评论者: XXX</h3>
            <p><time pubdate datetime="2012-10-03T19:10-08:00">~1 hour ago</time></p>
          </header>
          <p>哈？哈？哈？</p>
        </article>
      </article>
    </article>
  </div>
</template>

<script>
import axios from 'axios'
import vue from 'vue'
import demo from './demo'
export default {
  name: 'HelloWorld',
  components: {demo},
  data () {
    return {
      msg: 'hello',
      name: 'hello'
    }
  },
  methods: {
    test (e) {
      let vnode = this.$createElement('div', {class: 'vnode'}, ['hello'])
      console.log(vnode, this);
      this.$children.push(vnode)
    }
  },
  mounted () {
  }
}
</script>
<style lang="scss">
  .hello-world{
    position: relative;
    top: 100px;
    >#panorama{
      width: 1134px;height: 500px;
      position: absolute;
    }
    >.window{
      height: 5rem;overflow: scroll;width: 5rem;
    }
  }
</style>
