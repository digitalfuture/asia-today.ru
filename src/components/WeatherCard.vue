<template>
  <div class="weather-card">
    <v-card v-if="temp" dark class="blue-grey darken-4">
      <v-list-item two-line>
        <v-list-item-content>
          <v-list-item-title class="title"
            >{{ city }}
            <span class="grey--text weather-card__country font-weight-thin">
              / {{ site.nameRu }}</span
            ></v-list-item-title
          >
          <v-list-item-subtitle
            ><div
              class="font-weight-light blue-grey--text text--darken-1 weather-card__date font-italic"
            >
              {{ dateTime }}
            </div>
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider />

      <v-container>
        <v-row no-gutters>
          <v-col>
            <v-list-item-subtitle class="caption">
              <v-list-item v-for="(item, index) of weather" :key="item.id">
                {{
                  `${item.description.toUpperCase()}${
                    index === weather.length - 1 ? '' : ','
                  }`
                }}
              </v-list-item>
            </v-list-item-subtitle>
          </v-col>
        </v-row>

        <v-row no-gutters class="pb-3">
          <v-col cols="9">
            <v-list-item two-line class="pr-0">
              <v-list-item-content>
                <v-list-item-title class="display-3">
                  {{ temp }}&deg;C
                </v-list-item-title>

                <v-list-item-subtitle class="caption">
                  <span class="grey--text">ОЩУЩАЕТСЯ </span
                  ><span>{{ feelsLike }}&deg;C</span>
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-col>

          <v-col cols="3">
            <v-tooltip
              v-for="item of weather"
              :key="item.id"
              cols="12"
              class="pl-0"
              top
              color="rgba(255, 255, 255, 0)"
              content-class="weather-card__tooltip"
            >
              <template v-slot:activator="{ on }">
                <v-img
                  :src="getIcon(item.icon)"
                  :alt="`${item.description}`"
                  height="80"
                  width="80"
                  v-on="on"
                ></v-img>
              </template>
              <v-chip dark small>{{ item.description }}</v-chip>
            </v-tooltip>
          </v-col>
        </v-row>

        <v-divider />

        <v-row no-gutters class="mt-5 caption">
          <v-col cols="12">
            <span class="grey--text text--darken-1">ВЕТЕР: </span>{{ wind }}
            <span class="grey--text text--darken-1">КМ/Ч</span>
          </v-col>

          <v-col cols="12">
            <span class="grey--text text--darken-1">ДАВЛЕНИЕ: </span>
            {{ pressure }}<span class="grey--text text--darken-1"> ПА</span>
          </v-col>

          <v-col cols="12">
            <span class="grey--text text--darken-1">ВЛАЖНОСТЬ: </span>
            {{ humidity }}<span class="grey--text text--darken-1"> %</span>
          </v-col>
        </v-row>
      </v-container>
    </v-card>

    <v-skeleton-loader v-else type="image" />
  </div>
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
      dateTime: '',
      city: '',
      temp: null,
      feelsLike: '',
      raw: {},
      weather: [],
      pressure: '',
      wind: '',
      humidity: ''
    }
  },
  methods: {
    getDate(timezone) {
      return DateTime.utc()
        .plus({ seconds: timezone })
        .setLocale('ru')
        .toLocaleString(DateTime.DATETIME_MED)
    },
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
      this.raw = results
      this.dateTime = this.getDate(results.timezone)
      this.city = results.name
      this.temp = Math.round(results.main.temp)
      this.feelsLike = Math.round(results.main.feels_like)
      this.pressure = results.main.pressure
      this.wind = results.wind.speed
      this.humidity = results.main.humidity
      this.weather = results.weather
    }
  },
  created() {
    this.fetchWeather(this.siteName)
  }
}
</script>

<style lang="scss">
.weather-card {
  .weather-card__date {
    font-family: 'Noto Serif', serif;
  }
}
</style>
