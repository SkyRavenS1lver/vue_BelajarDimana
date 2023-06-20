<script setup>
import Cards from '../components/Cards.vue';
import DetailModal from '../components/DetailModal.vue';

const props = defineProps({
  model: {
    type: Array,
    required: false,
    default:[] 
  }
})
</script>


<template>
  <main>
    <div v-if="model == []">
      <center>
      <img src="http://belajardimana.com/gambar/loading.gif" alt="" style="width: 25vw;, height: 25vh;" >
    </center>
  </div>
    <div class='flex-wrap flex justify-center bg-white '> <!-- justify center -->
      
      <template v-if="model.length == 0" >
        <p class="items-center h-[100vh] mt-[35vh] text-3xl">No Data to Show</p>
      </template>
      <template v-for="post in model" v-bind:key="model">
        <div class='m-[3rem]'>
        <Cards @click="showDetails(post)" :msg="post" :mode="'Online Course'" :id="post.idOC"/>
        
        </div>
      </template>
    </div>
  </main>
  <DetailModal style="z-index: 1000;" v-show="showModalDetail" :post="showedPost" @close-modal="showModalDetail = false"/>
</template>

<script>
export default {
  name:'home',
  data() {
    return {
      props: ['modelValue'],
      emits: ['update:modelValue'],
      OC:'OC',
      FC: 'FC',
      showModalDetail:false,
      showedPost:null,
    };
  },
  methods: {
      showDetails(posted){
        this.showedPost = posted;
        console.log(this.showedPost);
        this.showModalDetail = true;
      }
    },

};
</script>