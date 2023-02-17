<template>
  <header class="header">
    <div class="title">
      <span>陆海国际货运代理</span>
    </div>
    <HeaderMenu class="header-menu"></HeaderMenu>
  </header>
</template>

<script lang="ts" setup>
import HeaderMenu from "@/components/HeaderMenu.vue"
</script>
<style scoped lang="scss">
.header {
  width: 100%;
  height: 140px;
  display: flex;
  align-items: center;

  .title {
    width: 50%;
    margin-left: 10%;
    font-family: 联盟锐黑;

    span {
      font-size: 36px;
      color: rgb(8, 69, 100);

      &:hover {
        color: #123456;
      }
    }
  }

  .header-menu {
    width: 50%;
  }
}
</style>