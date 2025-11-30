<script>
import {
  BButton,
  BCard,
  BCardBody,
  BCardFooter,
  BCardGroup,
  BCardHeader,
  BCardImg,
  BCardText,
  BCardTitle,
  BPagination,
} from 'bootstrap-vue-next'
import updateCountries from '@/api'

export default {
  components: {
    BPagination,
    BCard,
    BCardText,
    BButton,
    BCardImg,
    BCardTitle,
    BCardHeader,
    BCardBody,
    BCardFooter,
    BCardGroup,
  },

  data() {
    return {
      countries: [],
      currentPage: 1,
      perPage: 18,
      paginatedCountries: [],
    }
  },
  mounted() {
    console.log('hello')
    this.getCountries()
  },
  methods: {
    async getCountries() {
      this.countries = await updateCountries()
      this.updatePagination()
    },

    updatePagination() {
      const start = (this.currentPage - 1) * this.perPage
      const end = start + this.perPage
      this.paginatedCountries = this.countries.slice(start, end)
    },
  },

  watch: {
    currentPage() {
      this.updatePagination()
    },
  },
  computed: {
    countriesMatrix() {
      return this.paginatedCountries.reduce(
        (a, c) => (
          a.at(-1).length === 3 && a.push([]), //
          a.at(-1).push(c),
          a
        ),
        [[]]
      )
    },
  },
}
</script>

<template>
  <BCardGroup deck v-for="(row, rowIndex) in countriesMatrix" :key="rowIndex">
    <BCard
      v-for="(country, index) in row"
      :key="index"
      no-body
      img-alt="Flag"
      img-top
      class="m-2"
      @click="
        $router.push({
          name: 'CountryItem',
          params: { name: country.name.common },
        })
      "
    >
      <BCardHeader style="height: 190px; text-align: center">
        <BCardImg
          :src="country.flags.png"
          style="min-width: 0; max-height: 100%; max-width: 100%; width: unset"
        />
      </BCardHeader>
      <BCardBody>
        <BCardTitle>{{ country.name.common }}</BCardTitle>
      </BCardBody>
      <BCardFooter>
        <BCardText>
          <ul>
            <li>Capital: {{ country.capital ? country.capital[0] : 'N/A' }}</li>
            <li>Region: {{ country.region }}</li>
            <li>Languages: {{ country.language }}</li>
            <li>Population: {{ country.population }}</li>
          </ul>
        </BCardText>
      </BCardFooter>
    </BCard>
  </BCardGroup>

  <div class="my-3 mx-auto">
    <BPagination
      v-model="currentPage"
      :total-rows="countries.length"
      :per-page="perPage"
      class="justify-content-center"
    />
  </div>
</template>

<style scoped>
.m2 {
  height: 190px;
}
</style>
