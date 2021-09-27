<template>
<div class="container">
   <NavBar></NavBar>
   <WeatherTemperature></WeatherTemperature>
</div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import WeatherTemperature from '@/components/WeatherTemperature.vue';
export default{
  name: 'App',
  components:{
    NavBar,
    WeatherTemperature
}
}
</script>

<style>

*{
  margin:0;
  font-family: sans-serif;
}

</style>
