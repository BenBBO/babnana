<template>
  <div id="app">
    <nav
      class="navbar sticky-top navbar-expand-lg navbar-light bg-light"
      :class="{ 'navbar--collapsed': !showNavbar }"
    >
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
        <ul class="navbar-nav mt-2 mt-lg-0">
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
        <div class="navbar-nav ml-lg-auto social-nav">
          <a
            class="nav-item"
            href="https://www.facebook.com/Babnana38/"
            target="_blank"
            ><i class="bi bi-facebook"></i
          ></a>
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>
<script>
export default {
  data() {
    return {
      showNavbar: true,
      lastScrollPosition: 0,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll() {
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollPosition < 0) {
        return;
      }
      // Stop executing this function if the difference between
      // current scroll position and last scroll position is less than some offset
      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 60) {
        return;
      }
      this.showNavbar = currentScrollPosition < this.lastScrollPosition;
      this.lastScrollPosition = currentScrollPosition;
    },
  },
};
</script>

<style lang="scss">
@import "./assets/styles/custom.scss";
@import "../node_modules/bootstrap/scss/bootstrap.scss";
@import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";

#logo {
  width: 50%;
  transition: width 1s;
}

#navigationContent {
  .nav-link {
    padding: 1em;
    &.router-link-exact-active {
      color: white;
      background-color: $primary;
      border-radius: 1em;
      transition: border-radius 1s;
    }
  }
}

.social-nav {
  font-size: 2em;
}

.navbar.navbar--collapsed {
  .navbar-brand {
    padding-top: 0;
    padding-bottom: 0;
    #logo {
      width: 25%;
    }
  }
  padding-top: 0px;
  padding-bottom: 0px;

  #navigationContent .nav-link.router-link-exact-active {
    border-radius: initial;
  }
}
</style>
