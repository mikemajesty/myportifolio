<template>
  <div class="expiriences">
    <h2 class="title">Experiências</h2>
    <div class="box">
      <div class="yearCompany">
        <h5>2018 - 2019</h5>
        <h5>IBM</h5>
      </div>
      <div class="text">
        <h4>Engenheiro de Software Pleno</h4>
        <p>
          Na IBM, tive minha segunda oportunidade e tive o prazer de integrar um dos melhores times da empresa, reconhecido por sua inovação e expertise tecnológica. Participei de um projeto desafiador e de grande relevância: o desenvolvimento de um dashboard para o Santander. Nesse projeto, nossa equipe consumia e processava grandes volumes de dados relevantes, transformando essas informações em insights acessíveis e de fácil compreensão para os diretores do banco, auxiliando na tomada de decisões estratégicas. Foi uma experiência rica, onde pude aplicar conhecimentos de análise de dados, visualização e tecnologias de ponta, contribuindo diretamente para o sucesso do cliente.
        </p>
        <p><b class="p-skill">Nodejs(Express), MongoDB, PostgreSQL, AWS, Jest(Test unitários)</b></p>
      </div>
    </div>
    <div class="box">
      <div class="yearCompany">
        <h5>2019 - 2020</h5>
        <h5>Accenture</h5>
      </div>
      <div class="text">
        <h4>Engenheiro de Software Senior</h4>
        <p>
          Tive a oportunidade de trabalhar na Accenture em um projeto estratégico de grande importância, onde contribuímos no desenvolvimento de um chatbot para o Santander utilizando a tecnologia IBM Watson. Foi uma experiência enriquecedora, que envolveu a criação de uma solução inovadora para otimizar a comunicação com os clientes e melhorar a eficiência dos serviços bancários. O projeto foi um grande sucesso, impactando positivamente a experiência do usuário e continua a ser uma referência para a empresa até hoje.
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
          Foi na Dasa que enfrentei os maiores desafios da minha carreira. Fomos responsáveis por um projeto crucial, que gerava os resultados de exames para toda a empresa e seus afiliados. Esse projeto se destacou não apenas pela complexidade, mas também pela alta exigência em termos de qualidade e tempo de entrega, tornando-se uma verdadeira referência dentro da organização
        </p>
        <p><b class="p-skill">Nodejs(Express, NestJs), MongoDB, PostgreSQL, Azure, API Managment Azure, AWS, AWS Lambda, AWS SQS
          DynamoDB, AWS S3, AWS Elastic Search, AWS API Gateway, Docker, Jenkins, Bitbucket, Kubernetes, Swagger API, Jest(Test unitários)
        </b></p>
      </div>
    </div>
    <div class="box">
      <div class="yearCompany">
        <h5>2022 - atual</h5>
        <h5>Seedz</h5>
      </div>
      <div class="text">
        <h4>Full Stack Developer</h4>
        <p>
          Na Seedz, tive a oportunidade de criar e estruturar microserviços com um foco essencial em manutenibilidade e escalabilidade. Enfrentei desafios que me permitiram evoluir significativamente como profissional. Hoje, a empresa conta com pelo menos três APIs que eu projetei e desenvolvi desde o início, o que contribuiu diretamente para a infraestrutura robusta e eficiente da companhia.
        </p>
        <p><b class="p-skill">Nodejs(Nestjs,Express), MongoDB, PostgreSQL, Azure, AWS, AWS SQS, AWS Lambda,Jest(Test unitários)</b></p>
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

