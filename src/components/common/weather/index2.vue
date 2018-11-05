<template>
    <div class="weater">
        <div class="inner" :class='className'>
            <div class="name">{{name}}</div>
            <div class="value">{{value}}</div>
        </div>
    </div>
</template>
<script>
export default {
    name: "weater",
    props: {
        name: {
            type: String
        },
        value: {
            type: String
        }
    },
    data(){
        return{
            className:''
        }
    },
    methods:{
        switchClass(){
            switch (this.name) {
                case "风速":
                    this.className=""
                    break;
                case "风向":
                    this.className='icon2'
                    break;
                case "降雨量":
                    this.className='icon3'
                    break;
                case "空气湿度":
                    this.className='icon4'
                    break;
                case "空气温度":
                    this.className='icon5'
                    break;
                case "土壤湿度":
                    this.className='icon6'
                    break;
                case "土壤温度":
                    this.className='icon7'
                    break;
                default:
                    this.className=''
                    break;
            }
        }
    },
    mounted(){
        this.switchClass()
    },
    components: {
        
    }
}
</script>
<style lang="scss" scoped>
    .weater{
        width: 102px;
        height: 176px;
        background-image: linear-gradient(0deg, rgba(173,255,250,0.01) 0%, rgba(117,255,246,0.03) 100%);
        border-radius: 6px;
        display: inline-block;
        .inner{
            width: 100%;
            height:100%;
            display: flex;
            flex-direction: column;
            background: url(../../../assets/images/icon-meteor-fengsu.svg) no-repeat center center;
            background-size: 50% 50%;
            align-content: center;
            text-align: center;
            align-content: space-between;
            .name{
                height: 36px;
                line-height: 36px;
                font-family: PingFangSC-Regular;
                font-size: 14px;
                color: rgba(255,255,255,0.85);
                letter-spacing: 0;
                text-align: center;
                margin: 10px 0 80px 0;
            }
            .value{
                height: 36px;
                display:flex;
                justify-content: center;
                line-height: 36px;
                font-family: Helvetica-Light;
                font-size: 24px;
                color: #A3F0EB;
                letter-spacing: 0;
            }
            &.icon2{
                background-image: url(../../../assets/images/icon-meteor-fengxiang.svg)
            }

            &.icon3{
                background-image: url(../../../assets/images/icon-meteor-jiangsui.svg)
            }

            &.icon4{
                background-image: url(../../../assets/images/icon-meteor-kongqishuidu.svg)
            }

            &.icon5{
                background-image: url(../../../assets/images/icon-meteor-kongqiwendu.svg)
            }

            &.icon6{
                background-image: url(../../../assets/images/icon-meteor-turangshidu.svg)
            }

            &.icon7{
                background-image: url(../../../assets/images/icon-meteor-turangwendu.svg)
            }
        }
        
    }
</style>

