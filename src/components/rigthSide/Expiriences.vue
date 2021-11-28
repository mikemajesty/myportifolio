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
          A Tegra foi onde eu iniciei minha carreira profissional, onde passei meus primeiros anos 
como Desenvolvedor. Tive muitos desafios e pude ter contato com diversas tecnologias e 
projeto...
        </p>
        <img class="img" title="C#" src="../../assets/cSharpe.png">
        <img class="img padding" title="NodeJs" src="../../assets/nodejs.png">
        <img class="img padding" title="Java"  src="../../assets/java.png">
        <img class="img padding" title="Python" src="../../assets/python.png">
        <img class="img padding" title="MongoDB" src="../../assets/mongo.png">
        <img class="img padding" title="MySQL" src="../../assets/mysql.png">
        <span class="vl"/>
        <img class="img padding" title="BR Partners" src="../../assets/brpartnes.jpeg">
        <img class="img padding" title="Banco PAN" src="../../assets/pan.jpg">
        <img class="img padding" title="Prudential" src="../../assets/prudential.jpg">
        <img class="img padding" title="GPA" src="../../assets/gpa.png">
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
          A IBM foi onde tive minha segunda oportunidade, tive o prazer de participar em um dos 
melhores times da empresa, onde éramos referência em inovação e tecnologias. O 
Projeto era um dashboard para o Santander, onde consumíamos uma grande quantidade 
de informações relevantes e fazíamos as mesmas de fácil entendimento para os diretores do banco...
        </p>
        <img class="img" title="NodeJs" src="../../assets/nodejs.png">
        <img class="img padding" title="MongoDB" src="../../assets/mongo.png">
        <img class="img padding" title="PostgreSQL" src="../../assets/postgres.png">
        <img class="img padding" title="Angular 2" src="../../assets/angular1.png">
        <img class="img padding" title="Jenkins" src="../../assets/jenkins.png">
        <img class="img padding" title="AWS" src="../../assets/aws.png">
         <img class="img padding" title="Jest" src="../../assets/jest.png">
        <span class="vl"/>
        <img class="img padding" title="Santander" src="../../assets/santander.png">
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
          Foi na Accenture onde tive a oportunidade de trabalhar com o IBM Watson, onde 
desenvolvíamos o chatbot do Santander, que era um projeto estratégico para a empresa. 
O Projeto foi e ainda é um sucesso...
        </p>
        <img class="img" title="NodeJs" src="../../assets/nodejs.png">
        <img class="img padding" title="Angular 4" src="../../assets/angular1.png">
        <img class="img padding" title="MongoDB" src="../../assets/mongo.png">
        <img class="img padding" title="IBM Cloud" src="../../assets/ibmCloud.png">
        <img class="img padding" title="Jenkins" src="../../assets/jenkins.png">
        <img class="img padding" title="Inteligência Artificial" src="../../assets/IA.png">
         <img class="img padding" title="Jest" src="../../assets/jest.png">
        <span class="vl"/>
        <img class="img padding" title="Santander" src="../../assets/santander.png">
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
          Foi na Dasa onde tive os maiores desafios da carreira, onde eramos responsáveis por um 
projeto que gerava os resultados de exames para toda a empresa e afiliados. Projeto 
referência de qualidade e tempo de entrega....
        </p>
        <img class="img" title="NodeJs" src="../../assets/nodejs.png">
        <img class="img padding" title="NestJs" src="../../assets/nestjs.png">
        <img class="img padding" title="React" src="../../assets/react.png">
        <img class="img padding" title="MongoDB" src="../../assets/mongo.png">
        <img class="img padding" title="PostgreSQL" src="../../assets/postgres.png">
        <img class="img padding" title="Azure" src="../../assets/azure.png">
        <img class="img padding" title="CosmosDB" src="../../assets/CosmosDB.png">
        <img class="img padding" title="API Managment Azure" src="../../assets/apiManagmentAzure.png">
        <img class="img padding" title="AWS" src="../../assets/aws.png">
        <img class="img padding" title="AWS Lambda" src="../../assets/awslambda.png">
        <img class="img padding" title="AWS SQS" src="../../assets/amazon-sqs.png">
        <img class="img" title="DynamoDB" src="../../assets/dynamodb.png">
        <img class="img padding" title="AWS S3" src="../../assets/awss3.png">
        <img class="img padding" title="AWS Elastic Search" src="../../assets/Elasticsearch.png">
        <img class="img padding" title="AWS API Gateway" src="../../assets/apigatway.png">
        <img class="img padding" title="Docker" src="../../assets/docker.png">
        <img class="img padding" title="Jenkins" src="../../assets/jenkins.png">
        <img class="img padding" title="Bitbucket" src="../../assets/bitbucket.png">
        <img class="img padding" title="Kubernetes" src="../../assets/kubernetes.png">
        <img class="img padding" title="Rancher" src="../../assets/rancher.png">
        <img class="img padding" title="Swagger API" src="../../assets/swagger.png">
        <img class="img padding" title="Jest" src="../../assets/jest.png">
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

