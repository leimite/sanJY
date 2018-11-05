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

          let dataArr=[
                            {value:335, name:'义乌1'},
                            {value:310, name:'义乌2'},
                            {value:234, name:'义乌3'},
                            {value:135, name:'义乌4'}
                        ];
          let option = {
                 title: [{
                        text: '2,000',
                        left: '19%',
                        top: '34%',
                        textAlign: 'center',
                        textBaseline: 'middle',
                        textStyle: {
                            color: '#A3F0EB',
                            fontWeight: 'normal',
                            fontSize: 22
                        }
                    }, {
                        text: '草面积(万亩)',
                        left: '20%',
                        top: '45%',
                        textAlign: 'center',
                        textBaseline: 'middle',
                        textStyle: {
                            color: '#BDD4CE',
                            fontWeight: 'normal',
                            fontSize: 14
                        }
                    }],
                color: ["#BCEB7F", "#3D6D70","#5AD2FA","#7A8DEB","#458F7B"],
                tooltip: {
                    show: false,
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                grid:{
                    bottom:'20%'
                },
                legend: {
                    show: true,
                    itemGap: 12,
                    //bottom:80,
                    right:'10%',
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
                        name: '访问来源',
                        center:['20%','40%'],
                        type: 'pie',
                        data: [90],
                        z: 1,
                        radius: ['65%', '0%'],
                        itemStyle: {
                            normal: {
                                color: 'rgba(16,53,69,.9)'
                            }
                        },
                        silent: true,
                        labelLine: {
                            normal: {
                                show: false
                            }
                        }
                    },{
                        name: '访问来源',
                        type: 'pie',
                        center:['20%','40%'],
                        clockWise: false,
                        radius: ['64%', '65%'],
                        itemStyle: {
                            normal: {
                                label: {
                                    show: false
                                },
                                labelLine: {
                                    show: false
                                },
                                shadowBlur: 40,
                                shadowColor: 'rgba(40, 40, 40, 0.5)',
                            }
                        },
                        hoverAnimation: false,
                        data: [{
                                value: 75,
                                name: ''
                            }, {
                                value: 25,
                                name: '',
                                itemStyle: {
                                    normal: {
                                        show:false,
                                        color: 'rgba(44,59,70,1)',//未完成的圆环的颜色
                                        label: {
                                            show: false
                                        },
                                        labelLine: {
                                            show: false
                                        }
                                    }
                                }
                            }

                        ]
                    }, {
                        name:'访问来源',
                        type:'pie',
                        center:['20%','40%'],
                        radius: [0, '40%'],
                        label: {
                            normal: {
                            show:false
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: 'rgba(16,53,69,.2)'
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        data:[
                            {value:335, name:''},

                        ]
                    },
                    {
                        name:'访问来源',
                        type:'pie',
                        center:['20%','40%'],
                        radius: ['50%', '60%'],
                        itemStyle: {
                            show:false
                        },
                        label: {
                            normal: {
                            show:false
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        data:dataArr
                    }


                ]
          }

          this.myChart.setOption(option);
          window.addEventListener('resize',()=>{
                myChart.resize();
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
