<script setup>
import HomeImg from '@/components/home/HomeImg.vue'
import HomeNew from '@/components/home/HomeNew.vue';
import HomeType from '@/components/home/HomeType.vue';
import HomeCateory from '@/components/home/HomeCateory.vue'
</script>

<template>
  <div>
    <div style="position: relative;">
      <HomeImg></HomeImg>
      <HomeCateory></HomeCateory>
    </div>
    <HomeNew></HomeNew>
    <HomeType></HomeType>

  </div>
</template>
