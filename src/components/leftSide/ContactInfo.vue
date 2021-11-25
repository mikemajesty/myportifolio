<template>
  <div class="contactInfo">
    <h3 class="title">Contatos</h3>
    <ul>
      <li>
        <span class="icon"><i class="fa fa-phone" aria-hidden="true"></i></span>
        <span class="text">+55 (15) 99762-4783</span>
      </li>
      <li>
        <span class="icon"><i class="fa fa-envelope" aria-hidden="true"></i></span>
        <span class="text">mikee_2008@hotmail.com</span>
      </li>
      <li>
        <span class="icon"><i class="fa fa-github" aria-hidden="true"></i></span>
        <span class="text">https://github.com/mikemajesty</span>
      </li>
      <li>
        <span class="icon"><i class="fa fa-map-marker" aria-hidden="true"></i></span>
        <span class="text">São Paulo, Brasil</span>
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

.contactInfo{
  padding-top: 30px;
}

.icon {
  display: inline-block;
  width: 30px;
  font-size: 15px;
}

i {
  color: #fff;
}

span {
  font-weight: 400;
}

.title {
  font-weight: 700;
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