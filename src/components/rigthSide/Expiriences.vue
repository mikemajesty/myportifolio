<template>
  <div class="expiriences">
    <h2 class="title">Experiência profissional</h2>
    <div class="box">
      <div class="yearCompany">
        <h5>2019 - 2020</h5>
        <h5>Accenture</h5>
      </div>
      <div class="text">
        <h3>Engenheiro de Software Sênior</h3>
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
        <h3>Engenheiro de Software Sênior</h3>
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
        <h3>Staff Engineer</h3>
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
        <h3>Engenheiro de Software III</h3>
        <p>
          Desenvolvo e mantenho o backend de uma plataforma interna que permite aos times publicar aplicações em Kubernetes. Sou o único desenvolvedor backend da plataforma e trabalho em parceria com um desenvolvedor frontend, um Product Owner e um engenheiro de infraestrutura, além de apoiar os desenvolvedores que a utilizam.
        </p>
        <p>
          Implementei uma biblioteca de integração com Crossplane para validar o estado e criar recursos de infraestrutura declarados pelos usuários em YAML. Também conduzi a refatoração do sistema de JavaScript para TypeScript, tornando sua evolução e manutenção cerca de 40% mais simples.
        </p>
        <p>
          Eliminei a duplicidade de estado entre PostgreSQL e Kubernetes, reduzindo o armazenamento em 25% e os acessos ao banco em 30%. Essa otimização permitiu reduzir a instância do PostgreSQL para uma opção de menor custo.
        </p>
        <p><b class="p-skill">TypeScript, Node.js, Go, Kubernetes, Crossplane, PostgreSQL, AWS</b></p>
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
  margin-bottom: 42px;
}

.expiriences:last-child {
  margin-bottom: 0;
}

.title {
  margin-bottom: 20px;
  color: #173b49;
  font-size: 1.45rem;
  letter-spacing: -0.02em;
}

.box {
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin: 24px 0;
}

h5 {
  color: #667780;
  font-weight: 600;
}

h3 {
  margin-bottom: 7px;
  color: #137b8a;
  font-size: 1.05rem;
}

.yearCompany {
  min-width: 150px;
}

p {
  margin: 6px 0;
  color: #455760;
}

.p-skill {
  color: #314a55;
  font-weight: 650;
}

@media (max-width: 600px) {
  .box {
    flex-direction: column;
    gap: 5px;
  }

  .yearCompany {
    display: flex;
    gap: 10px;
    min-width: 0;
  }
}
</style>
