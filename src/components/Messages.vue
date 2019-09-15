<template>
  <div class="messages">
    <div v-for="message in $store.state.message" :key="message.id">
      <div class="card">{{message.id}}</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.messages {
  z-index: 1;
}
</style>