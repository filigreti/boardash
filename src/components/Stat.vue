<template>
  <div class="stat grid">
    <div class="grid-one w-100 h-100 flex">
      <div class="round-circle ml-3">
        <i class="material-icons">question_answer</i>
      </div>
      <div class="pl-3 d-flex flex-column justify-content-center">
        <span class="text-dark text-stat">Overall Messages</span>
        <div class>
          <span class="text-dark">{{$store.state.user.followers + $store.state.user.following }}</span>
          <span class="dim-two">This Month</span>
        </div>
      </div>
    </div>
    <div class="grid-two w-100 h-100 d-flex justify-content-between align-items-center">
      <div class="hr-1"></div>
      <div class="flex">
        <div class="round-circle">
          <i class="material-icons">send</i>
        </div>
        <div class="pl-3 d-flex flex-column justify-content-center">
          <span class="text-dark text-stat">Sent Messages</span>
          <div class>
            <span class="text-dark">{{$store.state.user.followers}}</span>
            <span class="dim-two">This Month</span>
          </div>
        </div>
      </div>

      <div class="hr-2"></div>
    </div>
    <div class="grid-three w-100 h-100 flex justify-content-end">
      <div class="round-circle rotate">
        <i class="material-icons transform">reply</i>
      </div>
      <div class="pl-3 d-flex flex-column justify-content-center mr-5">
        <span class="text-dark text-stat">Received Messages</span>
        <div class>
          <span class="text-dark">{{$store.state.user.following }}</span>
          <span class="dim-two">This Month</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    getData() {
      this.$store.dispatch("getSingleUser");
    }
  },
  mounted() {
    this.getData();
  }
};
</script>

<style>
.stat {
  overflow: hidden;
  position: relative;
  height: 12.5vh;
  width: 100%;
  background: #ffffff;
  border: 1px solid #cbd5dd;
  border-radius: 7px;
  margin-bottom: 1vh;
}
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
.round-circle {
  width: 60px;
  height: 60px;
  background: #f5faff;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #e1f0ff;
  border-radius: 50%;
}
.stat i {
  color: #2290ff;
  font-size: 26px;
}
.hr-1 {
  border-left: 1px solid #b9c0c588;
  height: 5.5vh;
}
.hr-2 {
  border-right: 1px solid #b9c0c588;
  height: 5.5vh;
}
.transform {
  transform: scaleX(-1);
}
.rotate {
  transform: rotate(180deg);
}
.text-stat {
  font-size: 12px;
}
.dim-two {
  font-size: 11px;
  color: black;
  opacity: 0.4;
  padding-left: 0.8vw;
}
</style>