<script>
import { BButton, BCarousel, BCarouselSlide } from 'bootstrap-vue-next'

export default {
  components: { BCarousel, BCarouselSlide, BButton },

  data() {
    return {
      slideInterval: 5000,
    }
  },
}
</script>

<template>
  <div>
    <h1>Welcome to country wiki</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
      aliquid consectetur voluptatum ipsa minus, laudantium dolor architecto
      nihil consequatur enim iste natus, quo voluptate nulla eaque quis
      distinctio, modi exercitationem!
    </p>
  </div>
  <div class="carousel">
    <BCarousel :interval="slideInterval" controls indicators ride="carousel">
      <BCarouselSlide img-src="https://picsum.photos/1024/480/?image=19" />
      <BCarouselSlide img-src="https://picsum.photos/1024/480/?image=25" />
      <BCarouselSlide img-src="https://picsum.photos/1024/480/?image=28" />
      <BCarouselSlide img-src="https://picsum.photos/1024/480/?image=37" />
    </BCarousel>
  </div>
  <div class="start-button">
    <BButton
      squared
      variant="success"
      size="lg"
      @click="$router.push('/CountryList/')"
      >Get Started</BButton
    >
  </div>
</template>

<style scoped>
div {
  padding: 15px;
}
p {
  text-align: center;
}
h1 {
  text-align: center;
  padding-top: 15px;
}
.carousel {
  max-width: 1024px;
  margin: 2rem auto;
}
.start-button {
  text-align: center;
  margin: 2rem 0;
}
</style>
