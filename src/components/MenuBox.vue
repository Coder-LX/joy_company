<template>
  <div class="menu-box">
    <img src="../assets/images/boxbg.png.webp" alt="">
    <div class="box-content">
      <img class="box-logo" src="../assets/images/email.webp" alt="">
      <div class="box-text">
        <h3>如何联系我们?</h3>
        <p>Want To Contact Us?</p>
      </div>
      <div class="box-btn">
        <span> VIEW ></span>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
</script>
<style lang="scss" scoped>
.menu-box {
  width: 520px;
  height: 320px;
  position: relative;

  img {
    width: 100%;
    height: 100%;
  }

  .box-content {
    padding: 40px;
    position: absolute;
    top: 0;
    left: 0;
    // background: rgba(1, 1, 1, 0.2);
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    .box-logo {
      width: 47px;
      height: 33px;
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
      background-color: #123456;
      display: inline-block;
      color: whitesmoke;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>