<template>
  <div>
    <section class="page-section about-heading">
      <div class="container">
        <img
          class="img-fluid rounded about-heading-img mb-3 mb-lg-0"
          :src="require(`@/assets/img/ferme_pedagogique.webp`)"
          alt="..."
        />
        <div class="about-heading-content">
          <div class="row">
            <div class="col-xl-9 col-lg-10 mx-auto">
              <div class="bg-faded rounded p-5">
                <h2 class="section-heading mb-4">
                  <span class="section-heading-upper"
                    >La ferme pédagogique</span
                  >
                  <span class="section-heading-lower">Le trésor de l'Isle</span>
                </h2>
                <p>
                  Founded in 1987 by the Hernandez brothers, our establishment
                  has been serving up rich coffee sourced from artisan farmers
                  in various regions of South and Central America. We are
                  dedicated to travelling the world, finding the best coffee,
                  and bringing back to you here in our cafe.
                </p>
                <p class="mb-0">
                  We guarantee that you will fall in
                  <em>lust</em>
                  with our decadent blends the moment you walk inside until you
                  finish your last sip. Join us for your daily routine, an
                  outing with friends, or simply just to enjoy some alone time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <h1>Les animaux</h1>
    <section class="page-section">
      <ul class="cards">
        <li>
          <a href="" class="card">
            <img
              :src="require(`@/assets/img/chevraux.jpg`)"
              class="card__image"
              alt=""
            />
            <div class="card__overlay">
              <div class="card__header">
                <svg class="card__arc" xmlns="http://www.w3.org/2000/svg">
                  <path />
                </svg>
                <img
                  class="card__thumb"
                  :src="require(`@/assets/img/icon-tyto.jpg`)"
                  alt=""
                />
                <div class="card__header-text">
                  <h3 class="card__title">Tchoupi, Tagada & Tyto</h3>
                  <span class="card__status">Les mascottes</span>
                </div>
              </div>
              <p class="card__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores, blanditiis?
              </p>
            </div>
          </a>
        </li>
        <li>
          <a href="" class="card">
            <img
              :src="require(`@/assets/img/ponpon.jpg`)"
              class="card__image"
              alt=""
            />
            <div class="card__overlay">
              <div class="card__header">
                <svg class="card__arc" xmlns="http://www.w3.org/2000/svg">
                  <path />
                </svg>
                <img
                  class="card__thumb"
                  :src="require(`@/assets/img/icon-ponpon.jpg`)"
                  alt=""
                />
                <div class="card__header-text">
                  <h3 class="card__title">Apollon</h3>
                  <span class="card__status">Père peinard</span>
                </div>
              </div>
              <p class="card__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores, blanditiis?
              </p>
            </div>
          </a>
        </li>
        <li>
          <a href="" class="card">
            <img
              :src="require(`@/assets/img/rasta-rocket.jpg`)"
              class="card__image"
              alt=""
            />
            <div class="card__overlay">
              <div class="card__header">
                <svg class="card__arc" xmlns="http://www.w3.org/2000/svg">
                  <path />
                </svg>
                <img
                  class="card__thumb"
                  src="https://i.imgur.com/7D7I6dI.png"
                  alt=""
                />
                <div class="card__header-text">
                  <h3 class="card__title">Rasta & Rockett</h3>
                  <span class="card__status">Peace and Love</span>
                </div>
              </div>
              <p class="card__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores, blanditiis?
              </p>
            </div>
          </a>
        </li>
        <li>
          <a href="" class="card">
            <img
              :src="require(`@/assets/img/canards.jpg`)"
              class="card__image"
              alt=""
            />
            <div class="card__overlay">
              <div class="card__header">
                <svg class="card__arc" xmlns="http://www.w3.org/2000/svg">
                  <path />
                </svg>
                <img
                  class="card__thumb"
                  :src="require(`@/assets/img/icon-poussin.jpg`)"
                  alt=""
                />
                <div class="card__header-text">
                  <h3 class="card__title">Les canards</h3>
                  <span class="card__status">Et leurs petits</span>
                </div>
              </div>
              <p class="card__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores, blanditiis?
              </p>
            </div>
          </a>
        </li>
        <li>
          <a href="" class="card">
            <img
              :src="require(`@/assets/img/rongeurs.jpg`)"
              class="card__image"
              alt=""
            />
            <div class="card__overlay">
              <div class="card__header">
                <svg class="card__arc" xmlns="http://www.w3.org/2000/svg">
                  <path />
                </svg>
                <img
                  class="card__thumb"
                  :src="require(`@/assets/img/icon-poussin.jpg`)"
                  alt=""
                />
                <div class="card__header-text">
                  <h3 class="card__title">Les lapinous</h3>
                  <span class="card__status">3 hours ago</span>
                </div>
              </div>
              <p class="card__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores, blanditiis?
              </p>
            </div>
          </a>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: "FermePedagogique",
};
</script>

<style lang="scss" scoped>
$surface-color: #fff;
$curve: 40;

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 4rem 5vw;
  padding: 0;
  list-style-type: none;
}

.card {
  position: relative;
  display: block;
  height: 100%;
  border-radius: calc($curve * 1px);
  overflow: hidden;
  text-decoration: none;
  border: none;
}

.card__image {
  width: 100%;
  height: auto;
}

.card__overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  border-radius: calc($curve * 1px);
  background-color: $surface-color;
  transform: translateY(100%);
  transition: 0.2s ease-in-out;
}

.card:hover .card__overlay {
  transform: translateY(0);
}

.card__header {
  position: relative;
  display: flex;
  align-items: center;
  gap: 2em;
  padding: 2em;
  border-radius: calc($curve * 1px) 0 0 0;
  background-color: $surface-color;
  transform: translateY(-100%);
  transition: 0.2s ease-in-out;
}

.card__arc {
  width: 80px;
  height: 80px;
  position: absolute;
  bottom: 100%;
  right: 0;
  z-index: 1;
}

.card__arc path {
  fill: $surface-color;
  d: path("M 40 80 c 22 0 40 -22 40 -40 v 40 Z");
}

.card:hover .card__header {
  transform: translateY(0);
}

.card__thumb {
  flex-shrink: 0;
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.card__title {
  font-size: 1em;
  margin: 0 0 0.3em;
  color: #6a515e;
}

.card__tagline {
  display: block;
  margin: 1em 0;
  font-family: "MockFlowFont";
  font-size: 0.8em;
  color: #d7bdca;
}

.card__status {
  font-size: 0.8em;
  color: #d7bdca;
}

.card__description {
  padding: 0 2em 2em;
  margin: 0;
  color: #d7bdca;
  font-family: "MockFlowFont";
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}
</style>