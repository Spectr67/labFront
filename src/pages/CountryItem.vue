<script>
import updateCountries from '@/api'

export default {
  data() {
    return {
      country: null,
      name: this.$route.params.name,
    }
  },

  async mounted() {
    const name = this.$route.params.name
    const countries = await updateCountries()
    this.country = countries.find(c => c.name.common === name)
  },
}
</script>

<template>
  <div v-if="country" class="container py-4">
    <div class="card shadow-sm mx-auto" style="max-width: 600px">
      <img
        :src="country.flags.png"
        :alt="country.flags.alt"
        class="card-img-top"
      />
      <div class="card-body">
        <h2 class="card-title text-center mb-3">
          {{ country.name.common }} {{ country.flag }}
        </h2>

        <ul class="list-group list-group-flush mb-3">
          <li class="list-group-item">
            <strong>Official Name:</strong> {{ country.name.official }}
          </li>
          <li class="list-group-item">
            <strong>Capital:</strong>
            {{ country.capital[0] }}
          </li>
          <li class="list-group-item">
            <strong>Region:</strong> {{ country.region }} /
            {{ country.subregion }}
          </li>
          <li class="list-group-item">
            <strong>Population:</strong>
            {{ country.population.toLocaleString() }}
          </li>
          <li class="list-group-item">
            <strong>Languages:</strong>
            {{ Object.values(country.languages).join(', ') }}
          </li>
          <li class="list-group-item">
            <strong>Currencies:</strong>
            {{
              Object.values(country.currencies)
                .map(c => c.name + ' (' + c.symbol + ')')
                .join(', ')
            }}
          </li>
        </ul>

        <div class="d-flex justify-content-around">
          <a
            :href="country.maps.googleMaps"
            target="_blank"
            class="btn btn-outline-primary"
            >Google Maps</a
          >
          <a
            :href="country.maps.openStreetMaps"
            target="_blank"
            class="btn btn-outline-secondary"
            >OpenStreetMap</a
          >
        </div>
      </div>
    </div>
  </div>

  <div v-else class="text-center py-5">
    <p class="text-muted">Country is not available</p>
  </div>
</template>
