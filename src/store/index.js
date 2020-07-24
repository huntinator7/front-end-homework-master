import Vue from 'vue';
import Vuex from 'vuex';
import CompanyService from '@/services/CompanyService';

Vue.use(Vuex);

export default new Vuex.Store({
  // IMPORTANT: state must be a function so the module can be
  // instantiated multiple times
  state: () => ({
    companies: [],
  }),
  getters: {
    getCompanyById: (state) => (id) => {
      console.log('here', state, id);
      return state.companies.find((c) => c.id === id);
    },
  },
  actions: {
    fetchCompanies({ commit }) {
      return CompanyService.getAll().then((res) => {
        commit('setCompanies', res);
      });
    },
    getCompanyById: ({ getters }, id) => {
      console.log('here', getters, id);
      const s = getters.getcompanyById(id);
      console.log(s);
      return s;
    },
  },
  mutations: {
    setCompanies(state, companies) {
      state.companies = companies;
    },
    setNumberEmployees(state, payload) {
      state.companies = state.companies.map((c) => {
        if (c.id === payload.id) {
          return { ...c, numberOfEmployees: payload.numberOfEmployees };
        }
        return c;
      });
    },
  },
});
