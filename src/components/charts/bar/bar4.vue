<template>
  <div ref="myChart" class="myChart-wrapper">
  </div>
</template>

<script>
// 引入基本模板
let echarts = require("echarts/lib/echarts");
// 引入柱状图组件
require("echarts/lib/chart/bar");
require("echarts/lib/component/legend/LegendView.js");
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
          let option = {
            legend: {
                    show: true,
                    data: ['载畜量', '养殖量'],
                    right: "40",
                    icon: 'circle',
                    textStyle: { color: "#82bcff" }
            },
    		grid: {
    		    left: 0,
    		    right: '2%',
                bottom: '3%',
                top:'12%',
    		    containLabel: true
    		},
    		 xAxis: [
    		    {
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
    		        data : ['2008','2012','2018']
    		    }
    		],
    		yAxis : [
    		    {
    		        type: "value",
                    name: "(万头)",
                    offset: 0,
                    nameTextStyle: {
                        color: "rgba(255,255,255,.5)",
                        fontSize: 12,
                        textShadowColor: "#000",
                        textShadowOffsetY: 0,
                        //padding:[5,0,0,0]
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
    		    }
    		],
    		series : [

    		    {
    		        name:'载畜量',
    		        type:'bar',
    		        color:['#D1F591'],
    		        barMaxWidth: 6,
            		itemStyle: {
                    normal: {
                        barBorderRadius: 30,
                        shadowBlur: 1,
                        shadowColor: "rgba(188,235,127,0.02)",
                        shadowOffsetX: 22
                    },
                    emphasis: {
                        opacity: 1
                    }
                },
    		        data:[90,90,90]
    		    },
    		    {
    		        name:'养殖量',
    		        type:'bar',
    		        color:['#3D6D70'],
    		        barMaxWidth: 6,
            		itemStyle: {
                    normal: {
                        barBorderRadius: 30,
                        shadowBlur: 1,
                        shadowColor: "rgba(188,235,127,0.02)",
                        shadowOffsetX: 22
                    },
                    emphasis: {
                        opacity: 1
                    }
                },
    		        data:[70,70,70]
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
