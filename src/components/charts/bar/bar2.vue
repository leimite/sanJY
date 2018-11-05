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
          let option = {
            /* legend: {
    		    data:['草地','黑土地','水域','建筑/裸地']
    		}, */
    		grid: {
    		    left: 0,
    		    right: '12%',
                bottom: '3%',
                top:'20',
    		    containLabel: true
    		},
    		 yAxis: [
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
    		xAxis : [
    		    {
    		        type: "value",
                    name: "(km²)",
                    offset: 0,
                    nameTextStyle: {
                        color: "rgba(255,255,255,.5)",
                        fontSize: 12,
                        textShadowColor: "#000",
                        textShadowOffsetY: 0,
                        padding:[25,0,0,0]
                    },
                    position:'bottom',
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
    		        name:'草地',
    		        type:'bar',
    		        stack:'one',
    		        //stack 是归类的意思。
    		        //例如：将stack:'one' 的归为一类。stack 后的参数，任意命名。
    		        color:['#BCEB7F'],
    		        barMaxWidth: 6,
                    barCategoryGap:30,
    		        itemStyle: {
                    normal: {
                       barBorderRadius:  [30,0,0,30],
                        shadowBlur: 1,
                        shadowColor: "rgba(188,235,127,0.02)",
                        shadowOffsetY: 22
                    },
                    emphasis: {
                        opacity: 1
                    }
                },
    		        data:[60,60,60]
    		    },
    		    {
    		        name:'黑土地',
    		        type:'bar',
    		        stack: 'one',
    		        color:['#3D6D70'],
                    barMaxWidth: 6,
                    barCategoryGap:30,
    		        itemStyle: {
                        normal: {
                             barBorderRadius: [0,30,30,0],
                             shadowBlur: 1,
                             shadowColor: "rgba(188,235,127,0.02)",
                             shadowOffsetY: 22
                        },
                        emphasis: {
                            opacity: 1
                        }
                    },
    		        data:[180,180,180]
    		        //y轴的值，通过 堆积得到。
    		        //例如：在一个垂直的柱子里显示2个堆积项，则由2个堆积项相加得到数值。
    		    },
    		    {
    		        name:'水域',
    		        type:'bar',
    		        stack: 'two',
    		        color:['#5AD2FA'],
                    barMaxWidth: 6,
                    barCategoryGap:30,
            		itemStyle: {
                    normal: {
                        barBorderRadius: 30,
                        shadowBlur: 1,
                        shadowColor: "rgba(188,235,127,0.02)",
                        shadowOffsetY: 22
                    },
                    emphasis: {
                        opacity: 1
                    }
                },
    		        data:[90,90,90]
    		    },
    		    {
    		        name:'建筑/裸地',
    		        type:'bar',
    		        color:['#7A8DEB'],
                    barMaxWidth: 6,
                    barGap: '200%',
            		itemStyle: {
                    normal: {
                        barBorderRadius: 30,
                        shadowBlur: 1,
                        shadowColor: "rgba(188,235,127,0.02)",
                        shadowOffsetY: 22
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
