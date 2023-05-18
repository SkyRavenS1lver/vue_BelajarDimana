<script setup>
import { RouterView } from 'vue-router'
</script>

<template>

  <header>
    <NavBar :modelValue="searching" @update:modelValue="newValue=>searching=newValue" :value="searching"/>
  </header>

  <!-- <RouterView v-if="searching==''" :model="filteredPost" style="z-index: 0;"/> -->
  <RouterView :model="filteredPost" style="z-index: 0;"/>
</template>
<script>
import NavBar from './components/NavBar.vue';
export default {
  components: { NavBar },
  data() {
    return {
      posts: [],
      filteredPost: [],
      searching:'',
      Search:'',
    };
  },

  methods: {
    async getData() {
      // this.search = this.$route.params.search;
      var link = "https://api.belajardimana.com";
        try {
        const headers = { "Content-Type": "application/json"};
        fetch(link, { headers })
        .then(response => response.json())
        .then(data => (this.posts = data));
      } catch (error) {
        console.log(error);
      }
    },
    Search($searches){
      return this.posts.filter((post)=>
       post.nama.toLowerCase().includes($searches.toLowerCase()));
    }      
  },

  created() {
    this.getData();
    console.log(this.posts);
  },
  watch: {
    searching: function(newQuestion, oldQuestion){
      console.log(newQuestion);
      this.filteredPost =  this.posts.filter((post)=>
      post.nama.toLowerCase().includes(newQuestion.toLowerCase()));
    },
    posts: function(){
      this.posts.sort((a,b) => (a.nama.toLowerCase() >b.nama.toLowerCase() ? 1:-1));
      this.filteredPost = this.posts;
    },
  },
};
</script>

<!-- <style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style> -->
