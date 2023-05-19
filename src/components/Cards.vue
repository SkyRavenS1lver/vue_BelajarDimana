<script setup>
const props = defineProps({
  msg: {
    type: Object,
    required: true
  },
  mode: {
    type: String,
    required: true
  }
})
var a= "";
var b= "";


</script>

<template>
    
            <a href="#">
            <div class="max-w-sm rounded-xl overflow-hidden shadow-lg border-2 h-[500px]"> <!-- fixing size card box -->
                <div class="text-center font-bold text-xl mb-1">{{ mode }}</div>
                <img v-if="msg.linkGambar" class="w-full h-[250px]" :src="msg.linkGambar"  
                alt="Placeholder image"> <!-- fixing image size -->
                <img v-else class="w-full h-[250px]" src="http://belajardimana.com/gambar/placeholder.png" 
                alt="Placeholder image">
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-1">{{ msg.nama }}</div>
                    <p v-if="msg.publisher" class="text-gray-700 text-sm">
                        {{ msg.publisher }}
                    </p>
                    <p v-if="msg.alamat" class="text-gray-700 text-sm">
                        {{ msg.alamat }}
                    </p>
                    <sub v-if="msg.biayaDiskon && msg.biayaOri" class="text-gray-700 text-l mt-[1rem]">
                        <s id="Harga2">{{ msg.biayaDiskon }}</s>
                    </sub>
                     <p v-else> {{ msg.biayaDiskon }}</p>
                    <p v-if="msg.biayaOri" id="Harga1" class="text-gray-700 text-m ">
                        {{ msg.biayaOri }}</p>
                </div>
            </div>
        </a>   
            
</template>