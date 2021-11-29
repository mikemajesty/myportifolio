<template>
  <div class="trajectory">
      <h3 class="title">Trajetória</h3>
  </div>
  <Carousel>
    <Slide v-for="slide in list" :key="slide.name">
      <div class="carousel__item"><img class="trajectoryImg" v-bind:src="slide.img"></div>
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
    list: [{ name: 'Tegra', img: __dirname + "../../assets/trajectory/gs1.jpeg"  }]
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

.trajectoryImg {
  border-radius: 50%;
}

.title {
  font-weight: 700;
  color: aliceblue;
}

.carousel {
  padding-top: 50px;
}

.carousel__item {
  min-height: 200px;
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