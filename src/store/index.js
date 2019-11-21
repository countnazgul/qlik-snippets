import Vue from 'vue'
import Vuex from 'vuex'
import showdown from 'showdown';
const converter = new showdown.Converter();

Vue.use(Vuex)

function compare(a, b) {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
}

export default new Vuex.Store({
  state: {
    snippets: [],
    activeSnippet: {}
  },
  mutations: {
    SET_SNIPPETS: function (state, data) {
      state.snippets = data
    },
    SET_ACTIVE_SNIPPET: function (state, data) {
      state.activeSnippet = data
    }
  },
  actions: {
    loadSnippets: async function ({ commit }) {
      let response = await fetch(`/qlik-snippets/data/snippets.json`).then(function (response) {
        return response.json()
      })

      response.sort(compare);

      commit('SET_SNIPPETS', response)
    },
    showSnippet: async function ({ state, commit }, data) {
      let response = await fetch(`/qlik-snippets/data/${data.type}/${data.id}.json`).then(function (response) {
        return response.json()
      }).catch(function (e) {
        return {
          "name": "NOT EXISTS",
          "description": "",
          "code": "NOT EXISTS",
          "type": "",
          "filename": "",
          "references": [],
          "tags": "",
          "contributor": { "name": "", "link": "" }
        }
      })
      // console.log(response)
      commit('SET_ACTIVE_SNIPPET', response)

    }
  },
  modules: {
  },
  getters: {
    snippets: function (state) {
      return state.snippets
    },
    activeSnippet: function (state) {
      let activeSnippet = state.activeSnippet
      activeSnippet.description = converter.makeHtml(activeSnippet.description);
      return activeSnippet
    },
  }
})
