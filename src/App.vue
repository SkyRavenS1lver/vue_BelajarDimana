<script setup>
import { RouterView } from 'vue-router'
import CustomPagination from './components/CustomPagination.vue';
</script>

<template>

  <header>
    <NavBar :modelValue="searching" @update:modelValue="newValue=>searching=newValue" :value="searching" @updating:submissions="newValue=>dataFiltered = newValue"/>
  </header>

  <RouterView v-if="$route.fullPath == '/'" :model="shownPage" style="z-index: 0;"/>
  <RouterView v-else :model="offlinePage" style="z-index: 0;"/>
  <center>
  <CustomPagination v-if="$route.fullPath == '/' && temporaryData.length>perPages"
      :totalPages="total"
      :perPage="perPages"
      :currentPage="currentPage"
      @pagechanged="onPageChange"
      class="mb-20"
      />
    </center>
</template>
<script>
import NavBar from './components/NavBar.vue';
import {ref} from 'vue';
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
      perPages:8,
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
    },
  },

  created() {
    this.getData();
  },
  watch: {
    searching: function(newQuestion){
      this.tempSearch = newQuestion;
      this.filteredPost = this.hasilFilter;

      this.filteredPost =  this.posts.filter((post)=>
      (post.nama.toLowerCase().includes(this.tempSearch.toLowerCase())) ||
      (post.publisher.toLowerCase().includes(this.tempSearch.toLowerCase())) );

    },
    posts: function(){
      this.posts.sort((a,b) => (a.nama.toLowerCase() >b.nama.toLowerCase() ? 1:-1));
      this.hasilFilter = this.posts;
      this.filteredPost = this.posts;
      this.temporaryData = this.posts;

    },
    filteredPost: function(){
      this.temporaryData = [];
      for (let i = 0; i < this.filteredPost.length; i++) {
          if(this.hasilFilter.includes(this.filteredPost[i])){this.temporaryData.push(this.filteredPost[i])};
        }
    },
    hasilFilter: function(){
      this.temporaryData = [];
      for (let i = 0; i < this.filteredPost.length; i++) {
          if(this.hasilFilter.includes(this.filteredPost[i])){this.temporaryData.push(this.filteredPost[i])};
        }
    },

    temporaryData: function(){
      this.currentPage =  1;
      this.offlinePage = [];
      this.total = Math.ceil(this.temporaryData.length/this.perPages);
      this.shownPage = this.temporaryData.slice((this.perPages*(this.currentPage-1)), (this.perPages*this.currentPage));
      for (let i = 0; i < this.temporaryData.length; i++) {
          if(this.temporaryData[i].idFC){this.offlinePage.push(this.temporaryData[i])};
        }
    },
    currentPage: function(){
      this.shownPage = this.temporaryData.slice((this.perPages*(this.currentPage-1)), (this.perPages*this.currentPage));
    },
    dataFiltered: function(e){
      this.hasilFilter = this.filteredPost;
        var harga = 500000;
        this.hasilFilter = [];
        for (let i = 0; i < this.posts.length; i++) {
          if(this.posts[i].biayaOri!=null){harga = this.posts[i].biayaOri}
          if(((this.dataFiltered[2]==1 && this.posts[i].idFC!=null) || (this.dataFiltered[2]==2 && this.posts[i].idOC!=null)) && this.$route.fullPath == "/"){
          }
          else if(this.dataFiltered[3]!=0 && this.dataFiltered[3]!=this.posts[i].durasiMinggu){

          }
          else if(this.dataFiltered[0] > harga || this.dataFiltered[1] < harga){

          }
          else{
            if(this.dataFiltered[4] == 0){
            this.hasilFilter.push(this.posts[i])
          }
            else if(this.dataFiltered[4] != this.posts[i].idProvinsi || this.posts[i].idProvinsi==null){
            }
              
            else{
                if(this.dataFiltered[5] == 0){
                this.hasilFilter.push(this.posts[i])
              }
                else if(this.dataFiltered[5] != this.posts[i].idKabupaten){}
                else{
                  if(this.dataFiltered[6] == 0 || this.dataFiltered[6] == this.posts[i].idKecamatan)
                  {this.hasilFilter.push(this.posts[i])}
                }
            }
          };
        }
    },
  },
  mounted() {
    let windowWidth = ref(window.innerWidth);
    if(windowWidth.value <=650){
      this.perPages = 4;
    }
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
