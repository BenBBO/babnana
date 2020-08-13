<template>
  <div class="jumbotron jumbotron-fluid text-center">
    <h1 id="jumbotron-title" class="display-4 font-weight-bold">Jouer, Créer, Imaginer</h1>
    <p
      class="lead"
    >This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
    <router-link to="/about" class="btn btn-primary btn-lg">Plus d'information</router-link>    
  </div>
</template>

<script>
export default {
  name: "HomeJumbotron"
};
</script>

<style lang="scss" scoped>
.jumbotron {
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(../assets/birthday-party.jpg) no-repeat center fixed;
  background-size: cover;
  min-height: 50vh;
  color: white;
}

#jumbotron-title{
  font-family: 'Chilanka';
}
</style>