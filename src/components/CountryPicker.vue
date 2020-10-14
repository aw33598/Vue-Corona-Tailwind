<template>
  <div class="flex items-center justify-center my-16">
    <div class="relative">
      <button @click="showCountryPicker = !showCountryPicker" class="flex items-center justify-between px-3 py-2 rounded-md shadow outline-none border focus:border-blue-500 focus:outline-none">
        <div class="flex items-center space-x-3">
          <img class="h-5" :src="require(`@/assets/flags/${selectedCountry}.svg`)" :alt="selectedCountry">
          <p class="text-sm text-gray-800 w-64 lg:w-72 text-left">{{ selectedCountry }}</p>
        </div>
        <span>
          <svg class="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="none" stroke="currentColor">
            <path d="M7 7l3-3 3 3m0 6l-3 3-3-3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </span>
      </button>

      <div v-show="showCountryPicker" class="absolute rounded-md shadow outline-none border focus:outline-none mt-2 h-48 overflow-y-scroll bg-white mb-16">
        <ul class="list-none">
          <li :class="country === selectedCountry ? 'bg-blue-100' : null" @click="setCountry(country)" v-for="country in countries" :key="country" class="cursor-pointer flex justify-between px-3 py-2 bg-white hover:bg-blue-100">
            <div class="flex items-center space-x-3">
              <img class="h-5" :src="require(`@/assets/flags/${country}.svg`)" :alt="country">
              <p :class="country === selectedCountry ? 'font-medium' : null" class="text-sm text-gray-800 w-64 lg:w-72 text-left">{{ country }}</p>
            </div>
            <span>
              <svg v-if="country === selectedCountry" class="h-5 w-5 text-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CountryPicker",
  props: {
    countries: {
      type: Array,
      required: true
    },
    selectedCountry: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      showCountryPicker: false
    }
  },
  methods: {
    setCountry(country) {
      this.$emit('get-covid-data', country);
      this.showCountryPicker = false;
    }
  }
}
</script>

<style>

</style>