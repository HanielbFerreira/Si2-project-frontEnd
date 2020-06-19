<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <a href="/" class="navbar-brand">Livraria</a>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <a href="/books" class="nav-link">Livros</a>
        </li>
        <li class="nav-item">
          <a href="/bookPublishers" class="nav-link">Editora</a>
        </li>
      </div>
    </nav>

    <div class="container mt-3">
      <router-view />
    </div>
  </div>
</template>

export default {
  name: 'App'
}

<style lang="scss">
@import "./assets/styles/variables";
@import "./assets/styles/bootstrap";
</style>