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
    <button style="z-index: 500; width: 6rem; height: 3.5rem;" @click="allList = true"
    class="bg-neutral-500 hover:bg-neutral-400 text-white font-bold py-2 px-4 border-b-4 border-neutral-700 hover:border-neutral-500 rounded">View All Data:</button>
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        layer-type="base"
        name="OpenStreetMap"
      ></l-tile-layer>
      <l-control-zoom position="topright" ></l-control-zoom>
      <template v-for="post in model" :key="model">
        <l-marker v-if="post.idFC"  :lat-lng="[post.latitude, post.longitude]" @click="isOpened = true, data = post">
          <l-icon :icon-size= [40,40] icon-url="http://belajardimana.com/gambar/location.png" > </l-icon>
          <!-- <l-popup ref="popup">
            {{ post.nama }}
           </l-popup> -->
        </l-marker>
      </template>
    </l-map>

    <VueSidePanel v-model="isOpened" side="left">  
        <div style="height: 100%; max-width: 30vw;" class="block bg-white p-3 dark:bg-neutral-700 text-neutral-800 dark:text-neutral-50 text-2xl py-5">
              <Button @click="isOpened=false, data=null, allList=true"
            style="width: 2.5rem;">
          <img src="http://belajardimana.com/gambar/left-arrow.png"/>
          </Button>
        <div v-if="data" style="max-width: 80%; padding-left: 4rem;">
          <h2 v-if="data.nama" class="mb-5"> {{ data.nama }} - {{ data.publisher }}</h2>
          <img v-if="data.linkGambar" class="w-half shadow-[0_2px_15px_-3px_rgba(0,0,0,1),0_10px_20px_-2px_rgba(0,0,0,0.04)]" :src="data.linkGambar" 
                alt="Placeholder image">
          <img v-else class="w-half shadow-[0_2px_15px_-3px_rgba(0,0,0,1),0_10px_20px_-2px_rgba(0,0,0,0.04)]" src="http://belajardimana.com/gambar/placeholder.png" 
                alt="Placeholder image">
          <h2 v-if="data.biayaOri" class="my-2 mt-10"> Rp {{ data.biayaOri }}  </h2>
          <h2 v-if="data.durasiMinggu" class="my-2"> {{ data.durasiMinggu }} Pertemuan Per Minggu </h2>
          <h2 v-if="data.alamat" class="my-2"> {{ data.alamat }} </h2>
          <h2 v-if="data.linkDaftar" class="my-2"> {{ data.linkDaftar }} </h2>
        </div>
      </div>    
    </VueSidePanel>

    
    <VueSidePanel v-model="allList" side="left">
      <div v-if="model.length==0" style="height: 100%; padding-top: 50vh;"  class="block bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 text-neutral-800 dark:text-neutral-50 text-3xl py-10">
        <p>Nothing to show</p>
    </div>
    <div v-else style="height: 100%;"  class="block bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 text-neutral-800 dark:text-neutral-50 text-3xl py-10">
      <h1 class="mb-5">Data Listed:</h1>
     
        <template v-for="datas in model" :key="model">
          <div>
            <div @click="isOpened=true, allList=false, data = datas">
              <div class="block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 dark:md:hover:bg-neutral-500">
                <h5 v-if="datas.nama && datas.publisher" class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                  {{ datas.nama }} - {{ datas.publisher }}
                </h5>
                <p v-if="datas.alamat" class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                  {{ datas.alamat }}
                </p>
                <button></button>
              </div>
            </div>
        </div>
        
      </template> 
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
      allList:false,
      check:true,
    };
  },
};
</script>

<style>
VueSidePanel::-webkit-scrollbar {display:none;}</style>