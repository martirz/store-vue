import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
   book: null,
   fullPath: null,
  },
  mutations: {
    SET_BOOK: (state, data) => {
      state.book = data.bookId;
      state.fullPath = data.fullPath;
    }
  },
  actions: {
    setBook: (context, payload) => {
      context.commit('SET_BOOK', payload)
    }
  },
  getters: {
    getBook: state => {
      return state.book;
    },
    getFullPath: state => {
      return state.fullPath
    }
  }
});
