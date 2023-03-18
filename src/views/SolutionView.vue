<template>
  <div class="solution">
    <div class="header">
      <img style="width:100%" :src="transBoxImg" alt="">
    </div>
    <div class="service-area">
      <div class="service-header">
        <h3>货运和物流服务</h3>
        <p>Freight and logistics services</p>
      </div>
      <div class="service-desc">
        <p>无论您的商品是什么，无论是一个托盘、一个集装箱还是一千个集装箱，无论它在哪里，无论您想在哪里，</p>
        <p>我们的团队都将与您密切合作，帮您实现它。凭借严谨的运作体系和持续完善的服务网络，竭诚为广大客户提供安全、快速、专业、精准的物流服务。</p>
      </div>
      <div class="service-types">
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
    <div class="service-more">
      <div class="service-header">
        <h3>更多服务</h3>
        <p>Ask for More</p>
      </div>
      <div class="service-desc">
        <p>一切都是为了为您提供整体解决方案，但即使不处理您的货物，我们很乐意处理保险、海关和文书工作，</p>
        <p>以便您可以专注于您的业务，为您解决更多关于货运和物流服务。</p>
      </div>
      <div class="service-ex">
        <img :src="serviceBox" alt="">
        <div class="service-ex-items">
          <div>
            <h3>报关服务</h3>
            <div style="width:40px;background: #234;height: 4px;margin-bottom: 10px;border-radius: 1px;"></div>
            <p>通过我们的报关服务，我们可以帮助您避免代价高昂的延误、服务失败、罚款和货物被没收。 我们的整体清关服务可预测并消除任何错误机会，提供更好的控制并降低供应链风险。
              我们的报关服务可用于海运、陆运和空运，包括我们不自行处理的货物。</p>
          </div>
          <div>
            <h3>报关服务</h3>
            <div style="width:40px;background: #234;height: 4px;margin-bottom: 10px;border-radius: 1px;"></div>
            <p>
              我们通过第三方货物保险确保您的货物和货物免于丢失或损坏，让您的货物安心到达需要的地方。一切都是为了为您提供整体解决方案，但即使不处理您的货物，我们很乐意处理保险、海关和文书工作，
              以便您可以专注于您的业务，为您解决货运和物流服务。
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="service-solutions">
      <div class="service-header">
        <h3>为您的行业定制解决方案</h3>
        <p>Bespoke Solutions for your Industry</p>
      </div>
      <div class="solution-boxs">
        <div v-for="item of plans" class="solution-box">
          <div style="width: 100%;">
            <img :src="item.imgUrl" alt="">
            <p></p>
          </div>

          <p class="box-title">{{ item.title }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import transBoxImg from "@/assets/images/trans_box.webp"
import serviceBox from "@/assets/images/service_box.webp"
import planA from "@/assets/images/bg/plan_a.webp"
import planB from "@/assets/images/bg/plan_b.webp"
import planC from "@/assets/images/bg/plan_c.webp"
import planD from "@/assets/images/bg/plan_d.webp"
import planE from "@/assets/images/bg/plan_e.webp"
import planF from "@/assets/images/bg/plan_f.webp"
import { ref } from 'vue'

let plans = [
  { title: '易腐烂物品', desc: '作为短的保质期，对存储条件和温度的高度敏感，易腐烂的物品是业内许多人应避免的商品。 我们喜欢挑战，尤其是我们知道如何应对的挑战。 我们采用我们的多运输模式，将冷藏集装箱、冷藏卡车和温控空运服务与两者之间的正确存储相结合，以确保您的货物保持新鲜。 我们积极主动的团队将确保一次性完成所有文书工作，这样您的产品就不会因为等待文件而失去保质期。', imgUrl: planA },
  { title: '快消品', desc: '无论您正在寻找运输或存储和交付管理或所有这些的组合，我们确保我们的移动速度少与您的消费品一样快！ 我们仔细研究我们处理的每种产品的季节性，并围绕它规划我们的活动。 了解绝大部分下架的重要性，我们的团队随时准备为您的下一个活动及时移动、存储、包装、捆绑和分发您的商品。 我们会监控您的库存并在您的库存达到再订购点时进行标记。', imgUrl: planB },
  { title: '化学品和危险品', desc: '我们在处理化学品货运和物流方面的长期经验意味着您可以享受无忧无虑的体验。在处理所需文件之前，我们的 专家团队将评估您的产品并确定它们所属的类别。我们提供具有全球和本地安全措施的完整运输服务，并确保遵守运输法律和法规。我们拥有先进的仓库，配备多个仓室，可满足各类化学品的需求，同时容纳多个仓室。', imgUrl: planC },
  { title: '制药', desc: '多年来，我们一直受到业内一些知名人士的信任。 化妆品不仅需要妥善储存以保持其质量，而且还应小心处理，以便其包装始终体现出它们带来的美感。 我们提供完善且活跃的物流服务，能够满足日益增长的供应需求，让您随时准备好推出新系列。', imgUrl: planD },
  { title: '家具', desc: '没有什么比看起来旧的新家具更糟糕的了。家具处理不当意味着它可能会被划伤、撕裂或肿胀。我们确保家具物品被正确包装并在合适的条件下储存或运输，以将家具以原始状态运送到目的地。我们战略性地位于家具生产中心，为亚洲和美洲的家具行业专家提供一系列物流服务。', imgUrl: planE },
  { title: '化妆品', desc: '多年来，我们一直受到业内一些知名人士的信任。 化妆品不仅需要妥善储存以保持其质量，而且还应小心处理，以便其包装始终体现出它们带来的美感。 我们提供完善且活跃的物流服务，能够满足日益增长的供应需求，让您随时准备好推出新系列。', imgUrl: planF }
]


let hoverIndex = ref(7)


</script>
<style lang="scss" scoped>
.solution {
  .service-area,
  .service-more,
  .service-solutions {
    margin: 150px 7.5%;
    height: 750px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    .service-header,
    .service-desc {
      >h3 {
        font-size: 28px;
      }
      >p {
        font-size: 14px;
        color: #898989;
        height: 32px;
        line-height: 24px;
      }
    }
    .service-types {
      display: flex;
      justify-content: space-between;
      .service-box {
        width: 23%;
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
  .service-more {
    background: rgb(242 244 246);
    margin: 0;
    padding: 100px 7.5%;
    height: 850px;
    .service-ex {
      display: flex;
      justify-content: space-between;
      img {
        width: 50%;
        padding-right: 50px;
      }
      .service-ex-items {
        text-align: left;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 15px;
        h3 {
          font-size: 24px;
          margin-bottom: 10px;
        }
        p {
          line-height: 32px;
          color: #999999;
        }
      }
    }
  }
  .service-solutions {
    min-height: 1250px;
    .solution-boxs {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-content: space-between;
      .solution-box {
        text-align: left;
        position: relative;
        width: 32%;
        margin-top: 20px;
        img {
          width: 100%;
          border-radius: 5px;
        }
        p.box-title {
          margin: 10px 0 15px 0;
        }
      }
    }
  }
}
</style>