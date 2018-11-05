<template>
    <div ref='myChart'></div>
</template>
<script>
// 引入基本模板
let echarts = require("echarts/lib/echarts");
// 引入柱状图组件
require("echarts/lib/chart/line");
import tootip from "../../../assets/images/tooltip.png";
// 引入提示框和title组件
export default {
  name: "line1",
  props: {
    title: {
      type: String
    },
    data:{
        type:Object,
        default:()=>{
            return{
                xAxis:[],
                yAxis:[],
                color:[188,235,127]
            }
        }
    }
  },
  mounted() {
    this.initCharts();
  },
  methods: {
    initCharts() {
      console.log(this.$refs)
      let dom=this.$refs.myChart
      let myChart = echarts.init(dom);
      let option = {
        backgroundColor: "rgba(0,0,0,0)",
        grid: {
          left: 10,
          right: 20,
          bottom: 10,
          top: 10,
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            data: this.data.xAxis,
            axisLabel: {
              show: true,
              interval: 0,
              fontSize: 12,
              color: "rgba(255,255,255,.5)"
            },
            axisTick: {
              show: false
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: "rgba(255,255,255,.5)"
              }
            },
            // splitNumber:7,
            // interval:10,
            boundaryGap: false
          }
        ],
        yAxis: {
          name: "（万亩）",
          max:500,
          offset: 0,
          nameTextStyle: {
            color: "#fff",
            fontSize: 12,
            textShadowColor: "#000",
            textShadowOffsetY: 0
          },
          type: "value",
          splitLine: {
            show: true,
            lineStyle: {
              type: "dashed",
              color: "rgba(255,255,255,.1)"
            }
          },
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: "rgba(255,255,255,.5)",
            fontSize: 12,
            padding:[0,10,0,0],
          }
        },
        series: [
          {
            name: "体重",
            type: "line",
            smooth: true,
            symbol: "circle",
            symbolSize: 8,
            showSymbol: true,
            lineStyle: {
              normal: {
                width: 1,
                color: `rgba(${this.data.color[0]},${this.data.color[1]},${this.data.color[2]},1)`,
                shadowBlur: 1,
                shadowColor: "rgba(188,235,127,0.2)",
                shadowOffsetY: 32
              }
            },
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(1, 1, 1, 0, [
                  {
                    offset: 0,
                    color: `rgba(${this.data.color[0]},${this.data.color[1]},${this.data.color[2]}, 0.05)`
                  },
                  {
                    offset: 1,
                    color: `rgba(${this.data.color[0]},${this.data.color[1]},${this.data.color[2]}, 0.2)`
                  }
                ])
              }
            },
            itemStyle: {
              normal: {
                color: "#ffffff",
                // borderColor: "rgba(255,255,255,0.6)",
                borderColor: `rgba(${this.data.color[0]},${this.data.color[1]},${this.data.color[2]}, 0.2)`,
                borderWidth: 10
              }
            },

            label: {
              show: true,
              position: "top",
              // borderColor:'red',

              backgroundColor: {
                image: tootip
              },
              color: "#ffffff",
              fontSize: 12,
              padding:[10,10]
            },

            data: this.data.yAxis
          }
        ]
      };
      myChart.setOption(option);
      window.addEventListener('resize',()=>{
        this.myChart.resize();
      },true)
      // window.onresize = () => {
      //      myChart.resize();
      // };
    }
  },
  components: {}
};
</script>
<style lang="scss" scoped>
div{
  width: 100%;
  height: 100%;
}
</style>

