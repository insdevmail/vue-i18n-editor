const state = () => ({
  title: '',
  files: [],
  languages: [],
});

const getters = {
  files: initialState => initialState.files,
};

const mutations = {
  setData(initialState, data) {
    initialState.languages.push(data.lang);
    initialState.files.push(data.file);
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
