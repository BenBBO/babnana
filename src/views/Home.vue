<template>
  <div class="container-fluid">
    <div
      id="carouselExampleIndicators"
      class="carousel slide"
      data-ride="carousel"
    >
      <ol class="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          class="active"
        ></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            class="d-block w-100"
            :src="require(`@/assets/babnana.png`)"
            alt="First slide"
          />
          <div class="carousel-caption d-none d-md-block">
            <h5>Image 1</h5>
            <p>Description</p>
          </div>
        </div>
        <div class="carousel-item">
          <img
            class="d-block w-100"
            :src="require(`@/assets/babysit.jpg`)"
            alt="Second slide"
          />
          <div class="carousel-caption d-none d-md-block">
            <h5>Image 2</h5>
            <p>Description</p>
          </div>
        </div>
        <div class="carousel-item">
          <img
            class="d-block w-100"
            :src="require(`@/assets/deguisement.jpg`)"
            alt="Third slide"
          />
          <div class="carousel-caption d-none d-md-block">
            <h5>Image 3</h5>
            <p>Description</p>
          </div>
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>

    <!-- Dernieres nouvelle de la ferme ou évènements à venir => Liens vers le facebook de la ferme ?  -->

    <!-- Présentation   -->

    <p>Créé en 2021, blah blah blah</p>

    <!-- Embed vidéo de la ferme -->
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>
