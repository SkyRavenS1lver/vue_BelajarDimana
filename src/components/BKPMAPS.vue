<template>
    <div style="height:90vh; width:100vw">
      <l-map ref="map" v-model:zoom="zoom" :center="[47.41322, -1.219482]">
        <l-tile-layer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          layer-type="base"
          name="OpenStreetMap"
        ></l-tile-layer>
        <!-- <l-marker :lat-lng="[47.7515953048815, 8.757179159967961]" /> -->
        <template v-for="coordinate in coordinates" :key="coordinate">
          <l-marker  :lat-lng="coordinate" >
            <l-popup ref="popup">
              KONTOL
             </l-popup>
          </l-marker>
            
          
  
            
            
          
        </template>
      </l-map>
    </div>
  </template>
  
  <script>
  import "leaflet/dist/leaflet.css";
  import { LMap, LTileLayer,LMarker, LPopup } from "@vue-leaflet/vue-leaflet";
  
  export default {
    components: {
      LMap,
      LTileLayer,
      LMarker,
      LPopup,
    },
    data() {
      return {
        zoom: 2,
        coordinates: [[50, 14],[53, 20], [53, 25]],
      };
    },
  };
  </script>
  
  <style></style>