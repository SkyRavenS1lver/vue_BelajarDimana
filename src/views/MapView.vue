<template>
  <div id="mapContainer">
    
    <button style="z-index: 500; color: black;">HelloWorld</button>
  </div>
</template>
<script>
  import "leaflet/dist/leaflet.css";
  import L from "leaflet";
  import { LControlZoom, LMap, LTileLayer } from "@vue-leaflet/vue-leaflet";
  
  export default {
    name: "LeafletMap",
    data() {
      return {
        map:null,
      };
    },
    mounted() {
      this.map = L.map("mapContainer", {zoomControl:false}).setView([46.05, 11.05], 15);
      L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(this.map);
      var customPane = this.map.createPane("customPane");
      var canvasRenderer = L.canvas({ pane: "customPane" });
      customPane.style.zIndex = 399; // put just behind the standard overlay pane which is at 400
      for(var i=0;i<5;i++){
        L.marker([53, 20*i]).addTo(this.map);
      }
      L.control.zoom({
    position: 'topright'
    }).addTo(this.map);
      
      // L.marker([50, 14]).bindPopup('The center of the world').addTo(this.map);
      // L.marker([53, 20]).addTo(this.map);
      // L.marker([49.5, 19.5]).addTo(this.map);
      // L.marker([49, 25]).addTo(this.map);
      // L.marker([-10, 25]).addTo(this.map);
      // L.marker([10, -25]).addTo(this.map);
      // L.marker([0, 0]).addTo(this.map);
    },
    onBeforeUnmount() {
      if (this.map) {
        this.map.remove();
      }
    },
  };
  </script>
  
  <style>
  body{
    overflow: -moz-hidden-unscrollable; /* Hide scrollbars */
  }
  #mapContainer {
    width: 100vw;
    height: 90vh;
  }
  @media (min-width: 1024px) {
    .about {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
  }
  </style>