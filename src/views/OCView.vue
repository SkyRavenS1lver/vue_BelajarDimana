<script setup>
const props = defineProps({
  id: {
    type: String,
    required: true
  },
})

</script>

<template>
    <main class="mx-[3rem] my-[2rem]">

      <div v-if="posts == []">
        <center>
          <img src="http://belajardimana.com/gambar/loading.gif" alt="" style="width: 25vw;, height: 25vh;" >
        </center>
      </div>
      <template v-for="post in posts" v-bind:key="posts">
        <div>

        
        <div v-if="post.publisher">
          <!-- Awakmu cuma perlu nambah nang njero div ae -->
          <h1 class="text-3xl">{{ post.publisher }} - {{ post.nama }}</h1>
        </div>
        <div v-if="post.alamat">
          <p>{{ post.alamat }}</p>
        </div>

        <div class="flex flex-wrap">
          <img v-if="post.linkGambar" class="md:w-full lg:w-[50vw] my-[1rem]" :src="post.linkGambar" 
                alt="Placeholder image">
          <img v-else class="w-[600px] my-[1rem]" src="http://belajardimana.com/gambar/placeholder.png" 
                alt="Placeholder image">

        
          <div class=' w-[45%] flex flex-col ml-[2rem]'>
           
            
            <h1 class="lg:text-2xl">Fasilitas</h1>

            <ul class="list-disc mx-[1.5rem] lg:text-[1rem]">
              <li>
                <div v-if="post.idOC">
                  <p>Online Course</p>
                </div>
                <div v-else-if="post.idFC">
                  <p>Offline Course</p>
                </div>
              </li>
              <li v-if="post.durasiTotal">
                <div>
                  <p>{{ post.durasiTotal }} Minggu</p>
                </div>
              </li>
              <li v-if="post.durasiMinggu">
                <div>
                  <p>{{ post.durasiMinggu }} Pertemuan Per Minggu</p>
                </div>
              </li>        
            </ul>

            <div class="mt-[1rem] max-w-sm rounded-xl overflow-hidden shadow-lg border-2 h-[150x] w-[200px]">
              <div class="flex flex-col m-4">
                <h1 class="text-xl">
                  Pendaftaran
                </h1>
                <div v-if="post.biayaOri">
                  <p class="text-lg font-bold">Rp {{ post.biayaOri }}</p>
                </div>
                <div v-else-if="post.biayaDiskon">
                  <p class="text-lg font-bold">Rp {{ post.biayaDiskon }}</p>
                </div>
                <div v-if="post.linkWeb">
                  <button  class='text-white mt-[1rem] bg-hijau-telur-asin px-4 py-2 rounded-xl' >
                    <a v-bind:href="post.linkWeb">
                      Daftar Sekarang
                    </a>
                  </button>
                </div>
                <div v-if="post.linkDaftar">
                  <button  class='text-white mt-[1rem] bg-hijau-telur-asin px-4 py-2 rounded-xl' >
                      <a v-bind:href="post.linkDaftar">
                        Daftar Sekarang
                      </a>
                  </button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      </template>
    </main>
  </template>

  <script>
export default {
  name:'Profile',
  data() {
    return {
      posts: [],
    };
  },

  created() {
    this.$watch(
      () => this.$route.params,
      () => {
        this.getData()
      },
      { immediate: true }
    );
  },  

  methods: {
    async getData() {
      try {
        const headers = { "Content-Type": "application/json"};
        fetch("https://api.belajardimana.com?Mode="+this.$route.params.mode+"&Id="+this.$route.params.id, { headers })
        .then(response => response.json())
        .then(data => (this.posts = data));

      } catch (error) {
        console.log(error);
      }
    },
  },

  
};
</script>