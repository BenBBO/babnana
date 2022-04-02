<template>
  <div class="card-deck" id="services-container">
    <ServiceResumeCard
      pictureName="birthday.jpg"
      cardTitle="Anniversaires"
      cardDetail="Some quick example text to build on the card title and make up the bulk of the card's content."
      linkTarget="/about"
      linkText="Go somewhere"
    />
    <ServiceResumeCard
      pictureName="deguisement.jpg"
      cardTitle="Animations"
      cardDetail="Some quick example text to build on the card title and make up the bulk of the card's content."
      linkTarget="/about"
      linkText="Go somewhere"
    />
    <ServiceResumeCard
      pictureName="babysit.jpg"
      cardTitle="Garde d'enfants"
      cardDetail="Some quick example text to build on the card title and make up the bulk of the card's content."
      linkTarget="/about"
      linkText="Go somewhere"
    />
  </div>
</template>

<script>
import ServiceResumeCard from "@/components/ServiceResumeCard.vue";
export default {
  name: "ServicesResume",
  components: { ServiceResumeCard }
};
</script>

<style lang="scss" scoped>
#services-container {
  background-color: $primary;
  padding: 30px 15px;

  .card-body {
    text-align: center;
  }

  &.card-deck{
    margin-right: 0;
    margin-left: 0;
  }
}
</style>