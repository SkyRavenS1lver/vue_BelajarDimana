<script setup>
import Cards from '../components/Cards.vue';
</script>


<template>
  <main>
    <div class='flex-wrap flex mx-[9rem]'>
      <template v-for="post in posts" v-bind:key="post.id">
        <Cards :msg="post"/>
      </template>   
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      posts: [],
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