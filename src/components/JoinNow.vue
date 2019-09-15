<template>
  <div class="join-now flex justify-content-around">
    <svg
      id="cam"
      width="121"
      height="61"
      viewBox="0 0 121 61"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M72.2029 60.355C78.4192 60.355 83.474 54.9658 83.474 48.3416V12.3684C83.474 5.74419 78.4178 0.355001 72.2029 0.355001H11.4556C5.23921 0.355001 0.182999 5.74568 0.182999 12.3684V48.3416C0.182999 54.9673 5.24061 60.355 11.4556 60.355H72.2029ZM117.912 54.0737C119.356 53.2026 120.183 51.0428 120.183 48.152V12.1804C120.183 9.28962 119.356 7.13126 117.912 6.26016C116.472 5.39055 114.308 5.74257 111.979 7.22971L90.8911 20.7168V39.614L111.979 53.1027C114.308 54.5898 116.473 54.9418 117.912 54.0737Z"
        fill="white"
      />
    </svg>
    <div class="img-cont flex pr-2">
      <img class="img-fluid img-round" :src="$store.state.user.avatar_url" alt />
      <div class="d-flex flex-column justify-content-center text-area pl-2">
        <span class="text-white">Sales Presentation - Live Group Call</span>
        <span class="text-white mid">{{$store.state.user.blog}}</span>
        <span class="dim">Started 3 mins ago</span>
      </div>
    </div>
    <div class="note-circle flex">
      <div
        :class="`circle${i}`"
        class="text-white new-round flex-center"
        v-for="i in 4"
        :key="i"
      >{{('ABCDEFGHI').split('')[(Math.floor(Math.random() * 9 ))]}}</div>
      <span class="text-white text-area pl-3">+5 more</span>
    </div>
    <div class="flex-between">
      <button class="btn-inv">You're invited</button>
      <button class="btn-join flex-center">
        <i class="material-icons vid-cam pr-1">videocam</i>
        Join now
      </button>
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
.join-now {
  overflow: hidden;
  position: relative;
  height: 12vh;
  width: 100%;
  background-image: linear-gradient(
    to right,
    #ec648c,
    #f06884,
    #f36c7c,
    #f57175,
    #f6776e,
    #f87b68,
    #f98061,
    #fa855b,
    #fd8a53,
    #fe904a,
    #fe9640,
    #fd9d36
  );
  border-radius: 3px;
  margin-bottom: 2vh;
}
#cam {
  position: absolute;
  bottom: -3vh;
  left: 15vw;
  opacity: 0.15;
}
.img-round {
  height: 60px;
  width: 60px;
  object-fit: cover;
  border-radius: 50%;
  border: 3px solid #f5adbf81;
}
.dim {
  color: white;
  opacity: 0.5;
}
.text-area {
  font-size: 12px;
}
.text-area :first-child {
  font-size: 14px;
  letter-spacing: 0.3px;
}
.text-area:last-child {
  font-size: 11px;
}
.mid {
  padding: 1px 0;
}
.new-round {
  border-radius: 50%;
  height: 32px;
  width: 32px;
}
.circle1 {
  border: 2px solid white;
  background: #f87e64;
  z-index: 4;
}
.circle2 {
  background: #f87e64;
  z-index: 3;
}
.circle3 {
  background: #f87e64;
  z-index: 2;
}
.circle2,
.circle3,
.circle4 {
  margin-left: -0.7vw;
  border: 2px solid rgba(255, 255, 255, 0.39);
}
.btn-inv {
  border: 1px solid rgba(255, 255, 255, 0.473);
  font-size: 12px;
  background: transparent;
  color: white;
  height: 4.5vh;
  width: 8vw;
  border-radius: 3px;
}
.btn-join {
  border: none;
  height: 4.5vh;
  width: 8vw;
  font-size: 12px;
  border-radius: 2px;
  margin-left: 8.5vw;
  background: white;
}
.vid-cam {
  color: #b6b6b6;
  font-size: 13px;
}
</style>