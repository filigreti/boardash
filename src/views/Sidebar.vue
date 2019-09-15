<template>
  <main id="side-bar">
    <i class="material-icons bookmark">bookmark</i>
    <SuperAdmin />
    <ul class="nav-links">
      <li>
        <router-link to="/overview" class="pt-3">
          <i class="material-icons grey">dashboard</i>
          <span>Overview</span>
        </router-link>
      </li>
      <li>
        <router-link to="/reservations">
          <i class="material-icons grey">bookmark</i>
          <span>Reservations</span>
        </router-link>
      </li>
      <li>
        <router-link to="/meeting">
          <i class="material-icons grey">credit_card</i>
          <span>Meeting</span>
        </router-link>
      </li>
      <li>
        <router-link to="/customers">
          <i class="material-icons grey">group</i>
          <span>Customers</span>
        </router-link>
      </li>
      <li>
        <router-link to="/ticket">
          <i class="material-icons grey">local_activity</i>
          <span>Ticket</span>
        </router-link>
      </li>
      <li>
        <router-link to="/">
          <i class="material-icons grey">question_answer</i>
          <span>Message</span>
        </router-link>
      </li>
      <li>
        <router-link to="/profile">
          <i class="material-icons grey">person</i>
          <span>Profile</span>
        </router-link>
      </li>
    </ul>
    <div class="power-cont flex">
      <i class="material-icons power">power_settings_new</i>
      <span class="pl-2">Logout</span>
    </div>
  </main>
</template>

<script>
import SuperAdmin from "../components/SuperAdmin";
export default {
  components: {
    SuperAdmin
  }
};
</script>

<style>
#side-bar {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
}
#side-bar .nav-links {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
#side-bar .nav-links li a {
  display: flex;
  align-items: center;
  align-self: center;
  align-content: center;
  padding: 0.85vw 3vw;
}
#side-bar .nav-links li span {
  font-size: 12px;
  font-weight: 200;
  padding-left: 1.2vw;
  font-weight: 500;
}
.grey {
  color: #aaaaaa;
  font-size: 14px;
}
.grey:active {
  color: #2290ff;
}
.bookmark {
  position: absolute;
  right: 1.3vw;
  font-size: 20px;
  color: #7eb371;
  top: -0.4vh;
}
.power-cont {
  position: absolute;
  font-size: 20px;
  bottom: 6vh;
  width: 100%;
  font-size: 12px;
  padding-left: 4vw;
  cursor: pointer;
}
.power {
  font-size: 14px;
  color: #aaaaaa;
}
.power-cont:hover {
  color: #2290ff;
}
.power-cont:hover .power {
  color: #2290ff;
}
</style>