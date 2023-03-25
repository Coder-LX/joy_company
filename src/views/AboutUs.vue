<template>
  <div class="about-us">
    <img src="@/assets/images/about_head.jpg" alt="">
    <div class="about-desc">
      <div class="desc-section">
        <div class="desc-txt">
          <div>
            <h3>关于我们</h3>
            <p>About Us</p>
          </div>
          <div class="desc">
            物流运输有限公司成立于2004年，公司位于京港澳高速和绕城高速交汇处，地理位置十分便利，交通非常发达。公司以长沙为中心，业务辐射全国各地，承接全国各地整车。零担及大件设备运输业务。公司在全国各地合同运输车辆700多台；包括平板半挂车、高栏车、厢式车、半封闭车、冷藏车、特种运输车并有自备小型配送货车；有充足的运输保障能力。您可以直接访问我们位于全球主要地点的
            40 个办事处。 我们可靠的代理网络将我们的业务扩展到 100 多个国家
          </div>
        </div>
        <img class="desc-img" src="@/assets/images/transBox.webp" alt="">
      </div>
      <div class="desc-box">
        <div class="desc-item" v-for="(item, index) of descs" :key="index">
          <h3>{{ item.number }}+</h3>
          <div></div>
          <p>{{ item.desc }}</p>
        </div>
      </div>
    </div>
    <div class="Certifications">
      <div class="cert-head">
        <h3>资质证书</h3>
        <p>Certifications</p>
      </div>
      <div class="cert-box">
        <img src="@/assets/images/cert1.jpg" alt="">
        <img src="@/assets/images/cert2.jpg" alt="">
        <img src="@/assets/images/cert3.jpg" alt="">
        <img src="@/assets/images/cert4.jpg" alt="">
        <img src="@/assets/images/cert5.jpg" alt="">
        <img src="@/assets/images/cert6.jpg" alt="">
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
let descs = [
  { number: 40, desc: '全国服务网点' },
  { number: 470, desc: '专业搬运团队' },
  { number: 420, desc: '各式运输配送车辆' },
  { number: 4000, desc: '客户好评案例' }]
</script>

<style scoped lang="scss">
.about-us {
  >img {
    width: 100%;
    display: block;
  }
  .about-desc {
    position: relative;
    background-color: rgb(245 243 251);
    padding: 100px 7.5%;
    .desc-section {
      display: flex;
      margin-bottom: 200px;
      .desc-txt {
        width: 50%;
        margin-right: 15px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        h3 {
          font-size: 28px;
          margin-bottom: 5px;
        }
        p {
          font-size: 18px;
          color: #898989;
        }
        .desc {
          font-size: 14px;
          line-height: 30px;
          color: #898989;
        }
      }
      .desc-img {
        margin-left: 15px;
        width: 50%;
        border-radius: 10px;
      }
    }

    .desc-box {
      height: 320px;
      width: 100%;
      background-color: #fff;
      border-radius: 10px;
      position: absolute;
      bottom: 0;
      margin-bottom: -160px;
      left: 7.5%;
      width: 85%;
      box-shadow: 0 0 15px 0 rgb(0 0 0 / 10%);
      display: flex;
      justify-content: space-around;
      .desc-item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        >h3 {
          font-size: 36px;
          margin: 25px;
        }
        >div {
          height: 0;
          width: 20px;
          border: 2px solid #456;
        }
        >p {
          font-size: 15px;
          margin: 25px;
        }
      }
    }
  }
  .Certifications {
    margin-top: 160px;
    padding: 100px 7.5%;
    .cert-head {
      text-align: center;
      >h3 {
        font-size: 28px;
        line-height: 56px;
      }
      >p {
        font-size: 16px;
        color: #898989;
      }
    }
    .cert-box {
      margin: 100px auto;
      display: flex;
      height: 600px;
      flex-wrap: wrap;
      justify-content: space-between;
      >img {
        width: 30%;
        object-fit: contain;
      }
    }
  }
}
</style>