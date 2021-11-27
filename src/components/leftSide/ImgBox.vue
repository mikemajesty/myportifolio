<template>
  <div class="imgBox">
    <img src="../../../public/img.jpeg">
  </div>
  <h2>Mike Lima</h2>
  <span>Full Stack Developer</span>
</template>

<script>
export default {
  name: 'ImgBox'
}
</script>

<style scoped>
.imgBox
{
  position: relative;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  overflow: hidden;
}

img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

h2 {
  color: white;
  font-size: 1.7em;
  margin-top: 20px;
  text-transform: uppercase;
  text-align: center;
  font-weight: 600;
  line-height: 1.4em;
}

span {
  font-size: 1em;
  font-weight: 300;
  color: white;
}
</style>