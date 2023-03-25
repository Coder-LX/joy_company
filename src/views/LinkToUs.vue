<template>
  <div class="link-us">
    <img src="@/assets/images/slide.jpg" alt="">
    <div class="link-title">
      <h3>联系我们</h3>
      <p>Contact Us</p>
    </div>
    <div class="link-address">
      <img src="@/assets/images/business.jpg" alt="">
      <div class="address-wrapper">
        <div class="item">
          <div>苏州XXXX总部</div>
          <div>公司地址：XXX省XXX市XXX县XXX路XXX号 </div>
          <div>区域邮编：100000</div>
          <div>联系人：乔先生</div>
        </div>
        <div class="item">
          <div>苏州XXXX总部</div>
          <div>公司地址：XXX省XXX市XXX县XXX路XXX号 </div>
          <div>区域邮编：100000</div>
          <div>联系人：乔先生</div>
        </div>
      </div>
    </div>
    <div class="link-map">
      <div id="container"></div>
    </div>

  </div>
</template>

<script setup lang="ts">
import AMapLoader from '@amap/amap-jsapi-loader';
import { shallowRef } from '@vue/reactivity';
import { onMounted } from 'vue';
let map: any = shallowRef(null);

const initMap = () => {
  AMapLoader.load({
    key: "d609af0dab0abd678ae6a503542614d9",
    version: "2.0",
    plugins: [''],
  }).then((AMap) => {

    let marker = new AMap.Marker({
      position: [120.677614, 31.318664],
      title: '陆海国际货运代理服务有限责任公司',
    });

    let infoWindow = new AMap.InfoWindow({
      offset: new AMap.Pixel(0, -30),
      content: '苏州市金鸡湖大道5588号苏州中心大楼1栋F3',
    });

    map = new AMap.Map("container", {
      viewMode: "2D",
      center: [120.677614, 31.318664],
    });

    map.add(marker)
    map.setFitView([marker])
    infoWindow.open(map, marker.getPosition())
    marker.on('click', (e: any) => {
      infoWindow.open(map, e.target.getPosition())
    })
  }).catch(e => {
    console.log(e);
  })
}

onMounted(() => {
  initMap();
})


</script>

<style lang="scss" scoped>
.link-us {
  >img {
    height: 400px;
    width: 100%;
    object-fit: cover;
    object-position: bottom;
    margin-bottom: 100px;
  }
  .link-title {
    text-align: center;
    h3 {
      font-size: 28px;
    }
    p {
      font-size: 14px;
      color: #898989;

    }
  }
  .link-address {
    padding: 50px 7.5%;
    display: flex;
    >img {
      padding-right: 20px;
      width: 50%;
    }
    .address-wrapper {
      padding-left: 30px;
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      justify-content: space-around;
      >.item {
        display: flex;
        flex-direction: column;
        >div {
          margin: 10px;
          color: #898989;
          font-size: 14px;
          &:first-child {
            font-size: 16px;
            color: black;
          }
        }
      }
    }
  }
  .link-map {
    padding: 50px 7.5%;
    #container {
      width: 100%;
      height: 500px;
    }
  }
}
</style>