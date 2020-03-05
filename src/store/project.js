const emptyState = {
  title: '',
  files: [],
  languages: [],
};

const state = () => emptyState;

const getters = {
  files: initialState => initialState.files,
  isProjectOpen: initialState => Boolean(initialState.title),
};

const mutations = {
  setData(initialState, data) {
    initialState.languages.push(data.lang);
    initialState.files.push(data.file);
  },
  setTitle(initialState, data) {
    initialState.title = data;
  },
};

const actions = {
  addFileToProject(store, data) {
    const lang = data.lang.id;
    if (!store.state.languages.includes(lang)) {
      store.commit('setData', {
        lang,
        file: {
          lang,
          langLabel: data.lang.value,
          path: data.file.path,
        },
      });
    }
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
