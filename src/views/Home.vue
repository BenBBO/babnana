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

    <div class="description-container">
      <h2>Bienvenue chez Babnana</h2>
      <p>
        Lorem ipsum dolor sit amet. Nam assumenda atque nam magnam illum ut
        suscipit nisi sit dolore eveniet ut omnis perspiciatis in sequi eaque.
        Qui expedita corporis ad enim cumque et alias architecto et saepe
        ratione et minus architecto sit cumque praesentium est unde dolore?
      </p>
      <p>
        Non ducimus praesentium <em>Sit quia</em> id dolorem galisum est neque
        dolores. Aut autem consequatur qui error molestiae non nostrum
        laboriosam sit doloribus ipsum. Cum omnis consequatur quo unde cumque
        aut dolorem nisi eum iusto dolores sit voluptates corporis sit veniam
        internos non dignissimos odit.
      </p>
      <p>
        Et excepturi dolor
        <em
          >Qui tempora ea temporibus veniam ex iusto dignissimos est soluta
          error</em
        >. Ea consequatur voluptas ut corporis laboriosam sed fuga dolorum et
        illum nobis sit quibusdam possimus et ipsam laborum id quia incidunt? Ut
        temporibus similique
        <strong
          >Et quisquam non voluptas quasi rem nulla incidunt ut quaerat
          sapiente</strong
        >
        vel enim dolores et laborum consequuntur.
      </p>

      <hr />
    </div>

    <div class="video-container">
      <!-- Embed vidéo de la ferme -->
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/HEJsLxfzPXk"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
    <div class="presentation-container">
      <div class="presentation-img">
        <img :src="require(`@/assets/whoAmI.jpg`)" alt="Qui suis-je?" />
      </div>
      <div class="presentation-description">
        <h2>Qui suis-je</h2>
        <p>
          Et modi provident nam nulla cumque
          <em
            >Eos temporibus non voluptatem voluptas et repudiandae corporis est
            necessitatibus dolor</em
          >. Qui dolorem possimus aut galisum ipsa
          <strong
            >Eum maiores sed culpa consectetur eos laboriosam deserunt in
            adipisci dolores</strong
          >
          non aliquam molestias. Et necessitatibus perspiciatis et veritatis
          culpa aut quidem velit aut illum tempore et repellendus porro.
        </p>
        <p>
          Qui galisum amet eos sapiente saepehic ipsum et natus quasi. Qui
          expedita excepturi
          <strong>Et eaque ad enim voluptatibus et officiis veniam</strong> est
          libero ratione At omnis atque! In laboriosam consequatur
          <a href="https://www.loremipzum.com" target="_blank">Cum itaque</a> et
          neque assumenda ut incidunt labore. Eum alias eaque sit odit facere
          aut deleniti doloribus et aspernatur molestiae et optio minus sed
          repellat doloremque.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>
<style lang="scss" scoped>
.description-container {
  margin-left: 10vw;
  margin-right: 10vw;
  text-align: center;

  hr {
    color: $primary;
    border-top: 2px solid;
  }

  h2 {
    margin-bottom: 1em;
  }
  p {
    text-align: center;
  }
}

.video-container {
  text-align: center;
}
</style>
