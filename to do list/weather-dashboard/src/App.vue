<script setup>
import { ref } from 'vue'

const city = ref('Amsterdam')
const temperature = ref(18)
const weather = ref('Cloudy')

function searchWeather() {
  if (city.value === 'London') {
    temperature.value = 16
    weather.value = 'Rainy'
  } else if (city.value === 'Paris') {
    temperature.value = 22
    weather.value = 'Sunny'
  } else {
    temperature.value = 18
    weather.value = 'Cloudy'
  }
}
</script>

<template>
  <div class="dashboard">

    <h1>🌤️ Weather Dashboard</h1>

    <div class="search">
      <input v-model="city" placeholder="Enter city">

      <button @click="searchWeather">
        Search
      </button>
    </div>

    <div class="weather-card">

      <h2>{{ city }}</h2>

      <div class="temperature">
        {{ temperature }}°C
      </div>

      <p>{{ weather }}</p>

      <div class="details">
        <div>
          💧
          <strong>70%</strong>
          <span>Humidity</span>
        </div>

        <div>
          💨
          <strong>12 km/h</strong>
          <span>Wind</span>
        </div>
      </div>

    </div>

  </div>
</template>