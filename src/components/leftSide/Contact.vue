<template>
  <div class="contactInfo">
    <h3 class="title">Contatos</h3>
    <ul>
      <li>
        <span class="icon"><i class="fa fa-phone" aria-hidden="true"></i></span>
        <span class="text">(15) 99762-4783</span>
      </li>
      <li>
        <span class="icon"><i class="fa fa-envelope" aria-hidden="true"></i></span>
        <span class="text">mike.rodrigues.lima@gmail.com</span>
      </li>
      <li>
        <span class="icon"><i class="fa fa-github" aria-hidden="true"></i></span>
        <span class="text">https://github.com/mikemajesty</span>
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