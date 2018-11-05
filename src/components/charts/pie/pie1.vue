<template>
  <div ref="myChart" class="myChart-wrapper">
  </div>
</template>

<script>
// 引入基本模板
let echarts = require("echarts/lib/echarts");
// 引入柱状图组件
require("echarts/lib/chart/pie");
require("echarts/lib/component/title.js");
require("echarts/lib/component/legend.js");
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
            var color =["#BCEB7F", "#3D6D70","#5AD2FA","#7A8DEB","#458F7B"];

            var dataArr = [{
                value: 15,
                name: '草地',
                itemStyle: {
                    normal: {
                        color: "#7A8DEB"
                    }
                }
            }, {
                value: 18,
                name: '水域',
                itemStyle: {
                    normal: {
                        color:"#3D6D70"
                    }
                }
            }, {
                value: 15,
                name: '建筑/裸地',
                itemStyle: {
                    normal: {
                        color: "#5AD2FA"
                    }
                }
            }, {
                value: 118,
                name: '黑土滩',
                itemStyle: {
                    normal: {
                        color: "#BCEB7F"
                    }
                }
            }];
            var dataArr1 = [{
            value: 133,
                name: '草地',
                itemStyle: {
                    normal: {
                        color: "#7A8DEB"
                    }
                }
            }, {
                value: 18,
                name: '水域',
                itemStyle: {
                    normal: {
                        color:"#3D6D70"
                    }
                }
            }, {
                value: 15,
                name: '建筑/裸地',
                itemStyle: {
                    normal: {
                        color: "#5AD2FA"
                    }
                }
            }];
          let option = {
                title: [{
                        text: '6,689',
                        left: '49%',
                        top: '25%',
                        textAlign: 'center',
                        textBaseline: 'middle',
                        textStyle: {
                            color: '#A3F0EB',
                            fontWeight: 'normal',
                            fontSize: 32
                        }
                    }, {
                        text: '总面积(km²)',
                        left: '50%',
                        top: '35%',
                        textAlign: 'center',
                        textBaseline: 'middle',
                        textStyle: {
                            color: '#BDD4CE',
                            fontWeight: 'normal',
                            fontSize: 14
                        }
                    }],
                    legend: {
                            show: true,
                            itemGap: 12,
                            bottom:20,
                            left:'10%',
                            itemGap:20,
                            icon: 'circle',
                            orient: 'vertical',
                            //data: ['草地', '黑土滩', '水域', '建筑/裸地'],
                            formatter:(name)=>{
                                let value=dataArr.filter((v)=>{
                                    return v.name==name
                                })
                                return [
                                '{a|'+name+'}{b|'+value[0].value+'}{c||}{b|50%}'
                            ].join('\n')
                            },
                            textStyle:{
                                rich: {
                                    a: {
                                        color: '#82939B',
                                        align: 'left',
                                        padding:[0,30,0,0],
                                    },
                                    b: {
                                        color: '#427583',
                                        align: 'left',
                                        fontSize:16,
                                        padding:[0,10],
                                    },
                                    c: {
                                        color: 'rgba(255,255,255,0.5)',
                                        align: 'left',
                                        fontSize:16,
                                        padding:[0,10],
                                    }
                                }
                            }
                        },
                        series: [{
                            type: 'pie',
                            data: [100],
                            //z: 2,
                            radius: ['50%', '0%'],
                             center:['50%','30%'],
                            itemStyle: {
                                normal: {
                                    color: 'rgba(15,46,65,.8)'
                                }
                            },
                            silent: true,
                            labelLine: {
                                normal: {
                                    show: false
                                }
                            }
                        }, {
                            radius: ['35%', '42%'],
                            center:['50%','30%'],
                            name: '',
                            type: 'pie',
                            selectedOffset: 16, //选中是扇区偏移量
                            startAngle: 90,
                            //z: 3,
                            labelLine: {
                                normal: {
                                    show:false,
                                    length: 30,
                                    length2: 10,
                                    lineStyle: {
                                        width: 2
                                    }
                                }
                            },
                            label: {
                                normal: {
                                    show:false,
                                    textStyle: {
                                        fontSize: 28
                                    },
                                    formatter: function(params) {
                                        return params.name + '\n' + params.value + '%'
                                    }
                                }
                            },
                            data: dataArr
                        }, {
                            radius: ['0%', '25%'],
                             center:['50%','30%'],
                            name: '',
                            type: 'pie',
                            selectedOffset: 16, //选中是扇区偏移量
                            startAngle: 90,
                        //z: 3,
                            labelLine: {
                                normal: {
                                    show:false,
                                    length: 30,
                                    length2: 10,
                                    lineStyle: {
                                        width: 2
                                    }
                                }
                            },
                            label: {
                                normal: {
                                    show:false,
                                    textStyle: {
                                        fontSize: 28
                                    },
                                    formatter: function(params) {
                                        return params.name + '\n' + params.value + '%'
                                    }
                                }
                            },
                            data: dataArr1
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
