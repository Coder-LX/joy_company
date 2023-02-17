<template>
  <main class="main">
    <HomeBar></HomeBar>
    <ComServices></ComServices>
  </main>
</template>

<script setup lang="ts">
import HomeBar from '@/components/HomeBar.vue'
import ComServices from '@/components/ComServices.vue'
</script>
<style lang="scss" scoped>
.main {
  width: 100%;
}
</style>