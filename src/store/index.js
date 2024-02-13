import { createStore } from 'vuex'
import VuexPersist from 'vuex-persist';


const vuexPersist = new VuexPersist({
  key: 'restaurant-key',
  //storage: window.localStorage
});

export default createStore({
  state () {
    return {
      token: {
        access: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcwNzkxMDE0MiwiaWF0IjoxNzA3ODIzNzQyLCJqdGkiOiJkNGI1MjIyNzczODU0MzQ3YTgxMmMxODI3NTFmZGFjMyIsInVzZXJfaWQiOjUsImVtYWlsIjoic3RlcGFuX2ZlZHlhbmluXzIwMThAbWFpbC5ydSIsImZpcnN0X25hbWUiOiJcdTA0NDFcdTA0NDJcdTA0MzVcdTA0M2ZcdTA0MzBcdTA0M2QiLCJsYXN0X25hbWUiOiJcdTA0NDRcdTA0MzVcdTA0MzRcdTA0NGZcdTA0M2RcdTA0MzhcdTA0M2QifQ.aeti-mkDg60q_U_HfZxOdSiM5JZgBe-aaLRg-Zl7cpE'
      },
      user: null,
    }
  },
  plugins: [vuexPersist.plugin],
  mutations: {
    user(state, user) {
      state.user = user;
    },
    setToken(state, tokens) {
      state.token = tokens;
    },
  },
  actions: {
    setToken(context, tokens) {
      context.commit('setToken', tokens);
    },
  }
});
