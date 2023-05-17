<script setup>
import HomeView from './HomeView.vue';
</script>
<template>
    <HomeView :search="search"/>
</template>

<script>
export default {
  name:'Search',
  data() {
    return {
      search: '',
    };
  },

  created() {
    this.$watch(
      () => this.$route.params,
      () => {
        this.search = this.$route.params.search;
      },
      { immediate: true }
    );
  },  
};
</script>
