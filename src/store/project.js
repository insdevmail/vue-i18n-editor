const emptyState = {
  title: '',
  files: [],
  languages: [],
  primary: null,
};

const state = () => emptyState;

const getters = {
  files: initialState => initialState.files,
  isProjectOpen: initialState => Boolean(initialState.title) && Boolean(initialState.primary),
  project: initialState => initialState,
};

const mutations = {
  setData(initialState, data) {
    initialState.languages.push(data.lang);
    initialState.files.push(data.file);
  },
  setProject(initialState, data) {
    initialState.title = data.title;
    initialState.primary = data.primary;
  },
  clearState(initialState) {
    Object.assign(initialState, emptyState);
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
