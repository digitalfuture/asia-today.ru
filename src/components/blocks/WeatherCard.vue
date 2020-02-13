<template>
  <v-card raised ripple dark class="weather-card mx-auto" max-width="400">
    <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-title class="headline"
          >{{ rawData.name
          }}<span class="grey--text weather-card__country font-weight-thin">
            / {{ site.nameRu }}</span
          ></v-list-item-title
        >
        <v-list-item-subtitle
          >{{ date }},
          <span v-for="(weather, index) of rawData.weather" :key="weather.id">{{
            `${weather.description}${
              index === rawData.weather.length ? '' : ','
            }`
          }}</span>
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-card-text>
      <v-row align="center">
        <v-col class="display-3" cols="6">
          23&deg;C
        </v-col>

        <v-col v-for="weather of rawData.weather" :key="weather.id" cols="3">
          <v-img
            :src="getIcon(weather.icon)"
            alt="Weather icon"
            width="92"
          ></v-img>
        </v-col>
      </v-row>
    </v-card-text>

    <v-list-item>
      <v-list-item-icon>
        <v-icon>mdi-weather-windy</v-icon>
      </v-list-item-icon>
      <v-list-item-subtitle>23 km/h</v-list-item-subtitle>
    </v-list-item>

    <v-list-item>
      <v-list-item-icon>
        <v-icon>mdi-cloud-download</v-icon>
      </v-list-item-icon>
      <v-list-item-subtitle>48%</v-list-item-subtitle>
    </v-list-item>

    <v-slider
      v-model="time"
      :max="6"
      :tick-labels="labels"
      class="mx-4"
      ticks
    ></v-slider>

    <v-list class="transparent">
      <v-list-item v-for="item in forecast" :key="item.day">
        <v-list-item-title>{{ item.day }}</v-list-item-title>

        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-subtitle class="text-right">
          {{ item.temp }}
        </v-list-item-subtitle>
      </v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-card-actions>
      <v-btn text>Full Report</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { DateTime } from 'luxon'

export default {
  name: 'weather-card',
  props: ['site'],
  data() {
    return {
      apiKey: 'd7deed3aab5da688488c3b612441e5d6',
      baseUrl: 'https://api.openweathermap.org/data/2.5/',
      rawData: {}
    }
  },
  computed: {
    date() {
      return DateTime.fromISO(new Date(), { locale: 'ru' }).toLocaleString(
        DateTime.DATE_FULL
      )
    }
  },
  methods: {
    getIcon(id) {
      return `http://openweathermap.org/img/wn/${id}@2x.png`
    },
    fetchWeather() {
      fetch(
        `${this.baseUrl}weather?q=${this.site.capital}&units=metric&APPID=${this.apiKey}&lang=ru`
      )
        .then(res => res.json())
        .then(this.setResults)
    },
    setResults(results) {
      this.rawData = results
    }
  },
  created() {
    this.fetchWeather(this.siteName)
  }
}
</script>

<style lang="scss" scoped>
// .weather-card {
//   .weather-card__country {
//   }
// }
</style>
