<script setup lang="ts">
import { RouterLink } from 'vue-router'
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
                        <img src="https://i.ibb.co/1s9mnsV/logo-baru.png" class='w-[40px] h-[40px]'>
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
                <div class='flex items-center content-evenly'>
                    <form action="#">
                        <div class="grid place-items-center">
                            <!-- search bar meneh :v -->
                            <div class=" outline h-[45px] min-w-[200px] max-w-[300px] relative flex items-center md:min-w-[350px] xl:min-w-[400px] 
                            rounded-[2rem] focus-within:shadow-lg bg-white overflow-hidden  "
                            style="outline-color:#BDBDBD">
                                <!-- select kiri -->
                                <select id="states" class="w-[30.5%] rounded-l-[2rem] h-full bg-gray-50 border-2 text-gray-900 text-sm border-l-gray-100  border-l-2  block p-2.5 focus: outline-none  ">
                                    <option selected value="default">Search By:</option>
                                    <option value="CA">Nama Instansi</option>
                                    <option value="TX">Daerah</option>
                                    <option value="WH">Akreditas</option>
                                </select>
                                <!-- select kiri end -->
  
                                <!-- input text -->
                                <input type="text" class='ml-[1rem] outline-none bg-white w-[56.5%]' placeholder="Belajar Dimana">
                                
                                <!-- logo search -->
                                <div class="grid place-items-center h-full w-12 text-gray-300 ">
                                    <img src="https://i.ibb.co/6b1L8xd/search.png" alt="">
                                </div>
  
  
                            </div>
                            <!-- search bar meneh :v end -->
                        </div>
                    </form>
                </div>
                <!-- search bar end -->
  
                <!-- div button -->
                <div>
                  <RouterLink to="/maps">
                    <button class="mr-[1rem] ml-[10vw] bg-hijau-telur-asin hover:bg-warna-hover text-white  hover:text-white py-2 px-4 border  hover:border-transparent rounded-xl">
                        <div class='flex'>
                            Lihat Peta
                            <br>    
                            <img src="https://i.ibb.co/7z6kvXP/Map-Trifold.png" alt="map" class='ml-[0.5rem]'>
                        </div>
                       
                    </button>
                  </RouterLink>
                    <button @click="showModal = true" class="bg-transparent hover:bg-gray-400  hover:text-white py-2 px-4 border border-gray-400 hover:border-transparent rounded-xl" >
                        Filter
                    </button>
                </div>
                
  
            </div>
            <!-- container justify between end -->
        </nav>
        <!-- navbar end -->
    </div>
    <!-- div isi garis horizontal bawah + element sticky end -->
    <CustomModal style="z-index: 500;" v-show="showModal" @close-modal="showModal = false"/>
    

  
  </template>

  <script lang="ts">
import CustomModal from './CustomModal.vue'

export default {
  components: { CustomModal },
  data() {
    return {
      showModal: false,
    }
  },
}
</script>