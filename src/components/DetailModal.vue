<script setup>
const props = defineProps({
  post: {
    type: Object,
    required: true
  },
})
</script>
<template>
  <div z-index="100" class="modal-overlay" @click="$emit('close-modal')">
    <div class="modal" @click.stop>
      <div class="text-black">

      <!-- <template v-for="post in posts" v-bind:key="posts"> -->

        <div v-if="post!=null">        
        <div v-if="post.publisher">
          <!-- Awakmu cuma perlu nambah nang njero div ae -->
          <h1 class="text-3xl mx-[0.5rem]">{{ post.publisher }} - {{ post.nama }}</h1>
        </div>
        <div v-if="post.alamat">
          <p>{{ post.alamat }}</p>
        </div>

        <div class="flex flex-wrap">
          <img v-if="post.linkGambar" class="w-[50vw]  my-[1rem] px-[2rem]" :src="post.linkGambar" 
                alt="Placeholder image">
          <img v-else class="w-[50vw]  my-[1rem] px-[2rem]" src="http://belajardimana.com/gambar/placeholder.png" 
                alt="Placeholder image">

        
          <div class=' w-[45%] flex flex-col ml-[2rem] mr-[4rem]'>
           
            
            <h1 v-if="post.nama" class="lg:text-2xl text-left">Fasilitas</h1>

            <ul class="list-disc mx-[1.5rem] lg:text-[1rem] text-left">
              <li>
                <div v-if="post.idOC">
                  <p>Online Course</p>
                </div>
                <div v-else-if="post.idFC">
                  <p>Offline Course</p>
                </div>
              </li>
              <li v-if="post.durasiTotal">
                <div>
                  <p>{{ post.durasiTotal }} Minggu</p>
                </div>
              </li>
              <li v-if="post.durasiMinggu">
                <div>
                  <p>{{ post.durasiMinggu }} Pertemuan Per Minggu</p>
                </div>
              </li>        
            </ul>

           
          </div>
           <div class="mt-[1rem] max-w-sm rounded-xl overflow-hidden shadow-lg border-2 h-[150x] w-[200px] mx-[1rem] sm:mx-[0px] ml-3">
              <div class="flex flex-col m-4">
                <h1 class="text-xl">
                  Pendaftaran
                </h1>
                <div v-if="post.biayaOri">
                  <p class="text-lg font-bold">Rp {{ post.biayaOri }}</p>
                </div>
                <div v-else-if="post.biayaDiskon">
                  <p class="text-lg font-bold">Rp {{ post.biayaDiskon }}</p>
                </div>
                <div v-if="post.linkWeb">
                  <button  class='text-white  bg-hijau-telur-asin px-4 py-2 pb-3 rounded-xl' style="margin-top:0.5rem !important" >
                    <a v-bind:href="post.linkWeb">
                      Daftar Sekarang
                    </a>
                  </button>
                </div>
                <div v-if="post.linkDaftar">
                  <button  class='text-white  bg-hijau-telur-asin px-4 py-3  rounded-xl' style="margin-top:0.5rem !important" >
                      <a v-bind:href="post.linkDaftar">
                        Daftar Sekarang
                      </a>
                  </button>
                </div>
            </div>
        </div>
      </div>
      <!-- </template> -->
      </div>
    </div>
</div>

    <div class="close" @click="$emit('close-modal')">
      <img class="close-img" src="https://i.ibb.co/DpZCx6W/close.png" alt="" />
    </div>
  </div>
</template>


<style scoped>

.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: #000000da;
}
.modal::-webkit-scrollbar {display:none;}
.modal {
  overflow-y:auto;
  
  text-align: center;
  background-color: white;
  height: fit-content;
  width: 600px;
  margin-top: 5%;
  padding: 30px 0;
  border-radius: 20px;
}
.close {
  margin: 5% 0 0 16px;
  cursor: pointer;
}

.close-img {
  width: 25px;
}

.check {
  width: 150px;
}

h6 {
  font-weight: 500;
  font-size: 28px;
  margin: 20px 0;
}

p {
  font-size: 16px;
  margin: 20px 0;
}
</style>