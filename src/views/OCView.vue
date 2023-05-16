<script setup>
const props = defineProps({
  id: {
    type: String,
    required: true
  },
})

</script>


<!-- <template>
  <main>
    <p>{{ obj.nama }}</p>
    <p>{{ obj.durasiTotal }}</p>
    <p>{{ obj.durasiMinggu }}</p>
    <p>{{ obj.biayaOri }}</p>
    <p>{{ obj.biayaDiskon }}</p>
    <p>{{ obj.linkWeb }}</p>
    <p>{{ obj.publisher }}</p>
  </main>
</template> -->
<template>
    <main>
      <p>{{ props.id }}</p>
    </main>
  </template>