import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
<<<<<<< HEAD
import VueApexCharts from "vue3-apexcharts";
createApp(App).use(router).use(VueApexCharts).mount('#app')
// createApp(App).use(router).mount('#app')
=======
import "bootstrap/dist/css/bootstrap.min.css"
import VueApexCharts from "vue3-apexcharts";

createApp(App).use(router).use(VueApexCharts).mount('#app')

createApp(App).use(router).use(router).use(router).mount('#app')
>>>>>>> 117c001c9f531e67dff6353148ff374f516ed8f3
