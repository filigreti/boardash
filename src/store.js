import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
    user: "",
    message: ""
  },
  mutations: {
    setUsersData(state, data) {
      state.users = data;
    },
    setSingleUser(state, data) {
      state.user = data;
    },
    setMessageData(state, data) {
      state.message = data;
    }
  },
  actions: {
    async getUsers({ commit }, page) {
      let res = await axios.get(
        `https://api.github.com/users?since=${page}&per_page=50`
      );
      commit("setUsersData", res.data);
      let categories = [
        "User Testing",
        "Design",
        "Development",
        "Categories",
        "Interview",
        "Slack",
        "Trello",
        "Gmail team",
        "Frontend",
        "Backend",
        "Dev-ops",
        "FullStack",
        "Vue",
        "React",
        "Angular"
      ];
      let texts = [
        "In as name to here them deny wise this. As rapid woody my he me which. Men but they fail shew just wish next put.",
        "Nord et mene vite le. Portieres la je feeriques regiments. Patre en metal ah temps doute ville. Soleil carres decele ton",
        "Improved own provided blessing may peculiar domestic. Sight house has sex never. No visited raising gravity outward subject my cottage mr be.",
        "Respect article painted cottage he is offices parlors",
        "Any delicate you how kindness horrible outlived servants. You high bed wish help call draw side. Girl quit if case mr sing as no have.",
        "At none neat am do over will. Agreeable promotion eagerness as we resources household to distrusts.",
        "Ferrars all spirits his imagine effects amongst neither. It bachelor cheerful of mistaken. Tore has sons put upon wife use bred seen.",
        "Can curiosity may end shameless explained. True high on said mr on come. An do mr design at little myself wholly entire though. "
      ];

      let newData = res.data;
      newData.forEach(data => {
        let randomCategory =
          categories[Math.floor(Math.random() * categories.length)];
        let randomText = texts[Math.floor(Math.random() * texts.length)];
        return (data.category = randomCategory), (data.text = randomText);
      });
      commit("setMessageData", newData);
    },
    async getSingleUser({ commit }) {
      let res = await axios.get(
        "https://api.github.com/users/brunocvcunha",
        {},
        {
          auth: {
            username: "filigreti",
            password: "zqwxas12"
          }
        }
      );
      commit("setSingleUser", res.data);
    }
  }
});
