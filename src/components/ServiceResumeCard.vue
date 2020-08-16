<template>
  <div class="card border-0">
    <img
      class="card-img-top img-fluid"
      :src="require(`@/assets/${this.pictureName}`)"
      alt="Card image cap"
    />
    <div class="card-body">
      <h4 class="card-title">{{cardTitle}}</h4>
      <p class="card-text">{{cardDetail}}</p>
      <router-link :to="linkTarget" class="btn btn-primary btn-lg btn-block">{{linkText}}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "ServiceResumeCard",
  props: {
    pictureName: { type: String, required: true },
    cardTitle: { type: String, required: true },
    cardDetail: { type: String },
    linkTarget: { type: String },
    linkText: { type: String }
  }
};
</script>

<style lang="scss" scoped>
.card-body {
  text-align: center;
}

@keyframes slideInFromLeft {
     0% {
      opacity: 0;
      transform: translateY(100%);
   }
   100% {
      opacity: 1;
      transform: translateY(0);
   }  
}

.card {
  animation: 1.5s slideInFromLeft;
}
</style>