<script setup>
import Cards from '../components/Cards.vue';
</script>


<template>
  <main>
    <div class='flex-wrap flex mx-[9rem]'>
      <template v-for="post in posts" v-bind:key="post.id">
        <Cards :msg="post.nama"/>
      </template>
      <!-- <Cards/>
      <Cards/>
      <Cards/>
      <Cards/>
      <Cards/>
      <Cards/>
      <Cards/>
      <Cards/><Cards/>
      <Cards/>
      <Cards/>
      <Cards/><Cards/>
      <Cards/>
      <Cards/>
      <Cards/> -->
      
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
        // let response = await fetch("http://api.belajardimana.com/api");
        // this.posts = await response.json();
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
  },
};
</script>