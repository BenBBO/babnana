<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col p-0">
        <HomeJumbotron />
      </div>
    </div>
    <div class="row">
      <div class="col p-0">
        <ServicesResume />
      </div>
    </div>
    <div class="row">
      <div class="col p-0">
        <Location />
      </div>
    </div>
  </div>
</template>

<script>
import HomeJumbotron from "@/components/HomeJumbotron.vue";
import ServicesResume from "@/components/ServicesResume.vue";
import Location from "@/components/Location.vue";
export default {
  name: "Home",
  components: { HomeJumbotron, ServicesResume, Location }
};
</script>
