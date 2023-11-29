<!--
<template>
  <div class="img-wrap">
    <img :src="attraction.image_url"/>
    <h1>PhuketAttractionsDetailed</h1>
    <div class="attraction-details">
      <h1>{{ attraction.name }}</h1>
      <h3 class="description">{{ attraction.description }}</h3>

    </div>
  </div>



  </template>

  <script>
  import { attractions } from '../temp-data'
  import NotFound from'./ErrorNotFound.vue'

  export default {
    name:'AttractiondetailedPage' ,
    data(){
    return{
      attraction: attractions.find(attraction => attraction.id === this.$route.params.attractionId),
    }
    }
  }
  </script> -->

   <!-- <template>
    <q-page>
      <q-page-container>
        <h1 class="text-h6 q-mb-md">{{ attraction.name }}</h1>
        <div>
          <q-img :src="attraction.image_url" class="q-mb-md" />
          <p>{{ attraction.description || 'No description available' }}</p>
          <p>{{ attraction.detailed_description || 'No detailed description available' }}</p>
          <p>Location: {{ attraction.location || 'Not specified' }}</p>
          <p>Things to do: {{ attraction.things_to_do || 'Not specified' }}</p>
        </div>
      </q-page-container>
    </q-page>
  </template>

  <script>
  import axios from 'axios';

  export default {
    data() {
      return {
        attraction: null,
      };
    },
    mounted() {
      const attractionId = this.$route.params.id;
      axios.get(`${process.env.VUE_APP_API_URL}/attractions/${attractionId}`)
        .then(response => {
          this.attraction = response.data;
        })
        .catch(error => {
          console.error('Error fetching attraction details:', error);
        });
    },
  };
  </script> -->

<!-- <template>
  <div v-if="product">
      <div class="img-wrap">
        <img :src="attraction.image_url" />
      </div>
      <div class="Attraction-details">
        <h1>{{ attraction.name }}</h1>
        <h3 class="price">{{ attraction.description}}</h3>
        <button @click="addToCart" class="add-to-cart" v-if="user && !itemIsInCart">Add to cart</button>
        <button class="grey-button" v-if="user && itemIsInCart">Item is already in cart</button>
        <button v-if="!user" @click="signIn">Sign in to add to cart</button>
      </div>
  </div>
  <div v-else>
    <NotFoundPage />
  </div>
</template>

<script>
import axios from 'axios';
import NotFoundPage from './NotFoundPage.vue';

export default {
  name: "ProductDetailPage",
  props: ['user'],
  data() {
    return {
      product: {},
      cartItems: [],
    }
  },
  computed: {
    itemIsInCart() {
      return this.cartItems.some(item => item.id === this.$route.params.productId);
    }
  },
  methods: {
    async addToCart() {
      await axios.post(`/api/users/${this.user.uid}/cart`, { id: this.$route.params.productId });
      alert('Successfully added item to cart!');
    },
    signIn() {
      const email = prompt('Please enter your email to sign in:');
      const auth = getAuth();
      const actionCodeSettings = {
        url: `yoururl/products/${this.$route.params.productId}`,
        handleCodeInApp: true,
      };
      sendSignInLinkToEmail(auth, email, actionCodeSettings)
        .then(() => {
          window.localStorage.setItem('emailForSignIn', email);
          alert('A login link was sent to the email you provided');
        })
        .catch((error) => {
          console.log(error);
        });
    }
  },
  components: {
    NotFoundPage
  },
  watch: {
    async user(newUserValue) {
      if (newUserValue) {
        const cartResponse = await axios.get(`/api/users/${newUserValue.uid}/cart`);
        const cartItems = cartResponse.data;
        this.cartItems = cartItems;
      }
    }
  },
  async created() {
    const auth = getAuth();
    if (isSignInWithEmailLink(auth, window.location.href)) {
      let email = window.localStorage.getItem('emailForSignIn');
      if (!email) {
        email = window.prompt('Please provide your email for confirmation');
      }
      signInWithEmailLink(auth, email, window.location.href)
        .then(() => {
          window.localStorage.removeItem('emailForSignIn');
          alert('Successfully signed in!');
        })
        .catch((error) => {
          console.log(error);
        });
    }

    const response = await axios.get(`/api/products/${this.$route.params.productId}`);
    const product = response.data;
    this.product = product;

    if (this.user) {
      const response = await axios.get(`/api/users/${this.user.uid}/cart`);
      const cartItems = response.data;
      this.cartItems = cartItems;
    }
  }
}
</script> -->






<!-- <template>
  <div>
    <h2>{{ attraction.name }}</h2>
    <img :src="attraction.url" alt="Attraction Image" />
    <p>{{ attraction.description }}</p>
    <p>{{ attraction.detailed_description}}</p>
    <p>{{ attraction.location}}</p>
    <p>{{ attraction.things_to_do}}</p>
     Display other details based on your requirements -->
  <!-- </div> -->
<!-- </template>

<script>
import axios from 'axios';

export default {
  name: "AttractionDetails",
  data() {
    return {
      attraction: {},
    };
  },

  async created(){

-- AttractionDetail.vue -->
<template>
  <div v-if="attraction">
  <div class="attraction-detail">
    <img :src="attraction.image_url" alt="Attraction Image" />
    <h2 class="attraction-nname">{{ attraction.name }}</h2>
    <p class="attraction-ddescription">{{ attraction.description }}</p>
    <p class="detailed-detailed-description">{{ attraction.detailed_description }}</p>
    <p class="locations">Locations: {{ attraction.location }}</p>
    <p class="things-to-do">Things to do: {{ attraction.things_to_do }}</p>
    <p class="url">URL: <a :href="attraction.url" >{{ attraction.url }}</a></p>

    <!-- Add more details as needed -->
  </div>
</div>
<div v-else>
  <NotFoundPage/>
</div>





</template>

<script>
import axios from 'axios';
import { defineComponent } from 'vue';
import NotFoundPage from './ErrorNotFound.vue'
export default defineComponent({
  name: 'AttractionDetailed',
  data() {
    return {
      attraction:{},
    }
  },
  // methods:{
  //   getdata(){
  //       this.$api
  //       .get('/attractions/'+this.$route.params.at_id,{Id})
  //       .then((res)=>{
  //         if(res.status == 200){
  //           console.log(this.$route.params.at_id);
  //         this.rows = res.data
  //       }
  //       })
  //       .catch((err)=>{
  //       ErrorHandle(err.response.status,err,this.$router)
  //       })
  //   },

  // },


  async created() {
    try {
      const ax = axios.create({
        baseURL: 'http://localhost:3000/api',
        headers: { 'Content-Type': 'application/json' },
      });



    const response = await ax.get(`/attractions/${this.$route.params.at_id}`);

       const attraction=response.data
      this.attraction = attraction;
    } catch (error) {
      console.error(error);
    }
  },


});
</script>

<style scoped>
/* Add styling for attraction detail if needed */
</style>
