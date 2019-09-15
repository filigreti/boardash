<template>
  <div id="profile-area">
    <div class="logo-area flex-center">
      <h3 class="logo-text">Boardash</h3>
    </div>
    <div class="flex-between">
      <input type="text" placeholder="Search message, people, ticket" class="input-area" />
      <div class="flex-center search">
        <i class="material-icons">search</i>
      </div>
    </div>
    <div class="flex-center">
      <i class="material-icons">notifications_none</i>
      <span>Set Alert</span>
    </div>
    <div class="flex pl-3">
      <img
        src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        class="img-fluid avatar"
        alt
      />
      <span class>Essie Howell</span>
    </div>
    <div class="pl-3 flex">
      <svg
        width="29"
        height="29"
        viewBox="0 0 27 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask id="path-1-inside-1" fill="white">
          <path
            d="M13.5 0C6.0564 0 0 6.0564 0 13.5C0 20.9439 6.0564 27 13.5 27C20.9439 27 27 20.9436 27 13.5C27 6.0564 20.9439 0 13.5 0Z"
          />
        </mask>
        <path
          d="M13.5 -1C5.50411 -1 -1 5.50411 -1 13.5H1C1 6.60868 6.60868 1 13.5 1V-1ZM-1 13.5C-1 21.4962 5.50413 28 13.5 28V26C6.60867 26 1 20.3916 1 13.5H-1ZM13.5 28C21.4962 28 28 21.4959 28 13.5H26C26 20.3913 20.3916 26 13.5 26V28ZM28 13.5C28 5.50413 21.4962 -1 13.5 -1V1C20.3916 1 26 6.60867 26 13.5H28Z"
          fill="#B8B5B5"
          mask="url(#path-1-inside-1)"
        />
        <path
          d="M13.8557 13.5567L16.8106 13.5809C16.9238 13.5816 17.0153 13.4908 17.0149 13.3776C17.0143 13.2641 16.9224 13.1717 16.8091 13.1708L13.8543 13.1466L13.8442 10.1916C13.8441 10.0786 13.7518 9.98583 13.6385 9.98499C13.5253 9.98397 13.4339 10.075 13.4343 10.1883L13.4442 13.1432L10.4896 13.119C10.3763 13.1181 10.2848 13.2091 10.2851 13.3225C10.2854 13.3791 10.3084 13.4306 10.3456 13.4679C10.3828 13.5055 10.4343 13.5287 10.4908 13.5291L13.4456 13.5533L13.4556 16.5082C13.4558 16.5648 13.4789 16.6164 13.5161 16.6538C13.5532 16.6911 13.6047 16.7144 13.6614 16.715C13.7747 16.7158 13.8661 16.6248 13.8657 16.5115L13.8557 13.5567Z"
          fill="#9A9A9A"
          stroke="#B8B5B5"
        />
      </svg>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
#profile-area {
  font-size: 12px;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 23vw 48vw 11vw 10vw 8vw;
  justify-content: center;
  align-items: center;
}
.logo-text {
  font-size: 16px;
  letter-spacing: 3px;
  text-transform: uppercase;
  margin: 0;
  font-weight: bold;
}
.input-area {
  outline: none;
  font-size: 14px;
  padding-left: 1vw;
  height: 5vh;
  background: #f5f5f5;
  border: none;
  width: 88%;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}
.search {
  width: 12%;
  cursor: pointer;
  background: #e4e4e4;
  height: 100%;
  height: 5vh;
  font-size: 12px;
  color: #848484;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}
.input-area::placeholder {
  color: #c5c7cc;
  letter-spacing: 0.3px;
}
.add {
  font-size: 36px;
  font-weight: 100;
  cursor: pointer;
}
.avatar {
  height: 35px;
  width: 35px;
  border-radius: 50%;
  object-fit: cover;
  cursor: default;
}
#profile-area span {
  font-size: 11px;
  padding-left: 10px;
  color: #848484;
  cursor: default;
}
#profile-area i {
  color: #848484;
  cursor: default;
  font-weight: 100;
  font-size: 20px;
}
</style>