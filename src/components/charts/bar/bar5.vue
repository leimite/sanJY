<template>
  <div ref="myChart" class="myChart-wrapper">
  </div>
</template>

<script>
// 引入基本模板
let echarts = require("echarts/lib/echarts");
// 引入柱状图组件
require("echarts/lib/chart/bar");
  export default {
    name: 'myChart',
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
      this.initChart()
    },

    methods: {
      initChart() {
          this.myChart = echarts.init(this.$refs.myChart)
            function toPercent(point) {
                let str = Number(point * 10).toFixed(1);
                str += "%";
                return str;
            }
            let data = [5, 9, 3, 8, 6, 4, 7, 6, 9, 6];
            let data1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
          let option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: { // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                },
                formatter: function(params) {
                var str = params[0].name + "<br>";
                params.forEach(function(v, i) {
                    if(i==3||i==1){
                        return;
                    }else{
                    str += v.seriesName + ": " + v.value + "万亩" + "<br>";
                    }

                });
                return str
            },
            },
            legend: {
                show: true,
                data: ['发生面积', '危害面积'],
                right: "40",
                icon: 'circle',
                textStyle: { color: "#82bcff" }
            },
            grid: {
                left: '1%',
                right: '1%',
                bottom: '3%',
                top: '15%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                axisTick : {
                    show: false,
                    alignWithLabel: true,
                    length:5,

                },
                axisLabel: {
                    color: "rgba(255,255,255,.5)",
                    fontSize: 12,
                    padding:[0,10,0,0],
                },

                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "rgba(255,255,255,.5)"
                    }
                },
                data: ['蝗虫', '高原鼢鼠', '草原蝗虫', '高原鼠兔']
            },
            yAxis: {
                type: "value",
                name: "(万亩)",
                offset: 0,
                nameTextStyle: {
                    color: "rgba(255,255,255,.5)",
                    fontSize: 12,
                    textShadowColor: "#000",
                    textShadowOffsetY: 0,
                    padding:[5,0,0,0]
                },
                position:'top',
                axisTick : {show: false},
                axisLine: {
                    show: false,
                    lineStyle:{
                        color:'#fff',
                    }
                },
                axisLabel: {
                            color: "rgba(255,255,255,.5)",
                            fontSize: 12,
                            padding:[0,10,0,0],
                        },
                splitLine: {
                    show: true,
                    lineStyle:{
                    type:'dashed',
                        color: "rgba(255,255,255,.1)"
                    }
                },

            },
            series: [ {
                name: '发生面积',
                type: 'bar',
                stack: '总量',
                barWidth: 10,
                itemStyle: {
                    normal: {
                        //barBorderRadius:
                        //borderColor: '#3fa7dc',
                        color: 'rgba(102,60,78,.9)'

                    }
                },
                barGap: "0",
                data: data
            }, {
                name: '总量',
                type: 'bar',
                stack: '总量',
                itemStyle: {
                    normal: {
                        /*barBorderRadius: 10,*/
                        //borderColor: '#ff8464',
                        color: '#FF6675'

                    }
                },
                data: data1,
                barCategoryGap: '-10%',
                barMinHeight: 4
            },
            {
                name: '危害面积',
                type: 'bar',
                stack: '111',
                barWidth: 10,
                itemStyle: {
                    normal: {
                        //barBorderRadius: 10,
                        //borderColor: '#3fa7dc',
                        color: 'rgba(47,69,66,.9)'

                    }
                },
                data: data
            }, {
                name: '1',
                type: 'bar',
                stack: '111',
                itemStyle: {
                    normal: {
                        color: '#EBD47A'

                    }
                },
                data: data1,
                barMinHeight: 4,
                barGap: "0"
            }]
          }

          this.myChart.setOption(option);
          window.addEventListener('resize',()=>{
                this.myChart.resize();
          },true)
        }

      }
  }
</script>

<style lang="scss" scoped>
  //@import "./../../../assets/css/_letiable.scss";
  .myChart-wrapper {
    width: 100%;
    height: 100%;
  }
</style>
