<script setup>
import { RouterLink } from 'vue-router'
import CustomInput from './CustomInput.vue';
</script>
<template>
    
      <!-- div isi garis horizontal bawah + element sticky -->
      <div class='border-b-2 pb-[2rem] sticky top-0'>
        <!-- navbar start -->
        <nav class=" mx-[3rem] pt-[1.5rem] "> 
            <!-- container justify between -->
            <div class="flex items-center justify-between flex-wrap ">
                <!-- flex isi logo + teks belajar dimana -->
                <div class='flex'>
                    <div class='mr-6'>
                        <img src="http://belajardimana.com/gambar/logo-baru.png" class='w-[40px] h-[40px]'>
                    </div>    
                    <div class='mr-6'>
                        <RouterLink to="/">
                            <p class='text-xl xl:text-2xl text-hijau-telur-asin '>
                                Belajar Dimana
                            </p>
                        </RouterLink>
                    </div>
                </div>
                <!-- flex isi logo + teks belajar dimana end -->
            
                <!-- search bar -->
                <div class='flex items-center content-evenly bg-white'>
                    <!-- <form action="#"> -->
                        <div class="grid place-items-center">
                            <!-- search bar meneh :v -->
                            <div class=" outline h-[45px] min-w-[200px] max-w-[300px] relative flex items-center md:min-w-[350px] xl:min-w-[400px] 
                            rounded-[2rem] focus-within:shadow-lg bg-white overflow-hidden text-black"
                            style="outline-color:#BDBDBD">
  
                                <!-- input text -->
                                <!-- <input type="text" ref="inputSearch" class='ml-[1rem] outline-none bg-white w-[56.5%]' placeholder="Belajar Dimana"> -->
                                <CustomInput
                                  type="text"
                                  v-model="modelValue"
                                  :value="modelValue"
                                  @input="$emit('update:modelValue', $event.target.value)"
                                  class='ml-[1rem] outline-none bg-white w-[85%]'
                                  />
                                <!-- logo search -->
                                <!-- Hard Reset to Home -->
                                <a v-if="$route.fullPath == '/'" href="/">
                                    <img src="http://belajardimana.com/gambar/close.png" style="width: 33px;" alt="" class="mr-[0.5rem]"> 
                                </a>
                                <!-- Hard Reset to Maps -->
                                <a v-if="$route.fullPath == '/maps'" href="/maps">
                                    <img src="http://belajardimana.com/gambar/close.png" style="width: 33px;" alt="" class="mr-[0.5rem]"> 
                                </a>
  
  
                            </div>
                            <!-- search bar meneh :v end -->
                        </div>
                    <!-- </form> -->
                </div>
                <!-- search bar end -->
  
                <!-- div button -->
                <div>
                    <RouterLink to="/maps" v-if="isAvail">
                        <button :disabled="isAvail"  class="mr-[1rem] ml-[10vw] bg-hijau-telur-asin hover:bg-warna-hover text-white  hover:text-white py-2 px-4 border  hover:border-transparent rounded-xl">
                        <div class='flex'>
                            Lihat Peta
                            <br>
                            <img src="http://belajardimana.com/gambar/Map-Trifold.png" alt="map" class='ml-[0.5rem]'>
                        </div>
                        </button>
                    </RouterLink>
                    <button v-else :disabled="isAvail"  class="mr-[1rem] ml-[10vw] bg-black hover:bg-red-500 text-white  hover:text-white py-2 px-4 border  hover:border-transparent rounded-xl">
                        <div class='flex'>
                            Filter Offline X
                        </div>
                        </button>
                    <button  @click="showModal = true" class="bg-transparent hover:bg-gray-400  hover:text-white py-2 px-4 border border-gray-400 hover:border-transparent rounded-xl" >
                        Filter
                    </button>
                </div>
                
  
            </div>
            <!-- container justify between end -->
        </nav>
        <!-- navbar end -->
    </div>
    <!-- div isi garis horizontal bawah + element sticky end -->
    <CustomModal style="z-index: 500;" v-show="showModal" @close-modal="showModal = false" @submits="Submitss"/>
    

  
  </template>

  <script>
import CustomModal from './CustomModal.vue'

export default {
  components: { CustomModal, CustomInput },
  data() {
    return {
      props: ['modelValue'],
      emits: ['update:modelValue'],
      showModal: false,
      isAvail: true,
    }
  },
  methods: {
    Submitss(e){
        this.$emit('updating:submissions', e);
        if (e[2]==1) {
            this.isAvail = false;
        }
        else{this.isAvail = true;}
    }
  },
}
</script>