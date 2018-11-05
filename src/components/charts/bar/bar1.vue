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
        let colorArray = [
                    {
                        top: 'rgba(23,108,155)',//红shen
                        bottom: 'rgba(23,108,155, 0.3)'
                    },
                    {
                        top: 'rgba(78,141,174)',//黄
                        bottom: 'rgba(78,141,174, 0.3)'
                    },
                    {
                        top: 'rgba(113,166,182)',//绿
                        bottom: 'rgba(113,166,182, 0.3)'
                    },
                    {
                        top: 'rgba(0,122,109)',//蓝
                        bottom: 'rgba(0,122,109, 0.3)'
                    },
                    {
                        top: 'rgba(74,161,154)',//深蓝
                        bottom: 'rgba(74,161,154, 0.3)'
                    },
                    {
                        top: 'rgba(94,168,88)',//粉
                        bottom: 'rgba(94,168,88, 0.3)'
                    },
                    {
                        top: 'rgba(141,171,72)',//红shen
                        bottom: 'rgba(141,171,72, 0.3)'
                    },
                    {
                        top: 'rgba(202,205,106)',//黄
                        bottom: 'rgba(202,205,106, 0.3)'
                    },
                    {
                        top: 'rgba(197,150,76)',//绿
                        bottom: 'rgba(197,150,76, 0.3)'
                    },
                    {
                        top: 'rgba(186,118,102)',//蓝
                        bottom: 'rgba(186,118,102, 0.3)'
                    },
                    {
                        top: 'rgba(168,73,87)',//深蓝
                        bottom: 'rgba(168,73,87, 0.3)'
                    },
                    {
                        top: 'rgba(169,93,139)',//粉
                        bottom: 'rgba(169,93,139, 0.3)'
                    },
                    {
                        top: 'rgba(100,66,133)',//深蓝
                        bottom: 'rgba(100,66,133, 0.3)'
                    },
                    {
                        top: 'rgba(83,91,136)',//粉
                        bottom: 'rgba(83,91,136, 0.3)'
                    }
        ];
          let option = {
            //backgroundColor:'#12234F',
                title: {
                    text: '',
                },
                tooltip: {
                    trigger: 'item',
                    formatter: "{b}<br/><b> {c}</b>平方米",
                },
                grid: {
                    top:'3%',
                    left: '1%',
                    right: '8%',
                    bottom: '6%',
                    containLabel: true
                },
                xAxis:  {
                    type: "value",
                    name: "(亩)",
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
                            data: ['高山嵩草','高山嵩草&矮生嵩草','高山嵩草&杂类草','矮生嵩草','矮生嵩草&杂类草','线叶蒿草',
                            '线叶蒿草&早熟禾','线叶蒿草&杂类草','苔草、蒿草(具金露梅)','苔草、蒿草(具高山柳)','藏蒿草',
                            '垂穗披碱草','苔草、蒿草(具高山柳)', '苔草、蒿草(具高山柳']
                        }

                ],

                //series[0]即"辅助"这个series,将itemStyle的color和barBorderColor设为
                //rgba(0,0,0,0),即透明,data的数据设置一样的,这样在视觉的效果上第二个柱子
                //会和坐标轴有间距.
                series: [
                    {
                        name: "辅助",
                        type: "bar",
                        stack: "总",
                        barWidth: 6,
                        itemStyle: {
                            normal: {
                                barBorderColor: 'rgba(0,0,0,0)',
                                color: 'rgba(0,0,0,0)'
                            }
                        },
                        data: [15,15, 15, 15,15,15,15, 15, 15,15,15,15, 15, 15,15]
                    },
                    {
                        name: '',
                        type: 'bar',
                        stack: "总",
                        data: [ 60, 132, 101, 134,230,180,60, 132, 101, 134,230,180, 101, 134],
                        barWidth: '6',
                        itemStyle:{
                            normal: {
                                show: true,
                            color: function (params) {
                                    let num = colorArray.length;
                                    return{
                                        type: 'linear',
                                        colorStops: [{
                                            offset: 0, color: colorArray[params.dataIndex%num].bottom
                                        }, {
                                            offset: 1, color: colorArray[params.dataIndex%num].top
                                        }, {
                                            offset: 0, color: colorArray[params.dataIndex%num].bottom
                                        }, {
                                            offset: 1, color: colorArray[params.dataIndex%num].top
                                        }, {
                                            offset: 0, color: colorArray[params.dataIndex%num].bottom
                                        }, {
                                            offset: 1, color: colorArray[params.dataIndex%num].top
                                        }, {
                                            offset: 0, color: colorArray[params.dataIndex%num].bottom
                                        }, {
                                            offset: 1, color: colorArray[params.dataIndex%num].top
                                        }, {
                                            offset: 0, color: colorArray[params.dataIndex%num].bottom
                                        }, {
                                            offset: 1, color: colorArray[params.dataIndex%num].top
                                        }, {
                                            offset: 0, color: colorArray[params.dataIndex%num].bottom
                                        }, {
                                            offset: 1, color: colorArray[params.dataIndex%num].top
                                        },{
                                            offset: 0, color: colorArray[params.dataIndex%num].bottom
                                        }, {
                                            offset: 1, color: colorArray[params.dataIndex%num].top
                                        }, {
                                            offset: 0, color: colorArray[params.dataIndex%num].bottom
                                        }, {
                                            offset: 1, color: colorArray[params.dataIndex%num].top
                                        }, {
                                            offset: 0, color: colorArray[params.dataIndex%num].bottom
                                        }, {
                                            offset: 1, color: colorArray[params.dataIndex%num].top
                                        }, {
                                            offset: 0, color: colorArray[params.dataIndex%num].bottom
                                        }, {
                                            offset: 1, color: colorArray[params.dataIndex%num].top
                                        }, {
                                            offset: 0, color: colorArray[params.dataIndex%num].bottom
                                        }, {
                                            offset: 1, color: colorArray[params.dataIndex%num].top
                                        }, {
                                            offset: 0, color: colorArray[params.dataIndex%num].bottom
                                        }, {
                                            offset: 1, color: colorArray[params.dataIndex%num].top
                                        }, {
                                            offset: 0, color: colorArray[params.dataIndex%num].bottom
                                        }, {
                                            offset: 1, color: colorArray[params.dataIndex%num].top
                                        }, {
                                            offset: 0, color: colorArray[params.dataIndex%num].bottom
                                        }, {
                                            offset: 1, color: colorArray[params.dataIndex%num].top
                                        }],
                                        //globalCoord: false
                                    }
                                },
                                barBorderRadius:88,
                                borderWidth:0,
                                borderColor:'#333',
                            }
                        },
                        //为柱状添加顶部显示
                        label: {
                            normal: {
                                show: false
                            }
                        },
                    },
                ],
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
