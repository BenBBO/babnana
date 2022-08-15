<template>
  <div id="app">
    <!-- <header>
      <h1 class="site-heading text-center text-faded d-none d-lg-block">
        <span class="site-heading-upper text-primary mb-3"
          >A Free Bootstrap Business Theme</span
        >
        <img />
      </h1>
    </header> -->
    <!-- Navigation-->
    <nav
      class="navbar sticky-top navbar-expand-lg navbar-dark py-lg-4"
      id="mainNav"
    >
      <div class="container">
        <!-- <router-link
          class="navbar-brand text-uppercase fw-bold d-lg-none"
          to="/"
        >
          <img
            id="logo"
            alt="Babnana logo"
            :src="require(`@/assets/babnana.png`)"
          />
        </router-link> -->
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-center"
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav mt-2 mt-lg-0">
            <li class="nav-item px-lg-4">
              <router-link class="nav-link" class-active="active" to="/"
                >Acceuil</router-link
              >
            </li>
            <li class="nav-item px-lg-4">
              <router-link
                class="nav-link"
                class-active="active"
                to="/animation"
                >Animation</router-link
              >
            </li>
            <li class="nav-item px-lg-4">
              <router-link
                class="nav-link"
                class-active="active"
                to="/fermePedagogique"
                >Ferme pédagogique</router-link
              >
            </li>
            <li class="nav-item px-lg-4">
              <router-link class="nav-link" class-active="active" to="/galerie"
                >Galerie</router-link
              >
            </li>
            <li class="nav-item px-lg-4">
              <router-link class="nav-link" class-active="active" to="/aPropos"
                >A propos</router-link
              >
            </li>

            <!-- <li class="nav-item px-lg-4">
              <a class="nav-link text-uppercase" href="index.html">Home</a>
            </li>
            <li class="nav-item px-lg-4">
              <a class="nav-link text-uppercase" href="about.html">About</a>
            </li>
            <li class="nav-item px-lg-4">
              <a class="nav-link text-uppercase" href="products.html"
                >Products</a
              >
            </li>
            <li class="nav-item px-lg-4">
              <a class="nav-link text-uppercase" href="store.html">Store</a>
            </li> -->
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
      </div>
    </nav>

    <!-- <nav
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
    </nav> -->
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
// @import "../node_modules/bootstrap/scss/bootstrap.scss";
@import "./assets/styles/styles.css";
@import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";

body#appBody {
  font-family: "Tajawal", sans-serif;
  background-color: $background;

  #mainNav {
    background-color: $primary;

    #navbarSupportedContent {
      .nav-link {
        padding: 1em;
        color: black;
        &.router-link-exact-active, &:hover{                    
          background-color: $secondary;
          border-radius: 1em;
          transition: border-radius 1s;
        }             
      }

      .social-nav {
        font-size: 2em;
      }
    }    
  }

  .page-section{
    margin: 0;
    padding : 2em;
  }
}

#logo {
  width: 50%;
  transition: width 1s;
}
</style>
