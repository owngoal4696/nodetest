<template>
  <!-- ナビゲーションバーをダークテーマで作成 -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <!-- タイトル -->
    <a class="navbar-brand" href="/main">todoリスト</a>

    <!-- 画面サイズに応じて折りたたむ設定  -->
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <!-- メニュー全体 -->
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav">
        <!-- ノートリストページへのリンク -->
        <li class="nav-item">
          <a class="nav-link" href="/main"><i class="fas fa-list-alt"></i>メイン</a>
        </li>

        <!-- 学習ページへのリンク -->
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" data-toggle="dropdown">
            <i class="fas fa-check"></i>GO
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="/study/binding">ページ1</a></li>
            <li><a class="dropdown-item" href="/study/directive">ページ2</a></li>
            <li><a class="dropdown-item" href="/study/event">ページ3</a></li>
            <li><a class="dropdown-item" href="/study/todolist">ページ4</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
}
</script>

<style scoped>
.navigation-bar {
  height: 60px;
}
</style>