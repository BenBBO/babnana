<template>
  <div id="app">
    <nav class="navbar sticky-top navbar-expand-lg navbar-light bg-light">
      <router-link class="navbar-brand" to="/">
        <img id="logo" alt="Babnana logo" src="./assets/babnana.png" />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navigationContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navigationContent">
        <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
          <router-link class="nav-link" class-active="active" to="/"
            >Acceuil</router-link
          >
          <router-link
            class="nav-link"
            class-active="active"
            to="/fermePedagogique"
            >Ferme pédagogique</router-link
          >
          <router-link class="nav-link" class-active="active" to="/animation"
            >Animation</router-link
          >
          <router-link class="nav-link" class-active="active" to="/galerie"
            >Galerie</router-link
          >
          <router-link class="nav-link" class-active="active" to="/aPropos"
            >A propos</router-link
          >
        </ul>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<style lang="scss">
@import "./assets/styles/custom.scss";
@import "../node_modules/bootstrap/scss/bootstrap.scss";

#logo {
  width: 50%;
}

#navigationContent {
  .nav-link {
    padding: 1em;
    &.router-link-exact-active {
      color: white;
      background-color: $primary;
      border-radius: 1em;
    }
  }
}
</style>
