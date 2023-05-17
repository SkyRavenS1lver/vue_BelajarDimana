<script>
export default {
  props: ['modelValue'],
  emits: ['update:modelValue']
}
</script>

<template>
  <input
    placeholder="Belajar Dimana"
    :value="modelValue"
    @change="$emit('update:modelValue', $event.target.value)"
  />
</template>