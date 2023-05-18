<script setup>
import { RouterView } from 'vue-router'
import CustomPagination from './components/CustomPagination.vue';
</script>

<template>

  <header>
    <NavBar :modelValue="searching" @update:modelValue="newValue=>searching=newValue" :value="searching" @updating:submissions="newValue=>dataFiltered = newValue"/>
      {{ dataFiltered }}
  </header>

  <RouterView v-if="$route.fullPath == '/'" :model="shownPage" style="z-index: 0;"/>
  <RouterView v-else :model="offlinePage" style="z-index: 0;"/>
  
  <CustomPagination v-if="$route.fullPath == '/' && filteredPost.length>perPages"
      :totalPages="total"
      :perPage="perPages"
      :currentPage="currentPage"
      @pagechanged="onPageChange"
      />
</template>
<script>
import NavBar from './components/NavBar.vue';
export default {
  components: { NavBar, CustomPagination },
  data() {
    return {
      posts: [],
      filteredPost: [],
      searching:'',
      tempSearch:'',
      currentPage:1,
      total:1,
      perPages:10,
      shownPage:[],
      offlinePage:[],
      dataFiltered:[],
      hasilFilter:[],
      temporaryData:[],
    };
  },

  methods: {
    async getData() {
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
    onPageChange(page) {
      this.currentPage = page;
      console.log(this.currentPage);
    },
  },

  created() {
    this.getData();
    console.log(this.posts);
  },
  watch: {
    searching: function(newQuestion){
      this.tempSearch = newQuestion;
      this.filteredPost = this.hasilFilter;
      if(this.tempSearch!=""){
      this.filteredPost =  this.hasilFilter.filter((post)=>
      post.nama.toLowerCase().includes(this.tempSearch.toLowerCase()));}
      this.temporaryData = this.filteredPost;
    },
    posts: function(){
      this.posts.sort((a,b) => (a.nama.toLowerCase() >b.nama.toLowerCase() ? 1:-1));
      this.hasilFilter = this.posts;
      this.filteredPost = this.posts;
      this.temporaryData = this.posts;
    },

    temporaryData: function(){
      this.currentPage =  1;
      this.total = Math.ceil(this.temporaryData.length/this.perPages);
      this.shownPage = this.temporaryData.slice((this.perPages*(this.currentPage-1)), (this.perPages*this.currentPage));
      for (let i = 0; i < this.temporaryData.length; i++) {
          if(this.temporaryData[i].idFC){this.offlinePage.push(this.temporaryData[i])};
        }
      console.log(this.offlinePage);
      // this.total = Math.ceil(this.filteredPost.length/this.perPage);
    },
    currentPage: function(){
      this.shownPage = this.temporaryData.slice((this.perPages*(this.currentPage-1)), (this.perPages*this.currentPage));
      console.log(this.shownPage);
    },
    // dataFiltered: function(e){
    //   this.hasilFilter = this.filteredPost;
    //   if(e!=[]){
    //     // var temp = [];
    //     // for (let i = 0; i < this.hasilFilter.length; i++) {
    //     //   if(this.temporaryData[i].idFC)
    //     //   {this.hasilFilter.push(this.temporaryData[i])};
    //     // }
    //     this.hasilFilter =  this.filteredPost.filter((post)=>
    //   (post.durasiMinggu == this.dataFiltered[3]) && (post.durasiMinggu == this.dataFiltered[3])
    //   );
    //   }
    //   this.temporaryData = this.hasilFilter;
      
    // },
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
