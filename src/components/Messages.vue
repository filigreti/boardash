<template>
  <div class="messages">
    <div v-for="message in $store.state.message" :key="message.id">
      <div class="card-area grids">
        <div class="flex-center">
          <input type="checkbox" name id />
        </div>
        <div class="img-container flex-center">
          <img :src="message.avatar_url" class="img-fluid image-message" alt />
        </div>
        <span class="pl-3 login-message">{{message.login}}</span>

        <span class>
          <span class="ml-4 mess-cat">{{message.category}}</span>
          <span class="mess-trun pl-2">{{message.text | truncate}}</span>
        </span>
        <div class>
          <i class="material-icons icon-more">more_vert</i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  filters: {
    truncate: function(value) {
      if (value.length > 20) {
        value = value.substring(0, 80) + ".....";
      }
      return value;
    }
  },
  mounted() {
    console.log(this.$store.state.message);
  }
};
</script>

<style>
.messages {
  width: 100%;
  z-index: 1;
}
.card-area {
  height: 8.5vh;
  background: white;
  border-bottom: 1px solid #b9c0c55e;
}
.image-message {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  object-fit: cover;
}
.img-container {
  border-radius: 50%;
}
.grids {
  display: grid;
  grid-template-columns: 5% 5% 16% 70% 4%;
  align-items: center;
}
.login-message {
  text-transform: capitalize;
  font-size: 14px;
  font-weight: 700;
}
.mess-cat {
  background: #f5f5f5;
  padding: 5px 7px;
  font-size: 14px;
  color: #4a4a4a;
  border-radius: 2px;
}
.mess-trun {
  color: #858a96;
  font-size: 13px;
  font-weight: 100;
}
.icon-more {
  color: #858a967a;
}
</style>