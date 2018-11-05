<template>
  <div class='resourceOverview'>
    <div class="left-bar">
      <Box title="年载畜量与养殖量趋势">
        <Bar1/>
      </Box>
      <Box title="年草产量趋势">
        <Bar2/>
      </Box>
      <Box title="鼠虫害面积统计">
        <Bar5/>
      </Box>

    </div>
    <div class="center">
      <Box>
          <div class="top-box"></div>
          <div class="bottom-box">
              <div class="chart-warp">
                   <h3>草畜平衡情况</h3>
                    <PieChart3/>
              </div>
              <div class="chart-warp">
                    <h3>承包面积分布情况</h3>
                    <PieChart3/>
              </div>
          </div>
      </Box>
      <Box title='草原环境'>
        <div class="weater-box">
          <WeaterItem :name="item.name" :value="item.value" v-for="item in weaters" :key="item.name" />
        </div>
      </Box>
    </div>
    <div class="right-bar">
      <Box title="黑土滩面积变化" >
        <LineChart :data="lindata1"/>
      </Box>
      <Box title="毒害草面积变化" >
        <LineChart  :data="lindata2"/>
      </Box>
      <Box title="退化面积变化" >
        <LineChart  :data="lindata3"/>
      </Box>
    </div>
  </div>
</template>


<script>
import LineChart from "../charts/line/line1";
import Bar1 from "../charts/bar/bar4";
import Bar2 from "../charts/bar/bar3";
import Bar5 from "../charts/bar/bar5";
import PieChart3 from '../charts/pie/pie3';
import WeaterItem from "../common/weather/index";
import Box from "../common/box";
export default {
  data() {
    return {
      weaters:[
        {
          name:'空气温度',
          value:'22.1℃'
        },
        {
          name:'空气湿度',
          value:'22.1℃'
        },
        {
          name:'风速',
          value:'22.1℃'
        },
        {
          name:'风向',
          value:'22.1℃'
        },
        {
          name:'降雨量',
          value:'22.1℃'
        }
        ,{
          name:'土壤温度',
          value:'22.1℃'
        }
        ,{
          name:'土壤湿度',
          value:'22.1℃'
        }
      ],
      lindata1: {
        xAxis: ["2016年", "2017年", "2018年"],
        yAxis: [320, 210, 185],
        color: [188, 235, 127]
      },

      lindata2: {
        xAxis: ["2016年", "2017年", "2018年"],
        yAxis: [290, 210, 181],
        color: [240, 155, 96]
      },

      lindata3: {
        xAxis: ["2016年", "2017年", "2018年"],
        yAxis: [290, 210, 181],
        color: [49, 173, 165]
      }
    };
  },
  components: {
    Box,
    LineChart,
    WeaterItem,
    Bar1,
    Bar2,
    Bar5,
    PieChart3

  }
};
</script>

<style lang="scss" scoped>
.right-bar,
.left-bar {
  .box {
    flex: 1;
    margin-top: 0 !important;
    margin-bottom: 12px;
    &:last-child {
      margin: 0;
    }
  }
}
.center{
  .box:nth-child(1){
    flex: 5!important;
  }
  .box:nth-child(2){
    flex: 1;
    height: auto!important;
  }
  .weater-box{
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
  }
  .top-box{
      flex: 1;
  }
  .bottom-box{
      height: 30%;
      display: flex;
      flex-direction: row;
      .chart-warp{
          flex: 1;
          height: 100%;
          background:rgba(3,47,61,.8);
          &:last-child {
            margin: 0 0 0 12px!important;
          }
          h3{
            padding: 0;
            margin:0;
            height: 26px;
            line-height: 26px;
            font-size: 16px;
            color: #72DBD3;
            font-weight: normal;
            text-indent: 10px;
            margin-bottom:15px;
            margin-top:5px;
        }
      }

  }
}
</style>
