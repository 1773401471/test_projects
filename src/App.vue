<script setup>
import { RouterView } from 'vue-router'
</script>

<template>

  <div class="main-box">
    <router-view></router-view>
  </div>


</template>

<style scoped>
.main-box {
  width: 100vw;
  margin: 0 auto;
}
</style>
