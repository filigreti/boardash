<template>
  <div class="flex super-admin">
    <img
      src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
      class="img-fluid super-avatar"
      alt
    />
    <div class="flex-center-column pl-3">
      <h3 class="admin-font-intro">Welcome Essie</h3>
      <span class="admin-font-title">Super Admin</span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.super-avatar {
  height: 30px;
  width: 30px;
  object-fit: cover;
  border-radius: 4px;
}
.admin-font-intro {
  font-size: 14px;
  margin-bottom: 3px;
}
.admin-font-title {
  font-size: 10px;
  opacity: 0.5;
}
.super-admin {
  padding: 2.2vh;
  border-bottom: 1px solid rgba(128, 128, 128, 0.274);
}
</style>