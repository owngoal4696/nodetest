<template>
  <div class="main-page">
        <div class="left-menu">
      <!-- TODOリスト -->
      <input type="text" v-model="newTodoText" /><button @click="addTodo">追加</button>
      <button @click="clearDoneTodos">完了済みを削除する</button>
      <p v-if="todos.length === 0">ToDoがまだありません！</p>
      <ul v-else>
      <!-- 項目追加-->
    <li v-for="(todo, key) in todos" v-bind:key="key">
      <input type="checkbox" v-model="todo.isDone" /><span
        :class="{ 'todo-done': todo.isDone }"
        >{{ todo.text }}</span
      >
    </li>
   </ul>
   <!-- ラベル表示 -->
    <span>{{newTodoText}}が入力されました</span>
    </div>

    <div class="right-view">
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      newTodoText: '',
      todos: [],
    }
  },
  methods: {
     addTodo() {
      if (!this.newTodoText) return alert('文字を入力してください')
      this.todos.push({
        isDone: false,
        text: this.newTodoText,
      })
      this.newTodoText = ''
    },
    clearDoneTodos() {
      this.todos = this.todos.filter((todo) => !todo.isDone)
    },
  },
}
</script>

<style scoped>
.main-page {
  padding: 10px;
  .left-menu {
    width: 1400px;
    background-color: #f7f6f3;
     .note {
      margin: 10px 0;
      display: flex;
      align-items: center;
      padding: 5px;
      color: rgba(25, 23, 17, 0.6);
    }
  }
  .right-view {
    flex-grow: 1;
    padding: 150px;
    background-color: #0067C0;
  }
}
</style>