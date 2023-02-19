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

      <p class="services-desc">公司在全国各地合同运输车辆700多台；
        包括平板半挂车、高栏车、厢式车、半封闭车、冷藏车、特种运输车并有自备小型配送货车；
        除此还提供海运、航空运输服务。有充足的运输保障能力。公司与多家大中型企业建立了长期的战略合作伙伴关系。
        凭借严谨的运作体系和持续完善的服务网络，竭诚为广大客户提供安全、快速、专业、精准的物流服务。
      </p>
      <div class="services-cover">
        <img style="width:100%;height: 350px;" src="@/assets/images/transBox.webp" alt="">
      </div>
    </div>
    <div class="services-boxs">
      <div class="service-box">
        <i class="iconfont icon-aliyunshu"></i>
        <h4>公路运输</h4>
        <p>公路运输</p>
      </div>
      <div class="service-box">
        <i class="iconfont icon-alicangku"></i>
      </div>
      <div class="service-box">
        <i class="iconfont icon-alilunchuan"></i>
      </div>
      <div class="service-box">
        <i class="iconfont icon-alifeiji"></i>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
</script>
<style lang="scss" scoped>
.main-services {
  display: flex;
  width: 1440px;
  height: 760px;
  margin: 0 auto;

  .services-block {
    width: 50%;
    height: 700px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 30px 15px;

    .services-title {
      font-size: 28px;

      .services-subtitle {
        font-size: 16px;
      }
    }

    .services-desc {
      font-size: 16px;
      line-height: 30px;
    }
  }

  .services-boxs {
    width: 50%;
    height: 700px;
    margin: 30px 15px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    align-content: space-between;

    .service-box {
      width: 330px;
      height: 330px;
      background-color: #ffffff;
      box-shadow: 1px 1px 10px 1px rgba(97, 44, 196, 0.2);
      border-radius: 5px;
      transition: all .3s;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;

      .iconfont {
        font-size: 56px;
        color: #234567;
      }

      &:hover {
        transition: all .3s;
        transform: translateY(-15px);

        .icon-font {
          color: #ffffff;
        }

        background-color: #234567;
      }
    }
  }
}
</style>