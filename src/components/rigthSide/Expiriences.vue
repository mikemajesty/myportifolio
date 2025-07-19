<template>
  <div class="expiriences">
    <h2 class="title">Experiências</h2>
    <div class="box">
      <div class="yearCompany">
        <h5>2019 - 2020</h5>
        <h5>Accenture</h5>
      </div>
      <div class="text">
        <h4>Engenheiro de Software Senior</h4>
        <p>
          Na Accenture, participei de um projeto estratégico de alto impacto, contribuindo para o desenvolvimento de um chatbot para o Santander utilizando a tecnologia IBM Watson. A iniciativa visava otimizar a comunicação com os clientes e aumentar a eficiência dos serviços bancários. O projeto foi um sucesso, gerando melhorias significativas na experiência do usuário e se mantendo como uma referência dentro da organização.
        </p>
        <p><b class="p-skill">Nodejs(Express), MongoDB, IBM Cloud, Jenkins, AWS, Jest(Test unitários)</b></p>
      </div>
    </div>
    <div class="box">
      <div class="yearCompany">
        <h5>2020 - 2022</h5>
        <h5>Dasa</h5>
      </div>
      <div class="text">
        <h4>Engenheiro de Software Senior</h4>
        <p>
          Na Dasa, enfrentei os maiores desafios da minha carreira até o momento. Fui responsável por um projeto estratégico que gerava os resultados de exames para toda a empresa e suas afiliadas. A iniciativa se destacou pela alta complexidade técnica, exigência de qualidade e prazos agressivos, tornando-se uma referência interna pela sua relevância e impacto na operação da organização.
        </p>
        <p><b class="p-skill">Nodejs(Express, NestJs), MongoDB, PostgreSQL, Azure, API Managment Azure, AWS, AWS Lambda,
            AWS SQS
            DynamoDB, AWS S3, AWS Elastic Search, AWS API Gateway, Docker, Jenkins, Bitbucket, Kubernetes, Swagger API,
            Jest(Test unitários)
          </b></p>
      </div>
    </div>
    <div class="box">
      <div class="yearCompany">
        <h5>2022 - 2025</h5>
        <h5>Seedz</h5>
      </div>
      <div class="text">
        <h4>Staff Engineer</h4>
        <p>
          Na Seedz, atuei na criação e estruturação de microserviços com foco em manutenibilidade, escalabilidade e boas práticas de engenharia. Enfrentei desafios técnicos que impulsionaram meu crescimento profissional e aprimoraram minhas habilidades em arquitetura de sistemas. Projetei e desenvolvi do zero pelo menos três APIs atualmente em produção, que compõem a base de uma infraestrutura robusta e eficiente utilizada pela empresa.
        </p>
        <p><b class="p-skill">Nodejs(Nestjs,Express), Arquitetura de Software, MongoDB, PostgreSQL, Azure, AWS, AWS SQS,
            AWS Lambda,Jest(Test unitários)</b></p>
      </div>
    </div>
    <div class="box">
      <div class="yearCompany">
        <h5>2025 - Atual</h5>
        <h5>OLX</h5>
      </div>
      <div class="text">
        <h4>Engenheiro de Software III</h4>
        <p>
          Na OLX Brasil, atuo no desenvolvimento de funcionalidades para uma aplicação estratégica baseada em Kubernetes, utilizada por todas as empresas do grupo OLX. Meu trabalho contribui diretamente para a padronização e eficiência dos ambientes de infraestrutura, com foco em escalabilidade, confiabilidade e automação. A solução tem papel fundamental no ecossistema da companhia, impactando diversas áreas de negócio e operações em larga escala.
        </p>
        <p><b class="p-skill">Nodejs(Express), Golang, Kubernetes, PostgreSQL, AWS, Jest(Test unitários)</b></p>
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
  padding-top: 5%;
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
  color: #000000;
  font-weight: 300;
}

.p-skill {
  color: #000000;
  font: bold;
}

.img {
  margin-top: 2%;
  box-shadow: 4px 4px 4px -2px grey;
  border: 0.5px solid gray;
}

.img.padding {
  margin-left: 1%;
}

.vl {
  padding-left: 10%;
}
</style>
