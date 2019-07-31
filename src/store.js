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
      state.book = data;
    },
    SET_FULLPATH: (state, data) => {
      state.fullPath = data;
    }
  },
  actions: {
    setBook: (context, payload) => {
      context.commit('SET_BOOK', payload.bookId)
      context.commit('SET_FULLPATH', payload.fullPath)
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
