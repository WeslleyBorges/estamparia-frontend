import api from '../../services'

const state = {
    accessToken: null
};

const getters = {
    isAuthenticated: state => !!state.accessToken
};

const actions = {
    async login({commit}, username, password) {
        const response = await api.login(username, password)
        console.log(response)
        await commit('setAccessToken', response.accessToken)
    },
    async logout({commit}) {
        await commit('setAccessToken', null)
    }
};

const mutations = {
    setAccessToken(state, accessToken) {
        state.accessToken = accessToken
    }
};

export default {
  state,
  getters,
  actions,
  mutations
};
