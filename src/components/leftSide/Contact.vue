<template>
  <div class="contactInfo">
    <h2 class="title">Contato</h2>
    <ul>
      <li>
        <a class="text" href="tel:+5515997624783">(15) 99762-4783</a>
      </li>
      <li>
        <a class="text" href="mailto:mike.rodrigues.lima@gmail.com">mike.rodrigues.lima@gmail.com</a>
      </li>
      <li>
        <a href="https://github.com/mikemajesty" target="_blank" rel="noopener noreferrer" class="text">GitHub</a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/mike-lima-77097993/" target="_blank" rel="noopener noreferrer" class="text">LinkedIn</a>
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

.contactInfo {
  margin-top: 28px;
}

ul {
  margin-top: 10px;
  list-style: none;
}

.text {
  color: #e0eaed;
  font-size: 0.88rem;
  overflow-wrap: anywhere;
}

.title {
  color: #fff;
  font-size: 1rem;
}

li {
  margin: 8px 0;
}
</style>