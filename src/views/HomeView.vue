<script setup>
import { RouterLink } from 'vue-router'
import Cards from '../components/Cards.vue';
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
      FC: 'FC'
    };
  },

  methods: {
    async getData() {
      try {
        const headers = { "Content-Type": "application/json"};
        fetch("https://api.belajardimana.com", { headers })
        .then(response => response.json())
        .then(data => (this.posts = data));
      } catch (error) {
        console.log(error);
      }
    },
  },

  created() {
    this.getData();
    console.log(this.posts);
  },
};
</script>