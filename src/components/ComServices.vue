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
        <i style="font-size: 68px;" class="iconfont icon-aliyunshu"></i>
        <h4>公路运输</h4>
        <p>公路运输包括：疏港运输、厢式车运输、特种运输</p>
      </div>
      <div class="service-box">
        <i class="iconfont icon-alicangku"></i>
        <h4>仓储服务</h4>
        <p>仓库设施（海关监管仓）、核心业务（拼箱、储存、国内运输、多国货物拼箱）</p>
      </div>
      <div class="service-box">
        <i style="font-size: 68px;" class="iconfont icon-alilunchuan"></i>
        <h4>国际海运</h4>
        <p>专注于美线的海运订舱代理服务
          具有成本和舱位优势，与多家船公司有密切合作关系</p>
      </div>
      <div class="service-box">
        <i class="iconfont icon-alifeiji"></i>
        <h4>空运服务</h4>
        <p>进出口空运服务、保税空运和空运拼箱服务，提供全球包机或拆分包机选项以及快速通道或延期过境</p>
      </div>
    </div>
  </div>
  <div class="main-team">
    <img src="@/assets/images/team.webp" alt="">
    <div class="team-box">
      <div class="head">
        <h3>值得信赖的物流运输</h3>
        <span>Trustworthy Logistics</span>
      </div>
      <p style="line-height: 30px;color:#999999">
        物流运输有限公司成立于2004年，公司位于京港澳高速和绕城高速交汇处，地理位置十分便利，交通非常发达。公司以长沙为中心，业务辐射全国各地，承接全国各地整车。零担及大件设备运输业务。公司在全国各地合同运输车辆700多台；包括平板半挂车、高栏车、厢式车、半封闭车、冷藏车、特种运输车并有自备小型配送货车；有充足的运输保障能力。您可以直接访问我们位于全球主要地点的
        40 个办事处。 我们可靠的代理网络将我们的业务扩展到 100 多个国家。
      </p>
      <div class="team-items">
        <div v-for="item of teamItems" class="item">
          <h3 style="font-size: 32px;">{{ item.num }}</h3>
          <span style="border:2px solid #345678;margin: 10px auto;width: 30px;border-radius: 1px;"></span>
          <p>{{ item.name }}</p>
        </div>
      </div>
    </div>
  </div>

  <div class="main-solution">
    <h3>解决方案</h3>
    <p>solution</p>
    <div class="solution-content">
      <div class="solution-card">
        <img src="@/assets/images/solution.webp" alt="">
        <p class="card-sub-title">航空货运解决方案</p>
        <p class="card-sub-desc">空运一般用于以下作业：成为国际运输的重要工具，对于对外开外，促进国际间技术，经济合作与文化交流有重要作用；
          适用于高附加值，低质量小体积的物品运输；
          大多数情况下日常的基础上进行作业的；
          快捷运输途径；
          邮政运输手段；
        </p>
        <div class="card-footer">
          <span>2023-02-03</span>
          <span style="background: hsla(0,0%,60%,.15);width:80px;">
            热点方案
          </span>
        </div>
      </div>
      <div class="solution-list">
        <div class="solution-item" v-for="solution of solutions" :key="solution.name">
          <h4 class="solution-header">{{ solution.name }}</h4>
          <p class="solution-desc">{{ solution.desc }}</p>
          <div class="solution-footer">
            <span style="width:80px">解决方案</span>
            <span>{{ solution.time }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="main-certified">
    <div class="certified-content">
      <div class="certified-head">
        <h3 class="title">专业认证</h3>
        <p class="sub-title">We are Certified</p>
      </div>
      <p class="certified-desc">物我们认真对待我们所做的事情，并在我们的公司和便利设施中遵循管理、运营的高标准。 我们了解加入本地和国际行业机构可以增强我们为您提供优先服务的能力；
        我们的团队定期接受培训和认证，可以处理您的货物，无论他们可能需要什么特殊要求。</p>
      <div class="certified-list"></div>
    </div>
  </div>
</template>
<script lang="ts" setup>
let teamItems = [
  { name: '全国服务网点', num: '40+' },
  { name: '专业搬运团队', num: '2040+' },
  { name: '各式运输配送车辆', num: '400+' },
  { name: '客户好评案例', num: '14W' }
];
let solutions = [
  { name: '红酒白酒空运方案', desc: '上海空运红酒公司 上海红酒航空运输公司 上海葡萄酒航空托运公司 上海航空运输红酒公司 上海名酒托运公司 上海运酒公司 上海红酒运输公司 上海红酒托运公司 上海葡萄酒托运公司 上海托运红酒公司 空运葡萄酒', time: '2023-01-02' },
  { name: '设备运输解决方案', desc: '上海空运红酒公司 上海红酒航空运输公司 上海葡萄酒航空托运公司 上海航空运输红酒公司 上海名酒托运公司 上海运酒公司 上海红酒运输公司 上海红酒托运公司 上海葡萄酒托运公司 上海托运红酒公司 空运葡萄酒', time: '2023-01-02' },
  { name: '塑料颗粒托运解决方案', desc: '上海空运红酒公司 上海红酒航空运输公司 上海葡萄酒航空托运公司 上海航空运输红酒公司 上海名酒托运公司 上海运酒公司 上海红酒运输公司 上海红酒托运公司 上海葡萄酒托运公司 上海托运红酒公司 空运葡萄酒', time: '2023-01-02' }
]
</script>
<style lang="scss" scoped>
.main-services {
  display: flex;
  width: 90%;
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
        margin: 5px 0;
        font-size: 14px;
        color: #999999;
      }
    }
    .services-desc {
      font-size: 16px;
      line-height: 30px;
      color: #999999
    }
  }

  .services-boxs {
    width: 50%;
    height: 680px;
    margin: 30px 15px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: space-between;
    .service-box {
      width: 48%;
      height: 320px;
      background-color: #ffffff;
      box-shadow: 1px 1px 10px 1px rgba(97, 44, 196, 0.2);
      border-radius: 5px;
      transition: all .3s;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      padding: 20px 30px;
      .iconfont {
        font-size: 56px;
        color: #234567;
      }
      h4 {
        font-size: 28px;
      }
      p {
        color: #999999;
      }
      &:hover {
        transition: all .3s;
        transform: translateY(-15px);
        background-color: #234567;
        color: #ffffff;
        p {
          color: #ffffff
        }
        .iconfont {
          color: #ffffff
        }
      }
    }
  }
}
.main-team {
  width: 100%;
  margin: 100px auto;
  background: rgb(242 244 246);
  height: 750px;
  position: relative;
  img {
    width: 60%;
    height: 100%;
  }
  .team-box {
    position: absolute;
    top: 75px;
    right: 75px;
    width: 60%;
    height: 600px;
    background-color: #ffffff;
    border-radius: 5px;
    padding: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .head {
      h3 {
        font-size: 28px;
        font-weight: 500;
      }
      span {
        color: #999999;
      }
    }
    .team-items {
      width: 100%;
      height: 200px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      >.item {
        text-align: center;
        width: 160px;
        height: 160px;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
    }
  }
}

.main-solution {
  width: 90%;
  margin: 100px auto;

  >h3 {
    font-size: 28px;
  }
  >p {
    color: #999999
  }
  .solution-content {
    height: 500px;
    display: flex;
    justify-content: space-between;
    margin-top: 50px;

    >.solution-card {
      border-radius: 10px;
      width: 35%;
      height: 100%;
      box-shadow: 0 0 15px 0 rgb(0 0 0 / 10%);
      img {
        border-radius: 6px 6px 0 0;
      }
      .card-sub-title {
        font-size: 16px;
        margin: 15px 15px;
      }
      .card-sub-desc {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden;
        margin: 0 15px 15px 15px;
        font-size: 14px;
        color: #878787;
        height: 90px;
        line-height: 30px;
      }
      .card-footer {
        display: flex;
        justify-content: space-between;
        margin: 0 15px;
        color: #999999;
        span {
          line-height: 26px;
          height: 26px;
          border-radius: 13px;
          text-align: center;
          font-size: 12px;
          color: #878787;
        }
      }
    }
    >.solution-list {
      width: 60%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .solution-item {
        padding-bottom: 30px;
        border-bottom: 1px solid lightgray;
        .solution-header {
          font-size: 16px;
        }
        .solution-desc {
          color: #999999;
          margin: 20px 0;
        }
        .solution-footer {
          font-size: 13px;
          display: flex;
          justify-content: space-between;
          color: #878787;

          height: 26px;
          line-height: 26px;
          &>span:nth-child(1) {
            background: hsla(0, 0%, 60%, .15);
            border-radius: 13px;
            text-align: center;
          }
        }
      }
    }
  }
}
.main-certified {
  background-color: hsla(0, 0%, 60%, .15);
  width: 100%;
  height: 450px;
  padding: 50px 0;
  .certified-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 90%;
    height: 100%;
    margin: 0 auto;
    .certified-head {
      >.title {
        font-size: 28px;
        margin: 10px 0;
      }
      >.sub-title {
        color: #878787;
        font-size: 14px;
      }
    }
    .certified-desc {
      height: 72px;
      color: #999999;
      line-height: 40px;
    }
    .certified-list {
      height: 124px;

      border-bottom: 1px solid rgb(228, 231, 235);
    }
  }
}
</style>