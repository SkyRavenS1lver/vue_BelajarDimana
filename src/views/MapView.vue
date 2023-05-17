<script setup>
import Cards from '../components/Cards.vue';
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
        <l-marker v-if="post.idFC"  :lat-lng="[post.latitude, post.longitude]">
          <l-icon :icon-size= [40,40] icon-url="http://belajardimana.com/gambar/location.png"> </l-icon>
          <l-popup ref="popup">
            {{ post.nama }}
           </l-popup>
        </l-marker>
      </template>
    </l-map>
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
    LIcon
  },
  data() {
    return {
      zoom: 2,
      // posts:[],
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