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
        <p v-if="post.publisher">{{ post.publisher }}</p>
        <p v-if="post.nama">{{ post.nama }}</p>
        <p v-if="post.alamat">{{ post.alamat }}</p>
        <p v-if="post.durasiTotal">{{ post.durasiTotal }} Minggu</p>
        <p v-if="post.durasiMinggu">{{ post.durasiMinggu }} Pertemuan Per Minggu</p>
        <p v-if="post.biayaDiskon">Rp {{ post.biayaDiskon }}</p>
        <p v-else-if="post.biayaOri">Rp {{ post.biayaOri }}</p>
        <a v-bind:href="post.linkWeb">{{ post.linkWeb }}</a>
        <a v-bind:href="post.linkDaftar">{{ post.linkDaftar }}</a>
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