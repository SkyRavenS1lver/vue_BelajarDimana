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
if(props.msg.biayaDiskon){
    a = props.msg.biayaDiskon;
    b = props.msg.biayaOri;
}
else{
    a = props.msg.biayaOri;
}
</script>

<template>
    
            <a href="#">
            <div class="max-w-sm rounded-xl overflow-hidden shadow-lg border-2">
                <div class="text-center font-bold text-xl mb-1">{{ mode }}</div>
                <img class="w-full" src="http://belajardimana.com/gambar/placeholder.png" 
                alt="Placeholder image">
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-1">{{ msg.nama }}</div>
                    <p v-if="msg.publisher" class="text-gray-700 text-sm">
                        {{ msg.publisher }}
                    </p>
                    <p v-if="msg.alamat" class="text-gray-700 text-sm">
                        {{ msg.alamat }}
                    </p>
                    <sub class="text-gray-700 text-l mt-[1rem]">
                        <s id="Harga2">{{ b }}</s>
                    </sub>
                    <p id="Harga1" class="text-gray-700 text-m ">
                        {{ a }}</p>
                </div>
            </div>
        </a>   
            
</template>