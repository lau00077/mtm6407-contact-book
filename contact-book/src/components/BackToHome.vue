<script>
import { RouterLink } from 'vue-router';
</script>

<template>
    <div class="back-to-home">
      <router-link to="/" class="back-link">Back to Home</router-link>
    </div>
</template>
  
<style scoped>
  .back-to-home {
    margin: 20px 0;
    text-align: center;
  }
  
  .back-link {
    padding: 10px 20px;
    background-color: #ffb43c;
    color: white;
    text-decoration: none;
    border-radius: 5px;
  }
  
  .back-link:hover {
    background-color: #c29e75;
  }
  </style>
  