<template>
  <div class="trajectory">
      <h3 class="title">Trajetória</h3>
  </div>
  <Carousel>
    <Slide v-for="slide in list" :key="slide.id">
      <div class="carousel__item">
        <img class="trajectoryImg" :src="slide.img">
      </div>
    </Slide>

    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel';

import 'vue3-carousel/dist/carousel.css';

export default defineComponent({
  name: 'Basic',
  data: () => ({
    list: [
      { id: 'tegra', img:  require("../../assets/trajectory/tegra.jpg")},
      { id: 'gs1', img:  require("../../assets/trajectory/gs1.jpeg")},
      { id: 'zurich', img:  require("../../assets/trajectory/zurich.jpeg")},
      { id: 'uol', img:  require("../../assets/trajectory/uol.jpeg")},
      { id: 'santander', img:  require("../../assets/trajectory/santander.jpg")},
      { id: 'serasa', img:  require("../../assets/trajectory/serasa.jpeg")},
      { id: 'ibm', img:  require("../../assets/trajectory/ibm.jpeg")},
      { id: 'accenture', img:  require("../../assets/trajectory/accenture.jpg")}
    ]
  }),
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
});
</script>

<style>

.trajectory {
  padding-top: 10%;
}

.carouselText {
  text-align: center;
  padding-top: 5%;
}

.title {
  font-weight: 700;
  color: aliceblue;
}

.carousel__item {
  width: 100%;
  background-color: var(--vc-clr-primary);
  color:  var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid aliceblue;
  background-color: #03a9f4;
}

.carousel__pagination-button.carousel__pagination-button--active {
  background-color: #03a9f4;
}

.carousel__pagination-button {
  background-color: aliceblue
}

</style>