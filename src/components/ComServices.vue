<template>
  <div class="main-services">
    <div class="services-block">
      <div class="services-title">
        <div>
          货运和物流服务
        </div>
        <div class="services-subtitle">
          Freight and logistics services
        </div>
      </div>

      <div class="services-desc">公司在全国各地合同运输车辆700多台；
        包括平板半挂车、高栏车、厢式车、半封闭车、冷藏车、特种运输车并有自备小型配送货车；
        除此还提供海运、航空运输服务。有充足的运输保障能力。公司与多家大中型企业建立了长期的战略合作伙伴关系。
        凭借严谨的运作体系和持续完善的服务网络，竭诚为广大客户提供安全、快速、专业、精准的物流服务。
      </div>
      <div class="services-cover">
        <img src="@/assets/images/transBox.webp" alt="">
      </div>
    </div>
    <div class="services-boxs">
      <div class="service-box">
        <div class="box-content">
          <img src="../assets/images/box-car.webp" alt="">
        </div>
      </div>
      <div class="service-box"></div>
      <div class="service-box"></div>
      <div class="service-box"></div>
    </div>
  </div>
</template>
<script lang="ts" setup>
</script>
<style lang="scss" scoped>
.main-services {
  display: flex;
  width: 1440px;
  height: 860px;
  margin: 0 auto;

  .services-block {
    width: 50%;
    height: 100%;
    background-color: #456;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .services-title {
      font-size: 28px;

      .services-subtitle {
        font-size: 16px;
      }
    }

    .services-desc {
      font-size: 14px;
    }
  }

  .services-boxs {
    width: 50%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: center;

    .service-box {
      width: 333px;
      height: 333px;
      background-image: url(@/assets/images/boxBg.webp);
      transition: all .3s;

      &:hover {
        transition: all .3s;
        transform: translateY(-15px);
      }
    }
  }
}
</style>