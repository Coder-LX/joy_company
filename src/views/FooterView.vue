<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-menu">
        <ul>
          <li>首页</li>
          <li>解决方案</li>
          <li>关于我们</li>
          <li>加入我们</li>
          <li>联系我们</li>
        </ul>
      </div>
      <div class="footer-logo">
        <div class="title">货代运输</div>
        <div class="subtitle">H U O D A I Y U N S H U</div>
      </div>
      <div class="footer-linkus">
        <div>联系邮箱: 849553682@qq.com</div>
        <div> QQ: 849553682 </div>
        <div>联系地址: 江苏省苏州市跨塘XXXXXXX</div>
        <div>联系电话: 400-0000-0000-xxxx</div>
      </div>
      <div class="footer-copyright">
        © 2022 苏州陆海国际货运代理有限公司版权所有 -- Copyright 2022 SUZHOU LAND-SEA INTERNATIONAL TRANSPORTATION CO., LTD. All rights
        Reserved.
      </div>
    </div>
  </footer>
</template>
<script lang="ts" setup>
</script>
<style scoped lang="scss">
.footer {
  width: 100%;
  height: 450px;
  background: url('../assets/images/footer_bg.jpg') no-repeat top;
  background-color: #333333;

  position: relative;
  box-sizing: border-box;
  text-align: center;

  .footer-container {
    text-align: left;
    width: 90%;
    height: 100%;
    display: inline-block;

    .footer-menu {
      top: 60px;
      position: absolute;
      width: 800px;
      height: 50px;
      font-size: 16px;
      color: rgb(111, 111, 111);

      ul {
        display: flex;
        justify-content: space-between;
      }
    }

    .footer-logo {
      position: absolute;
      top: 175px;

      .title {
        font-size: 36px;
        font-family: 联盟锐黑;
        color: #fff;
      }

      .subtitle {
        margin-top: 10px;
        font-size: 14px;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        color: rgb(147, 147, 147)
      }
    }

    .footer-linkus {
      position: absolute;
      width: 100%;
      top: 280px;
      height: 40px;
      display: flex;
      justify-content: space-between;
      color: rgb(147, 147, 147);
      font-family: 微软雅黑;
      font-size: 14px;
    }

    .footer-copyright {
      position: absolute;
      width: 100%;
      top: 400px;
      height: 40px;
      color: rgb(147, 147, 147);
      font-family: 微软雅黑;
      font-size: 12px;
    }
  }
}
</style>