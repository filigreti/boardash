<template>
  <div id="app">
    <ProfileArea class="profile-container" />
    <div class="sidebar-container">
      <Sidebar class="shadow-sm" />
    </div>
    <div class="main-route">
      <router-view class="router-container" />
    </div>
    <div class="plus-pink pink-shadow">
      <svg
        id="svg-area"
        width="50"
        height="50"
        viewBox="0 0 27 27"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask id="path-1-inside-1" fill>
          <path
            fill="#FF5274"
            d="M13.5 0C6.0564 0 0 6.0564 0 13.5C0 20.9439 6.0564 27 13.5 27C20.9439 27 27 20.9436 27 13.5C27 6.0564 20.9439 0 13.5 0Z"
          />
        </mask>
        <path
          d="M13.5 -1C5.50411 -1 -1 5.50411 -1 13.5H1C1 6.60868 6.60868 1 13.5 1V-1ZM-1 13.5C-1 21.4962 5.50413 28 13.5 28V26C6.60867 26 1 20.3916 1 13.5H-1ZM13.5 28C21.4962 28 28 21.4959 28 13.5H26C26 20.3913 20.3916 26 13.5 26V28ZM28 13.5C28 5.50413 21.4962 -1 13.5 -1V1C20.3916 1 26 6.60867 26 13.5H28Z"
          fill="#FF5274"
          mask="url(#path-1-inside-1)"
        />
        <path
          d="M13.8557 13.5567L16.8106 13.5809C16.9238 13.5816 17.0153 13.4908 17.0149 13.3776C17.0143 13.2641 16.9224 13.1717 16.8091 13.1708L13.8543 13.1466L13.8442 10.1916C13.8441 10.0786 13.7518 9.98583 13.6385 9.98499C13.5253 9.98397 13.4339 10.075 13.4343 10.1883L13.4442 13.1432L10.4896 13.119C10.3763 13.1181 10.2848 13.2091 10.2851 13.3225C10.2854 13.3791 10.3084 13.4306 10.3456 13.4679C10.3828 13.5055 10.4343 13.5287 10.4908 13.5291L13.4456 13.5533L13.4556 16.5082C13.4558 16.5648 13.4789 16.6164 13.5161 16.6538C13.5532 16.6911 13.6047 16.7144 13.6614 16.715C13.7747 16.7158 13.8661 16.6248 13.8657 16.5115L13.8557 13.5567Z"
          fill="#FF5274"
          stroke="#ffffff"
        />
      </svg>
    </div>
  </div>
</template>

<script>
import Sidebar from "./views/Sidebar";
import ProfileArea from "./views/ProfileArea";
export default {
  components: {
    Sidebar,
    ProfileArea
  }
};
</script>

<style>
body {
  font-family: "Lato", sans-serif;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  background-color: #fafafa;
  /* overflow-x: hidden; */
}
a {
  color: #222f3e;
}
a:hover {
  background-color: #f5faff;
  text-decoration: none;
  color: #2290ff;
}
a:hover i {
  color: #2290ff;
}

a.router-link-exact-active {
  color: #2290ff;
  border-left: 2px solid #2290ff;
  background-color: #f5faff;
  position: relative;
}
a.router-link-exact-active i {
  color: #2290ff;
}

#app {
  background-color: #fafafa;
  display: flex;
}
#app .sidebar-container {
  width: 18vw;
  position: fixed;
  height: 87vh;
  bottom: 0;
  left: 3vw;
  background: #ffffff;
}
#app .main-route {
  width: 69vw;
  margin-left: 23vw;
  margin-top: 13vh;
  background-color: #fafafa;
}
#app .profile-container {
  position: fixed;
  height: 8vh;
  width: 100vw;
  background-color: #ffffff;
  box-shadow: 0 1px 4px 0 rgba(204, 204, 204, 0.5);
  z-index: 30;
  overflow: hidden;
}
.flex {
  display: flex;
  align-items: center;
}
.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.flex-center-column {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.flex-between {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.flex-end {
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
}
.plus-pink {
  position: fixed;
  bottom: 3.5vh;
  right: 2vw;
  border-radius: 50%;
}
#svg-area {
  color: red;
  background: #ff5274;
  border-radius: 50%;
}
.pink-shadow {
  box-shadow: 0 0.5rem 1rem rgba(255, 56, 96, 0.247) !important;
}
button {
  outline: none !important;
}
</style>
