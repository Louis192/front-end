<template>
  <div class="hello">
    <!-- so below we use "v-for" to iterate on the instance property,we do this by iterating booking over bookings so that the code
on line 8 and 9 will help display  booking id and booking email respectively,we also need to provide the primary key of the bookings array
thats why we have key="booking._id" and as such it will serve as the key to "v-for loop"  -->
    <table>
      <tr v-for="booking in bookings" :key="booking._id">
        <td>{{ booking._id }}</td>
        <td>{{ booking.email }}</td>
        <td>
           <!-- Clicking on the below link we take us to another component -->
          <router-link :to="`/booking/${booking._id}`">Details</router-link>
        </td>
      </tr>
    </table>
    <!-- also below we use v-for for the pages where pages is the array holding all the page numbers and also the v-binding expects a 
    unique key thats why we set 'key=i' -->
    <button v-for="i in pages" :key="i" @click="fetchPage(i)">{{ i }}</button>
  </div>
</template>

<script>
import { ref, onMounted, computed } from "vue";
export default {
  name: "PaginatedBookings",
  props: {
    msg: String,
  },
    // so "lastpage" in "const lastpage" below is a reactive object that holds the inner value "0"  and in order to access this inner value
  // we have to use ".value"
  setup() {
    const bookings = ref([]);
    const lastPage = ref(0);
    const perPage = ref(2);
    // So in compostion API the below lines code 47 to 55 are used to develop the computed property,also note that the "==>" can be replaced
    // with 'function' keyword,basically the "computed()" takes a getter function and returns a randomly reactive ref object
    const pages = computed(() => {
      var pages = [];
      // so in below code,lastpae.value will be used to access the inner value 0
      for (var i = 1; i <= lastPage.value; i++) {
        pages.push(i);
      }

      return pages;
    });
    const fetchPage = async function (page) {
      var response = await fetch(
        "/api/bookings?perPage=" + perPage.value + "&page=" + page
      );

      if (response.ok) {
        var data = await response.json();

        bookings.value = data.bookings;
        lastPage.value = data.pages;
      } else {
        alert(response.statusText);
      }
    };
    // so here when we call the 'fetchpage' from the "onMounted" below it will send a request to our backend and our backend from line 62-71
    // and this will help us to fetch the pages
    // onMounted(() => { fetchPage(1) });
    onMounted(function () {
      fetchPage(1);
    });
    // so in order to expose the above developed template properties we need below lines of codes from 81-84
    return {
      bookings,
      pages,
      fetchPage,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
