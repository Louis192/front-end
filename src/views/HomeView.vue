<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <PaginatedBookings  msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import PaginatedBookings from '@/components/PaginatedBookings.vue'
export default {
  name: 'HomeView',
  components: {
    // HelloWorld
    PaginatedBookings
  }
}
</script>
