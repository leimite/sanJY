<template>
  <div class="bigScreen">
    <HeaderBar/>
    <router-view class="bigScreenContent"/>
  </div>
</template>

<script>
import HeaderBar from "../components/bigScreen/header";
export default {
  name: "home",
  components: {
    HeaderBar
  }
};
</script>
<style lang="scss">
.bigScreen {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  .bigScreenContent {
    display: flex;
    flex: 1;
    justify-content: space-between;
   
    margin: 20px 16px;
    .left-bar {
      width: 23.5%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .box:nth-child(1){
          height: 56%;
          margin-bottom:12px;

      }
      .box:nth-child(2){
          flex: 1;

      }
    }
    .right-bar {
      width: 23.5%;
      display: flex;
      flex-direction: column;
      .box:nth-child(1){
          flex: 1;
      }
      .box:nth-child(2){
          height: 56%;
         margin-top:12px;
      }
    }
    .center {
      flex: 1;
      margin: 0 9px;
      display: flex;
      flex-direction: column;
      .box:nth-child(1){
          flex: 1;
      }
      .box:nth-child(2){
        height: 24.7%;
         margin-top:12px;
      }
    }
  }
}
</style>

