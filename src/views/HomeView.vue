<script setup>
import { RouterLink } from 'vue-router'
import Cards from '../components/Cards.vue';
const props = defineProps({
  search: {
    type: String,
    required: false,
  }
})
</script>


<template>
  <main>
    <div class='flex-wrap flex mx-[9rem]'>
      <template v-for="post in posts" v-bind:key="post.nama">
        <div class='m-[3rem]'>
        <RouterLink v-if="post.idOC" :to="{ name: 'Profile', params:{id:post.idOC, mode:OC}}">
          <Cards :msg="post" :mode="mode" :id="post.idOC"/>
        </RouterLink>
        <RouterLink v-else-if="post.idFC" :to="{ name: 'Profile', params:{id:post.idFC, mode:FC}}">
          <Cards :msg="post" :mode="mode" :id="post.idFC"/>
        </RouterLink>
        </div>
      </template> 
    </div>
  </main>
</template>

<script>
export default {
  name:'home',
  data() {
    return {
      posts: [],
      postsFC:[],
      OC:'OC',
      FC: 'FC',
    };
  },

  methods: {
    async getData() {
      // this.search = this.$route.params.search;
      var link = "https://api.belajardimana.com";
      if (this.search){
        link = link+"?Search="+this.search;
      }
      console.log(link)
        try {
        const headers = { "Content-Type": "application/json"};
        fetch(link, { headers })
        .then(response => response.json())
        .then(data => (this.posts = data));
      } catch (error) {
        console.log(error);
      }
    }
      
  },

  created() {
    this.getData();
    console.log(this.posts);
  },
};
</script>