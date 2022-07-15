export const state = () => ({
  lessons: []
});

export const mutations = {
  setLessons(state, payload) {
    state.lessons = payload;
  }
};

export const actions = {
  async getLessons({ commit }) {
    let { docs } = await this.$fire.firestore.collection('lesson').get();
    let lessons = docs.map(doc => ({ ...doc.data(), id: doc.id}));
    commit('setLessons', lessons);
  }
};
