<template>
  <div class="container-fluid">
    <div class="row">
        <!-- Qui suis je -->
        Paragraphe de présentation + photo
    </div>
    <div class="row">
        <!-- Contact + ouvertre-->
        Fiche de contact, adresse + horaire d'ouverture
    </div>
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
  components: { Location }
};
</script>

<style>
</style>
