<!-- <template>
  <AttractionsList :attractions="attractions"/>
</template>
<script>
import { AttractionsPage } from '../components/AttractionList.vue';
import axios from 'src/boot/axios';

export default ({

    name:"PhuketAttractions",
    components:{
      AttractionsPage,
    },
    data(){
      return{
        attractions: [],
      }
    },
    async created(){
     const response=await axios.get('/api/attractions');
     const attractions=response.data;
     this.attractions=attractions;
    }
})
</script> -->


<!--
<template>
  <q-page>
    <q-page-container>
      <h1 class="text-h6 q-mb-md">Attractions</h1>
      <div class="q-gutter-md">
        <attraction-card
          v-for="attraction in attractions"
          :key="attraction.id"
          :attraction="attraction"
          @click="goToAttractionDetails(attraction.id)"
        />
      </div>
    </q-page-container>
  </q-page>
</template>

<script>
import axios from 'axios';

import AttractionCard from '../components/AttracionCard.vue';

export default {
  components: {
    AttractionCard,
  },
  data() {
    return {
      attractions: [],
    };
  }, -->

<!--
  mounted() {
  console.log('API URL:', process.env.VUE_APP_API_URL);

  axios.get(`${process.env.VUE_APP_API_URL}/attractions`)
    .then(response => {
      this.attractions = response.data;
    })
    .catch(error => {
      console.error('Error fetching attractions:', error);
    });
},
};

</script> -->

<!--
 <template>
  <div>
  <h1>PhuketAttractions</h1>
  <AttractionCard :attractions="attractions"/> -->

  <!-- <div class="grid-wrap">
    <div class="attraction-item"
    v-for="attraction in attractions"
    :key="attraction">
      <img :src="attraction.image_url"/>
      <h3 class="attraction-name">{{ attraction.name }}</h3>
      <p class="attraction-description">{{ attraction.description }}</p>
         <button> View Details</button>


  </div>
    </div> -->
    <!-- </div>
</template> -->

<!-- <script>
import AttractionCard from '../components/AttractionCard.vue'
import axios from 'axios'
export default {
   name: "AttractionList",
   components:{AttractionCard,
  },

 data() {
  return {
    attractions:[],
   }
 }, -->


<!-- //  async created() {
//   try {
//     console.log('API URL:', process.env.VUE_APP_API_URL);
//     const response = await axios.get('api/attractions');
//     const attractions = response.data;
//     this.attractions = attractions;
//   } catch (error) {
//     console.error('Error fetching attractions:', error);
//     // Log the response if it exists
//     if (error.response) {
//       console.log('Response:', error.response.data);
//     }
//     // Add the following line to throw the error again
//     throw error;
//   }
//  }}
// </script> -->
<!-- //   async created() {
//     const response = await axios.get('/api/attractions');
//     const attractions = response.data;
//        this.attractions = attractions;
// }
// } -->

<!-- <template>
  <div>
  <h1>Products</h1>
  <AttractionsCard :attractions="attractions"/>
</div>
</template>
<script>
import AttracionCard from '../components/AttracionCard.vue'
import axios from '../boot/axios';
import { mounted } from 'vue';
export default {
  name: "PhuketAttractions",
  components: {
    AttracionCard,
  },
  data() {
    return {
      attractions: [],
    }
  },
mounted(){
  this.$api.get('api/attractions')
.then(response => {
      this.attractions = response.data;
    })
    .catch(error => {
      console.error('Error fetching attractions:', error);
    });
  }
} -->
<!-- </script> -->



<!-- {/* <template>
  <div>
    <h1>Attractions</h1>
    <AttractionsCard :attractions="attractions" />
  </div>
</template>

<script>
import axios from 'axios';
import AttractionsCard from '../components/AttractionsCard.vue'; -->
<!--
// export default {
//   name: "AttractionsPage",
//   components: {
//     AttractionsCard,
//   },
//   data() {
//     return {
//       attractions: [],
//     };
//   },
//   mounted() {
//     axios.get('/api/attractions')
//       .then(response => {
//         this.attractions = response.data;
//       })
//       .catch(error => {
//         console.error('Error fetching attractions:', error);
//       });
//   },
// };
</script> */} -->


<template>
  <div class="attractions-grid">
    <div class="attraction-item" v-for="attraction in attractions" :key="attraction.at_id">
      <img :src="attraction.image_url" alt="Attraction Image" />
      <h3 class="attraction-name">{{ attraction.name }}</h3>
      <p class="attraction-description">{{ attraction.description }}</p>
         <!-- <router-link :to="'/attractions/' + this.$route.params.at_id"> -->
           <!-- <routerLink :to="{name: 'onView', params:{id:attraction.at_id}}"> -->
         <!-- <q-btn flat color="primary" label=" view" @click="onView"/> -->
         <!-- ><h5 class="card-title">{{ attraction.name }}</h5> -->
        <!-- </routerLink> -->
        <router-link :to="'/attractions/' + attraction.at_id">
        <button @click="viewDetails(attraction.at_id)">View Details</button>
      </router-link>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import { defineComponent } from 'vue'
export default defineComponent({
  name: "PhuketAttractions",
  data() {
    return {
      attractions: [],
    };
  },
  methods:{
    getdata(){
      this.$api.get('api/attractions').then((res)=>{
        console.log(res.data)
      }).catch();
  },
},

viewDetails(at_id){

  console.log(at_id)
      this.$router.push(
        // name:'onView',
        // params:{id: this.product.at_id}

        `/attractions/${at_id}`)
  },


  async created() {
    try {
      const ax = axios.create({
  baseURL: "http://localhost:3000/api",
  headers:{ "Content-Type": "application/json"}
 })
      const response = await ax.get('/attractions');
      this.attractions = response.data;
    } catch (error) {

      console.error(error);

    }
  },
});

</script>
<style scoped>
.attractions-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.attraction-item {
  border: 1px solid #ccc;
  padding: 10px;
  text-align: center;
}

.attraction-item img {
  max-width: 100%;
  height: auto;
}
</style>
