<template>
  <div class="max-w-6xl mx-auto px-4 md:px-8 lg:px-16 my-16">
    <div class="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
      <div class="px-6 pt-10 pb-6 rounded-md shadow-md border-t-8 border-blue-400 bg-white">
        <h4 class="px-3 py-1 inline-block rounded-full bg-blue-100 text-blue-800 text-xs uppercase">Confirmed</h4>
        <h1 class="mt-4 text-4.5xl text-gray-800 font-medium">{{ getCommaSeperatedValue(stats.confirmed.value) }}</h1>
        <p class="text-sm text-gray-800 font-light">Number of infected people</p>
        <p class="text-right text-xs text-gray-600 mt-8">{{ todayDate }}</p>
      </div>
      <div class="px-6 pt-10 pb-6 rounded-md shadow-md border-t-8 border-green-400 bg-white">
        <h4 class="px-3 py-1 inline-block rounded-full bg-green-100 text-green-800 text-xs uppercase">Recovered</h4>
        <h1 class="mt-4 text-4.5xl text-gray-800 font-medium">{{ getCommaSeperatedValue(stats.recovered.value) }}</h1>
        <p class="text-sm text-gray-800 font-light">Number of recovered people</p>
        <p class="text-right text-xs text-gray-600 mt-8">{{ todayDate }}</p>
      </div>
      <div class="px-6 pt-10 pb-6 rounded-md shadow-md border-t-8 border-red-400 bg-white">
        <h4 class="px-3 py-1 inline-block rounded-full bg-red-100 text-red-800 text-xs uppercase">Deaths</h4>
        <h1 class="mt-4 text-4.5xl text-gray-800 font-medium">{{ getCommaSeperatedValue(stats.deaths.value) }}</h1>
        <p class="text-sm text-gray-800 font-light">Number of deceased people</p>
        <p class="text-right text-xs text-gray-600 mt-8">{{ todayDate }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cards",
  props: {
    stats: {
      type: Object,
      required: true
    }
  },
  methods: {
    getCommaSeperatedValue: function(number) {
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
  },
  computed: {
    todayDate: function() {
      const months = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
      ];
      const daysInWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      const date = new Date();
      return `${daysInWeek[date.getDay()]} ${months[date.getMonth()]} ${date.getDate()} ${date.getFullYear()}`
    }
  }
}
</script>

<style>

</style>