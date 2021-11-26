<template>
  <div class="expiriences">
    <h2 class="title">Experiências</h2>
    <div class="box">
      <div class="yearCompany">
        <h5>2016 - 2018</h5>
        <h5>Tegra</h5>
      </div>
      <div class="text">
        <h4>Full Stack Developer</h4>
        <p>
          is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        </p>
      </div>
    </div>
    <div class="box">
      <div class="yearCompany">
        <h5>2018 - 2019</h5>
        <h5>IBM</h5>
      </div>
      <div class="text">
        <h4>Full Stack Developer</h4>
        <p>
          is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        </p>
      </div>
    </div>
    <div class="box">
      <div class="yearCompany">
        <h5>2019 - 2020</h5>
        <h5>Accenture</h5>
      </div>
      <div class="text">
        <h4>Full Stack Developer</h4>
        <p>
          is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        </p>
      </div>
    </div>
    <div class="box">
      <div class="yearCompany">
        <h5>2020 - 2021</h5>
        <h5>Dasa</h5>
      </div>
      <div class="text">
        <h4>Backend Developer</h4>
        <p>
          is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Expiriences'
}
</script>

<style scoped>

.expiriences {
  padding-top: 17%;
}

.expiriences:last-child {
  margin-bottom: 0;
}

.title {
  color: #003147;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 10px;
}

.box {
  display: flex;
  flex-direction: row;
  margin: 20px 0px;
}

h5 {
  text-transform: uppercase;
  color: #848c90;
  font-weight: 600;
}

h4 {
  text-transform: uppercase;
  color: #2a7da2;
  font-size: 16px;
}

.yearCompany {
  min-width: 150px;
}

p {
  color: #333;
  font-weight: 400;
}
/* https://www.youtube.com/watch?v=hnjHCmaUVPg */
</style>

