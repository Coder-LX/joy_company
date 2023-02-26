<template>
  <div class="menu-box">
    <div class="box-content">
      <img class="box-logo" :src="props.imgUrl" alt="">
      <div class="box-text">
        <h3>{{ props.name }}</h3>
        <p>{{ props.name_en }}</p>
      </div>
      <div class="box-btn">
        <span> VIEW ></span>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
const props = defineProps({
  name: String,
  name_en: String,
  imgUrl: String,
})


</script>
<style lang="scss" scoped>
.menu-box {
  width: 450px;
  height: 280px;
  position: relative;
  margin: 0 60px;
  .box-content {
    background-color: #ffffff;
    box-shadow: 1px 1px 10px 1px rgba(97, 44, 196, 0.2);
    border-radius: 5px;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    .box-logo {
      width: 47px;
    }
    .box-text {
      h3 {
        font-size: 22px;
      }
      p {
        font-size: 15px;
      }
    }
    .box-btn {
      width: 197px;
      height: 47px;
      background-color: #234567;
      display: inline-block;
      color: whitesmoke;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      border-radius: 2px;
    }
  }
}
</style>