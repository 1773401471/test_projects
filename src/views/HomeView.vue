<script setup>
import HomeImg from '@/components/home/HomeImg.vue'
import HomeNew from '@/components/home/HomeNew.vue';
import HomeHot from '@/components/home/HomeHot.vue';
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
    <!-- <HomeHot></HomeHot> -->
    <HomeType></HomeType>

  </div>
</template>
