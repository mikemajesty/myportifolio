<template>
  <div class="hackathonsInfo">
    <h3 class="title">Hackathons</h3>
    <ul>
      <li>
        <h5>GS1 BRASIL - 2016</h5>
        <h4 class="position">Campeão</h4>
        <a href="https://github.com/mikemajesty/PagFarma-Web" title="Click para mais informações" target="_blank" class="project">Pagfarma</a>
      </li>
      <hr />
      <li>
        <h5>SANTANDER - 2016</h5>
        <h4 class="position">Semifinalista</h4>
        <a href="https://github.com/mikemajesty/pay-force-mobile" title="Click para mais informações" target="_blank" class="project">Pay Force</a>
      </li>
      <hr />
      <li>
        <h5>UOL HOST - 2016</h5>
        <h4 class="position">Vice Campeão</h4>
        <a href="https://github.com/mikemajesty/E-Connect" title="Click para mais informações" target="_blank" class="project">E-Connect</a>
      </li>
      <hr />
      <li>
        <h5>HACK ZURICH - 2016</h5>
        <a href="https://github.com/mikemajesty/HackZurich-Project" title="Click para mais informações" target="_blank" class="project">Indoor Messages</a>
      </li>
      <hr />
      <li>
        <h5>Tegra - 2017</h5>
        <h4 class="position">Campeão</h4>
        <a  href="https://github.com/mikemajesty/BeaconMusic" title="Click para mais informações" target="_blank" class="project">Beacon Music</a>
      </li>
      <hr />
      <li>
        <h5>SERASA EXPERIAN - 2017</h5>
        <a href="https://github.com/celso-wo/relato-express" title="Click para mais informações" target="_blank" class="project">Relato Express</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Hackathons",
};
</script>

<style scoped>
.hackathonsInfo {
  padding-top: 25px;
}

ul {
  padding-top: 7%;
}

.title {
  font-weight: 700;
  color: aliceblue;
}

li {
  margin-bottom: 15px;
  list-style: none;
}

h5 {
  font-weight: 500;
  color: aliceblue;
}

.position {
  color: #03a9f4;
  position: relative;
  width: 100%;
  font-weight: 300;
}

.project {
  color: aliceblue;
  font-weight: 200;
}

hr {
  margin-top: 5%;
  margin-bottom: 5%;
}
</style>