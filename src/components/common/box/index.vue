<template>
    <div class="box">
        <h3 v-if="title">{{title}}</h3>
       <slot class="box-content"></slot>
    </div>
</template>
<script>
export default {
    name: "box",
    props: {
        title: {
            type: String
        }
    },
    components: {
        
    }
}
</script>
<style lang="scss" scoped>
    .box{
        width: 100%;
        border:1px solid rgba(117,239,255,0.30);
        color: #fff;
        box-sizing: border-box;
        position: relative;
        padding: 5px;
        display:flex;
        flex-direction: column;
        h3{
            padding: 0;
            margin:0;
            height: 26px;
            line-height: 26px;
            font-size: 16px;
            color: #72DBD3;
            font-weight: normal;
            text-indent: 10px;
            margin-bottom:15px;
        }
        .box-content{
            flex: 1;
            width: 100%;
        }
        &::before{
            content: "";
            height: 12px;
            width: 12px;
            border-top:2px solid #60DBD1;
            border-left:2px solid #60DBD1;
            box-sizing: border-box;
            position: absolute;
            left:0px;
            top:0px;
        }
        &::after{
            content: "";
            height: 12px;
            width: 12px;
            border-right:2px solid #60DBD1;
            border-bottom:2px solid #60DBD1;
            box-sizing: border-box;
            position: absolute;
            right:0px;
            bottom:0px;
        }
    }
</style>

