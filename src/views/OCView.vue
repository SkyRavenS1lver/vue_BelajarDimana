<script setup>
const props = defineProps({
  id: {
    type: String,
    required: true
  },
})

</script>

<template>
    <main>
      <template v-for="post in posts" v-bind:key="post.id">
        <div v-if="post.publisher">
          <!-- Awakmu cuma perlu nambah nang njero div ae -->
          <p>{{ post.publisher }}</p>
        </div>
        <div v-if="post.nama">
          <p>{{ post.nama }}</p>
        </div>
        <div v-if="post.alamat">
          <p>{{ post.alamat }}</p>
        </div>
        <div v-if="post.durasiTotal">
          <p>{{ post.durasiTotal }} Minggu</p>
        </div>
        <div v-if="post.durasiMinggu">
        <p>{{ post.durasiMinggu }} Pertemuan Per Minggu</p>
        </div>
        <div v-if="post.biayaDiskon">
        <p>Rp {{ post.biayaDiskon }}</p>
        </div>
        <div v-else-if="post.biayaOri">
          <p>Rp {{ post.biayaOri }}</p>
        </div>
        <div v-if="post.linkWeb">
        <a v-bind:href="post.linkWeb">{{ post.linkWeb }}</a>
        </div>
        <div v-if="post.linkDaftar">
        <a v-bind:href="post.linkDaftar">{{ post.linkDaftar }}</a>
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