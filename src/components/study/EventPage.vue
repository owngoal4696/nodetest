<template>
  <div class="event-page">
    <h2>イベント</h2>

    <!-- Vue.js -->
    <h3><span class="badge badge-secondary">Vue.js</span></h3>
    <span>クリックされた回数は{{count}}回です </span>
    <button id="button" class="btn btn-sm btn-info" @click="onClickButton()">Click Me</button>
    <br />
    <br />

    <!-- Vue.js -->
    <h3><span class="badge badge-secondary">Vue.js</span></h3>
    <span>クリックされた回数は{{count2}}回です </span>
    <button id="button" class="btn btn-sm btn-info" @click="onClickButton2()">Click Me</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count : 0,
      count2 : 10
    }
  },
  methods : {
    onClickButton : function() {
      this.count++;
    },
    onClickButton2() {
      this.count2--;
    },
  }
}
</script>

<style scoped>
.event-page {
  padding: 20px;
  background-color: #0067C0;
}
</style>