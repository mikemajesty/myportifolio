<template>
  <LeftSize/>
  <RightSize/>
</template>

<script>
import LeftSize from './components/leftSide/LeftSize.vue'
import RightSize from './components/rigthSide/RightSize.vue'

export default {
  name: 'App',
  components: {
    LeftSize,
    RightSize
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700,800,900&display=swap');
*
{
  margin: 0;
  padding: 0;
  box-sizing: 0;
  font-family: 'Poppins', sans-serif;
}
#app {
  position: relative;
  width: 100%;
  max-width: 1000px;
  min-height: 1000px;
  margin: 50px;
  background: #fff;
  display: grid;
  grid-template-columns: 1fr 2fr;
  box-shadow: 2px 10px 6px -4px black;
}
body
{
  background: lightblue;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
</style>
