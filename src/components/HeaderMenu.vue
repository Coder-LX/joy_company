<template>
  <div class="menu">
    <div v-for="item of menus" :key="item.key" :class="{ active: item.key == activePage }" @click="changePage(item)">{{
      item.name }}</div>
  </div>
</template>
<script setup lang="ts" >
import { useRouter } from 'vue-router'
import { ref, reactive } from 'vue';
const router = useRouter()
let activePage = ref('HomePage');

let menus = reactive([
  { name: '首页', key: 'HomePage', router: '/' },
  { name: '解决方案', key: 'SolutionPage', router: '/solution' },
  { name: '关于我们', key: 'AboutUsPage', router: '/about-us' },
  { name: '加入我们', key: 'JoinUsPage', router: '/join-us' },
  { name: '联系我们', key: 'LinkUsPage', router: '/link-us' }
])

let changePage = (item: any) => {
  activePage.value = item.key;
  router.push(item.router);
}
</script>
<style lang="scss" scoped>
.menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
  font-size: 16px;
  font-weight: 400;
  padding-right: 10%;
  font-family: 联盟锐黑;
  color: rgba(153, 153, 153);
  div {
    cursor: pointer;
  }
  .active {
    color: black;
  }
}
</style>