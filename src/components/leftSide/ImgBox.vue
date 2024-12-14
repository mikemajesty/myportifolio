<template>
  <div class="imgBox">
    <img src="../../assets/img.jpeg">
  </div>
  <h2>Mike Lima</h2>
  <span>Engenehiro de Software Sênior</span>
  
  <p class="expertises" >Expertises</p>

<ul>
  <li>Nodejs(Nestjs, Express)</li>
  <li>Arquitetura de Software</li>
  <li>Observabilidade</li>
  <li>Typescript</li>
  <li>MongoDB</li>
  <li>PostgreSQL</li>
</ul>

  
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
li {
  color: white;
}
.expertises
{
  color: white;
  padding-top: 5%;
  font-weight: 1000;
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