<template>
  <header class="header">
      <h1 class="logo">
        <!-- <a href="javascript:;">河南蒙古族自治县三江源生态大数据平</a> -->
        <a href="javascript:;">123</a>
      </h1>
      <nav>
        <router-link to="/show/ee">资源概览</router-link>
        <router-link to="/show/ro">生态平衡</router-link>
      </nav>
  </header>
</template>
<script>
export default {
  name: "bigHeader",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header {
  height: 64px;
  display: flex;
  border-bottom: 1px solid rgba(117, 239, 255, 0.3);
  .logo {
    width: 466px;
    background-image: linear-gradient(-180deg, #6acca5 0%, #00667a 100%);
    height: 100%;
    margin: 0;
    color: #fff;
    line-height: 64px;
    position: relative;
    z-index: 1;
    &:after {
      display: inline-block;
      position: absolute;
      content: "";
      background-image: linear-gradient(-180deg, #6acca5 0%, #00667a 100%);
      height: 100%;
      width: 100%;
      left: 90px;
      z-index: 0;
      color: #fff;
      line-height: 64px;
      transform: skew(-35deg, 0deg);
      border-bottom-right-radius: 17px;
    }
    &:before {
      display: inline-block;
      position: absolute;
      content: "";
      background-image: linear-gradient(
        to bottom,
        rgba(45, 177, 224, 0.4),
        rgba(36, 66, 128, 0.4)
      );
      // background-image:linear-gradient(to bottom, #473b7b, #3584a7), radial-gradient(circle at 51% 50%, #074554, #01273d);
      height: 100%;
      width: 100%;
      left: 110px;
      z-index: 0;
      color: #fff;
      line-height: 64px;
      transform: skew(-35deg, 0deg);
      border-bottom-right-radius: 17px;
    }
    a {
      left: 20px;
      position: absolute;
      z-index: 3;
      font-family: PingFangSC-Semibold;
      font-size: 24px;
      color: #fff;
      letter-spacing: 2px;
      line-height: 64px;
      text-decoration: none;
    }
  }
  nav {
    position: absolute;
    left: 0;
    right: 0;
    height: 100%;
    text-align: center;
    a {
      text-decoration: none;
      display: inline-block;
      width: 136px;
      margin:0 20px;
      height: 100%;
      font-family: PingFangSC;
      font-size: 20px;
      font-weight: 500;
      font-style: normal;
      font-stretch: normal;
      line-height: 64px;
      letter-spacing: 1px;
      text-align: center;
      color: #ffffff;
    }
    .router-link-active{
      font-family: PingFangSC-Light;
      color: #72DBD3;
      background: url(../../../assets/images/tabBg.svg) no-repeat;
    }
  }
}
</style>
