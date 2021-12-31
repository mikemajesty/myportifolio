<template>
  <div class="contactInfo">
    <h3 class="title">Contatos</h3>
    <ul>
      <li>
        <span class="icon"><i class="fa fa-phone" aria-hidden="true"></i></span>
        <a class="text"><a href="https://wa.me/+5515997624783" class="text"  target="_blank">(15) 99762-4783</a></a>
      </li>
      <li>
        <span class="icon"><i class="fa fa-envelope" aria-hidden="true"></i></span>
        <a class="text" href="mailto:mike.rodrigues.lima@gmail.com">mike.rodrigues.lima@gmail.com</a>
      </li>
      <li>
        <span class="icon"><i class="fa fa-github" aria-hidden="true"></i></span>
        <a href="https://github.com/mikemajesty" title="Click para mais informações" target="_blank" class="text">https://github.com/mikemajesty</a>
      </li>
      <li>
        <span class="icon"><i class="fa fa-linkedin" aria-hidden="true"></i></span>
        <a href="https://www.linkedin.com/in/mike-lima-77097993/" title="Click para mais informações" target="_blank" class="text">https://www.linkedin.com/mike</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ContactInfo'
}
</script>

<style scoped>

.contactInfo{
  padding-top: 30px;
}

a {
  text-decoration: none
}

.icon {
  display: inline-block;
  width: 28px;
  font-size: 20px;
}

.fa.fa-phone {
  padding-left: 5%;
}

.fa.fa-github {
  padding-left: 5%;
}

ul {
  padding-top: 5%;
}

i {
  color: #03a9f4;
}

.text {
  font-size: 13.1px;
  color: aliceblue;
}


span {
  font-weight: 400;
  color: aliceblue;
}

.title {
  font-weight: 700;
  color: aliceblue;
}

li {
  margin-bottom: 15px;
  cursor: pointer;
  list-style: none;
}

h5 {
  font-weight: 500;
}

</style>