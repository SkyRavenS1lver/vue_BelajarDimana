<script setup>
import Cards from '../components/Cards.vue';
import { VueSidePanel } from 'vue3-side-panel';
import 'vue3-side-panel/dist/vue3-side-panel.css'
const props = defineProps({
  model: {
    type: Array,
    required: false,
  }
})
</script>

<template>
  <div style="height:90vh; width:100vw">
    
    <l-map ref="map" v-model:zoom="zoom" :center="[47.41322, -1.219482]" :options="{zoomControl:false}">
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        layer-type="base"
        name="OpenStreetMap"
      ></l-tile-layer>
      <l-control-zoom position="topright" ></l-control-zoom>
      <!-- <l-marker :lat-lng="[47.7515953048815, 8.757179159967961]" /> -->
      <template v-for="post in model" :key="post">
      <!-- <button style="z-index: 500; color: black;">{{ post.nama }}</button> -->
        <l-marker v-if="post.idFC"  :lat-lng="[post.latitude, post.longitude]" @click="isOpened = true, data = post">
          <l-icon :icon-size= [40,40] icon-url="http://belajardimana.com/gambar/location.png" > </l-icon>
          <!-- <l-popup ref="popup">
            {{ post.nama }}
           </l-popup> -->
        </l-marker>
      </template>
    </l-map>

    <VueSidePanel v-model="isOpened" side="left">
      <!-- <Button @click="isOpened=false, data=null">Close</Button> -->
      <div style="height: 100%;" class="text-black">
        <div v-if="data">
          <img v-if="data.linkGambar" class="w-full" :src="data.linkGambar" 
                alt="Placeholder image">
          <img v-else class="w-full" src="http://belajardimana.com/gambar/placeholder.png" 
                alt="Placeholder image">
          <h2 v-if="data.nama"> {{ data.nama }} </h2>
          <h2 v-if="data.publisher"> {{ data.publisher }} </h2>
          <h2 v-if="data.durasiMinggu"> {{ data.durasiMinggu }} </h2>
          <h2 v-if="data.alamat"> {{ data.alamat }} </h2>
          <h2 v-if="data.linkDaftar"> {{ data.linkDaftar }} </h2>
        </div>
      </div>    
    </VueSidePanel>
  </div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer,LMarker, LPopup, LControlZoom, LIcon} from "@vue-leaflet/vue-leaflet";

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
    LControlZoom,
    LIcon,
},
  data() {
    return {
      zoom: 2,
      data:null,
      isOpened: false,
    };
  },
  // methods: {
  //   async getData() {
  //     try {
  //       const headers = { "Content-Type": "application/json"};
  //       fetch("https://api.belajardimana.com?Mode=FC", { headers })
  //       .then(response => response.json())
  //       .then(data => (this.posts = data));
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   },
  // },

  // created() {
  //   this.getData();
  //   console.log(this.posts);
  // },
};
</script>

<style></style>