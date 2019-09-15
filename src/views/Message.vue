<template>
  <div class="message mt-2 bg">
    <div class="flex-end fixed">
      <div class="flex-between mb-3">
        <h5>{{$route.name}}</h5>
        <div class="flex">
          <div class="flex-center color-grey cusor">
            <i :class="{disable:first== 0}" @click="back()" class="material-icons">chevron_left</i>
            <span class="px-2 color-dark">{{number}} - {{$store.state.users.length}} pages</span>
            <i @click="next()" class="material-icons">chevron_right</i>
          </div>
          <button class="btn-blue">All</button>
          <div class="flex">
            <button class="btn-outline color-dark btn-unread">Unread</button>
            <button class="btn-outline color-dark">Important</button>
          </div>
        </div>
      </div>
      <JoinNow />
      <Stat />
    </div>

    <div class="message-body">
      <div v-if="loading == true">loading</div>
      <div
        class="error"
        v-else-if="this.$store.state.users.length === 0"
      >Your probably dont have Internet Connection or multiple requests to github api has reached its limit. Try again in one hour</div>
      <div class="mb-4" v-else>
        <Messages />
      </div>
    </div>
  </div>
</template>

<script>
import JoinNow from "../components/JoinNow";
import Stat from "../components/Stat";
import Messages from "../components/Messages";
export default {
  data() {
    return {
      first: 0,
      number: 1,
      loading: false
    };
  },
  components: {
    JoinNow,
    Stat,
    Messages
  },
  methods: {
    getData() {
      this.$store.dispatch("getUsers", this.first);
    },
    back() {
      this.loading = true;
      this.first = this.first - 50;
      this.number = this.number - 1;
      this.getData();
      this.loading = false;
    },
    next() {
      this.loading = true;
      this.first = this.first + 50;
      this.number = this.number + 1;
      this.getData();
      this.loading = false;
    }
  },
  mounted() {
    this.getData();
    console.log(this.$store.state.users);
  }
};
</script>

<style>
.color-grey {
  color: #adadad;
  font-size: 14px;
}
.color-dark {
  color: #747a87;
}
.btn-blue {
  background: #2290ff;
  color: white;
  border: none;
  border-radius: 2px;
  height: 4.8vh;
  width: 5vw;
  font-size: 12px;
  margin-left: 1.7vw;
  margin-right: 1.3vw;
  outline: none !important;
}
.btn-outline {
  background: transparent;
  width: 7vw;
  font-size: 12px;
  height: 4.8vh;
  border: 1px solid #adadad;
  outline: none !important;
}
.btn-unread {
  border-right: none;
}
.disable {
  cursor: not-allowed;
  pointer-events: none;
}
.cusor {
  cursor: pointer;
}
.fixed {
  position: fixed;
  background: #fafafa;
  width: 69vw;
  height: 48.5vh;
  top: 0;
  z-index: 2;
}
.message-body {
  margin-top: 36vh;
}
.bg {
  background: #fafafa;
}
</style>