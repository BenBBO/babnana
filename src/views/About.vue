<template>
  <div>
    <section class="page-section section-timetable cta">
      <div class="container">
        <div class="row">
          <div class="col-xl-9 mx-auto">
            <div class="cta-inner bg-faded text-center rounded">
              <h2 class="section-heading mb-5">
                <span class="section-heading-lower">Horaires d'ouverture</span>
                <span class="section-heading-upper">Sur réservation</span>
              </h2>
              <ul class="list-unstyled list-hours mb-5 text-left mx-auto">
                <li class="list-unstyled-item list-hours-item d-flex">
                  Dimanche
                  <span class="ms-auto">Fermé</span>
                </li>
                <li class="list-unstyled-item list-hours-item d-flex">
                  Lundi
                  <span class="ms-auto">9H30 à 17H30</span>
                </li>
                <li class="list-unstyled-item list-hours-item d-flex">
                  Mardi
                  <span class="ms-auto">9H30 à 17H30</span>
                </li>
                <li class="list-unstyled-item list-hours-item d-flex">
                  Mercredi
                  <span class="ms-auto">9H30 à 17H30</span>
                </li>
                <li class="list-unstyled-item list-hours-item d-flex">
                  Jeudi
                  <span class="ms-auto">9H30 à 17H30</span>
                </li>
                <li class="list-unstyled-item list-hours-item d-flex">
                  Vendredi
                  <span class="ms-auto">9H30 à 17H30</span>
                </li>
                <li class="list-unstyled-item list-hours-item d-flex">
                  Samedi
                  <span class="ms-auto">9H30 à 17H30</span>
                </li>
              </ul>
              <p class="address mb-5">
                <em>
                  <strong>Route de Bourgoin</strong>
                  <br />
                  38460 TREPT
                </em>
              </p>
              <p class="mb-0">
                <small><em>Par téléphone ou mail</em></small>
                <br />
                <a href="tel:0652867160">0652867160</a> / <a href="mailto:babnana38@gmail.com">babnana38@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="row">
      <div class="col p-0">
        <Location />
      </div>
    </div>
  </div>
</template>

<script>
import Location from "@/components/Location.vue";

export default {
  name: "About",
  components: { Location },
};
</script>

<style lang="scss" scoped>
.section-timetable{
  background-color: $background;
}

</style>
