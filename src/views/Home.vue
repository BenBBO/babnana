<template>
  <div>
    <section class="page-section section-about clearfix">
      <div class="container">
        <div class="intro">
          <img
            class="intro-img img-fluid mb-3 mb-lg-0 rounded"
            :src="require(`@/assets/whoAmI.jpg`)"
            alt="..."
          />
          <div class="intro-text left-0 text-center bg-faded p-5 rounded">
            <h2 class="section-heading mb-4">
              <span class="section-heading-upper">Anim'toi</span>
              <span class="section-heading-lower">Babnana</span>
            </h2>
            <p class="mb-3">
              Animations pour enfants autour de <strong>TREPT</strong>
            </p>
            <p class="mb-3">
              <ul class="animation-list">
                <li> Graine de malice <strong>(1 à 3 ans)</strong></li>
                <li> Minis pousses <strong>(4 à 6 ans)</strong></li>
                <li> Grands bourgeons <strong>(7 ans et +)</strong></li>
                <li> Etablissements professionnels <strong>(1 ans et ++)</strong></li>
              </ul>
            </p>
            <div class="intro-button mx-auto">
               <router-link class="btn btn-primary btn-xl" to="/animation">En savoir plus</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="page-section section-video cta">
      <div class="container">
        <div class="row">
          <div class="col-xl-9 mx-auto">
            <div class="cta-inner bg-faded text-center rounded">
              <h2 class="section-heading mb-4">
                <span class="section-heading-upper">venez découvrir</span>
                <span class="section-heading-lower">Nos animaux</span>
              </h2>
              <p class="mb-0">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/pJJ0aJrzqk4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>   
    <section class="page-section cta section-avenir">
      <div class="container">
        <div class="row">
          <div class="col-xl-9 mx-auto">
            <div class="cta-inner bg-faded text-center rounded">
              <h2 class="section-heading mb-4">
                <span class="section-heading-upper">a ne pas rater</span>
                <span class="section-heading-lower">Ce mois-ci</span>
              </h2>
              <p class="mb-0">
                <img class="intro-img img-fluid mb-3 mb-lg-0 rounded"
                      :src="require(`@/assets/programme.jpg`)" alt="..." />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section> 
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style lang="scss" scoped>
#appBody {
  .animation-list {
    list-style-type: none;
  }

  .section-about,
  .section-avenir {
    background-color: $background;
  }

  .section-avenir {
    .cta-inner {
      background-color: inherit;
    }
  }

  .section-video {
    background-color: $third;
  }
}
</style>