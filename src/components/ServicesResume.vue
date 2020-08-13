<template>
  <div class="card-deck" id="services-container">
    <div class="card border-0">
      <img class="card-img-top img-fluid" src="@/assets/birthday.jpg" alt="Card image cap" />
      <div class="card-body">
        <h4 class="card-title">Anniversaires</h4>
        <p
          class="card-text"
        >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
         <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
    <div class="card border-0">
      <img class="card-img-top img-fluid" src="@/assets/deguisement.jpg" alt="Card image cap" />
      <div class="card-body">
        <h4 class="card-title">Animations</h4>
        <p
          class="card-text"
        >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>
    <div class="card border-0">
      <img class="card-img-top img-fluid" src="@/assets/babysit.jpg" alt="Card image cap" />
      <div class="card-body">
        <h4 class="card-title">Garde d'enfants</h4>
        <p
          class="card-text"
        >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ServicesResume"
};
</script>

<style lang="scss" scoped>

#services-container {
  background-color: $primary;
  padding: 30px 15px;

  .card-body {
    text-align: center;
    
  }
}
</style>