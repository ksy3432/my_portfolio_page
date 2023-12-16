// store.js
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        currentUser: null
    },
    mutations: {
        SET_CURRENT_USER(state, user) {
            state.currentUser = user;
            if (user) {
                localStorage.setItem('currentUser', JSON.stringify(user));
            } else {
                localStorage.removeItem('currentUser');
            }
        }
    },
    actions: {
        setCurrentUser({ commit }, user) {
            commit('SET_CURRENT_USER', user);
        }
    },
    getters: {
        currentUser(state) {
            return state.currentUser;
        },
        nickName(state) {
            return state.currentUser ? state.currentUser.name : 'annonymous';
        }
    }
});
