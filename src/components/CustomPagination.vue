<template>
    <ul class="pagination">
      <li class="pagination-item">
        <button type="button" @click="onClickFirstPage" :disabled="isInFirstPage">First</button>
      </li>
      <li class="pagination-item">
        <button type="button" @click="onClickPreviousPage" :disabled="isInFirstPage">Previous</button>
      </li>
      <li
      v-for="page in pages"
      class="pagination-item"
      :key="page.name">
      <button
        type="button"
        :disabled="page.isDisabled" 
        @click="onClickPage(page.name)" 
        :class="{ active: isPageActive(page.name) }">
        {{ page.name }}
      </button>
    </li>
      <li class="pagination-item">
        <button type="button" @click="onClickNextPage" :disabled="isInLastPage">Next</button>
      </li>
  
      <li class="pagination-item">
        <button type="button"  @click="onClickLastPage" :disabled="isInLastPage">Last</button>
      </li>
    </ul>
  </template>
  
  <script>
  export default {
    props: {
      maxVisibleButtons: {
        type: Number,
        required: false,
        default: 3
      },    
      totalPages: {
        type: Number,
        required: true
      },
      perPage: {
        type: Number,
        required: true
      },
      currentPage: {
        type: Number,
        required: true
      }
    },
    computed: {
    isInFirstPage() {
      return this.currentPage === 1;
    },
    isInLastPage() {
      return this.currentPage === this.totalPages;
    },
    startPage() {
      // When on the first page
      if (this.currentPage === 1) {
        return 1;
      }

      // When on the last page
      if (this.currentPage === this.totalPages) {
        if(this.totalPages <= this.maxVisibleButtons){return 1;}
        else{
          return this.totalPages - this.maxVisibleButtons;
        }
      }

      // When inbetween
      return this.currentPage - 1;
    },
    pages() {
      const range = [];
      let temp = this.maxVisibleButtons;
      let i = this.startPage;
      if(this.currentPage === this.totalPages){temp++;
      if(this.totalPages > this.maxVisibleButtons){
        i++
      }}
      for (
        i;
        i <= Math.min(this.startPage + temp -1, this.totalPages);
        i++
      ) {
        range.push({
          name: i,
          isDisabled: i === this.currentPage
        });
      }
      return range;
    },
  },
  methods: {
    isPageActive(page) {
      return this.currentPage === page;
    },
    onClickFirstPage() {
      this.$emit('pagechanged', 1);
    },
    onClickPreviousPage() {
      this.$emit('pagechanged', this.currentPage - 1);
    },
    onClickPage(page) {
      this.$emit('pagechanged', page);
    },
    onClickNextPage() {
      this.$emit('pagechanged', this.currentPage + 1);
    },
    onClickLastPage() {
      this.$emit('pagechanged', this.totalPages);
    }
  },
  };
  </script>
  
  <style>
  .pagination {
    list-style-type: none;
  }
  
  .pagination-item {
    display: inline-block;
  }
  
  .active {
    background-color: #4AAE9B;
    color: #ffffff;
  }
  </style>