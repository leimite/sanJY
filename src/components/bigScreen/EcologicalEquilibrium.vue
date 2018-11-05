<template>
  <div class="EcologicalEquilibrium">
    <div class="left-bar">
      <Box title="资源概览">
          <PieChart/>
      </Box>
      <Box title="多年资源面积变化">
          <BarChart2/>
      </Box>

    </div>
    <div class="center">
      <Box></Box>
      <div class="center-bottom">
        <Box title="实时气象">
            <div class="weater-box">
            <WeaterItem :name="item.name" :value="item.value" v-for="item in weaters" :key="item.name" />
            </div>
        </Box>
        <Box title="2018年气象情况">
            <BarChart3/>
        </Box>
      </div>
    </div>
    <div class="right-bar">
      <Box title="草面积分布">
          <PieChart2/>
      </Box>
      <Box title="草面积详情">
          <BarChart/>
      </Box>
    </div>
  </div>
</template>

<script>
import Box from '../common/box';
import PieChart from '../charts/pie/pie1';
import PieChart2 from '../charts/pie/pie2';
import BarChart from '../charts/bar/bar1';
import BarChart2 from '../charts/bar/bar2';
import BarChart3 from '../charts/bar/bar3';
import WeaterItem from "../common/weather/index2";
//import BarChart4 from '../charts/bar/bar4';
export default {
  name: "home",
  data(){
      return{
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
            name:'风速',
            value:'22.1℃'
            }
        ]
      }
  },
  components: {
    Box,
    PieChart,
    PieChart2,
    BarChart,
    BarChart2,
    BarChart3,
    WeaterItem
    //BarChart4,
  }
};
</script>

<style lang="scss" scoped>
    .EcologicalEquilibrium{
        .weater-box{
            padding: 0 10px;
            display: flex;
            justify-content: space-between;
        }
        .center-bottom{
            height:24.7%;
            margin-top: 12px;
            display: flex;
            flex-direction: row;
            .box{
                flex: 1;
                height: 100%;
                &:last-child {
                    margin: 0 0 0 12px!important;
                    height: 100%!important;
                }
            }
        }
    }
</style>

