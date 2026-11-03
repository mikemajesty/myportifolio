<template>
  <div class="hackathonsInfo">
    <h2 class="title">Hackathons</h2>
    <ul>
      <li>
        <h5>GS1 BRASIL - 2016</h5>
        <h4 class="position">Campeão</h4>
        <a href="https://github.com/mikemajesty/PagFarma-Web" target="_blank" rel="noopener noreferrer" class="project">Pagfarma</a>
      </li>
      <hr />
      <li>
        <h5>SANTANDER - 2016</h5>
        <h4 class="position">Semifinalista</h4>
        <a href="https://github.com/mikemajesty/pay-force-mobile" target="_blank" rel="noopener noreferrer" class="project">Pay Force</a>
      </li>
      <hr />
      <li>
        <h5>UOL HOST - 2016</h5>
        <h4 class="position">Vice Campeão</h4>
        <a href="https://github.com/mikemajesty/E-Connect" target="_blank" rel="noopener noreferrer" class="project">E-Connect</a>
      </li>
      <hr />
      <li>
        <h5>HACK ZURICH - 2016</h5>
        <a href="https://github.com/mikemajesty/HackZurich-Project" target="_blank" rel="noopener noreferrer" class="project">Indoor Messages</a>
      </li>
      <hr />
      <li>
        <h5>Tegra - 2017</h5>
        <h4 class="position">Campeão</h4>
        <a href="https://github.com/mikemajesty/BeaconMusic" target="_blank" rel="noopener noreferrer" class="project">Beacon Music</a>
      </li>
      <hr />
      <li>
        <h5>SERASA EXPERIAN - 2017</h5>
        <a href="https://github.com/celso-wo/relato-express" target="_blank" rel="noopener noreferrer" class="project">Relato Express</a>
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
  margin-top: 24px;
}

ul {
  margin-top: 9px;
  list-style: none;
}

.title {
  color: #fff;
  font-size: 1rem;
}

li {
  margin-bottom: 12px;
}

h5 {
  color: #e0eaed;
  font-weight: 600;
}

.position {
  color: #69c5d0;
  font-weight: 500;
}

.project {
  color: #e0eaed;
  font-size: 0.9rem;
}
</style>