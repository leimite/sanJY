<template>
  <div ref="myChart" class="myChart-wrapper">
  </div>
</template>

<script>
// 引入基本模板
let echarts = require("echarts/lib/echarts");
require("echarts/lib/component/legend.js");
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
        this.myChart = echarts.init(this.$refs.myChart);
        let option = {
            legend: {
                    show: true,
                    data: ['趋势'],
                    right: "40",
                    top:0,
                    icon: 'circle',
                    textStyle: { color: "#82bcff" }
            },
            tooltip : {
                trigger: 'axis',
                        axisPointer: {
                            type: 'shadow',
                            shadowStyle: {
                                color: 'rgba(0,46, 115, 0.3)'
                            }
                        },
                        /* formatter: function(params) {
                            var str = '';
                            params.forEach(function(v, i) {
                                str += '收购价 ' + '<br>' + '日度： ' + params[0].data;
                            });
                            return str

                        }, */
                        textStyle: {
                            align: 'left',
                            color: '#5cc1ff',
                            fontSize: '16'
                        },
                        backgroundColor: 'rgba(15, 52, 135, 0.5)',
                        borderWidth: '1',
                        borderColor: '#5cc1ff',
                        extraCssText: 'box-shadow: 0 0 10px rgba(255, 255, 255, 0.7);'
                    },
                    label: {
                                normal: {
                                    textStyle: {
                                        color: "#ff3b00"
                                    }
                                },
                                emphasis:{
                                    textStyle:{
                                        color:"#ff3b00"
                                    }
                                }
                            },
                    grid: {
                        left: '1%',
                        right: '1%',
                        bottom: '1%',
                        top:'20%',
                        containLabel: true
                    },
                    yAxis: [{
                        type: "value",
                        name: "(km²)",
                        offset: 0,
                        nameTextStyle: {
                            color: "rgba(255,255,255,.5)",
                            fontSize: 12,
                            textShadowColor: "#000",
                            textShadowOffsetY: 0,
                            padding:[10,0,0,0]
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
                    }],

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
                        inverse:'true', //排序
                        axisLine: {
                            show: true,
                            lineStyle: {
                                color: "rgba(255,255,255,.5)"
                            }
                        },
                        data : ['2005','2006',"2007",'2008',"2009","2010","2011","2012", "2013","2014"],
                    },
                    series: [
                        {
                            name: '趋势',
                            type: 'bar',
                            barWidth : 6,
                            color:['#58AAA4'],
                            itemStyle: {
                                normal: {
                                barBorderRadius:  [30],
                                    shadowBlur: 1,
                                    shadowColor: "rgba(188,235,127,0.02)",
                                    shadowOffsetX: 12
                                },
                                emphasis: {
                                    opacity: 1
                                }
                            },
                            // 顺序 从下向上 传入
                            data:[370,250,200,235,178,150,300,180,350,270]
                        }
                    ]
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
