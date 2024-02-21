<template>
  <div class="directive-page">
    <h2>ディレクティブ</h2>

    <!-- Vue.js -->
    <h3><span class="badge badge-secondary">チェック時のみ表示</span></h3>
    <input type="checkbox" v-model="checked">
    <span v-show="checked">チェック時だけ見えるよ</span>
    <br>
    <br>
    <input type="checkbox" v-model="checked">
    <span v-show="checked">チェック時だけ見えるよ２</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked : true
    }
  }
}
</script>

<style scoped>
.directive-page {
  padding: 20px;
  background-color: #f7f6f3;
}
</style>