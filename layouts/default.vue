<template>
  <v-app>
    <v-app-bar fixed app color="primary white--text">
      <v-toolbar-title>CFI Lesson Plans</v-toolbar-title>
      <v-spacer />
      <v-btn text to="/" color="white">Lesson List</v-btn>
    </v-app-bar>
    <v-main class="grey lighten-3">
      <Nuxt />
    </v-main>
    <v-footer app>
      <span>&copy; {{ year }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import dayjs from 'dayjs';

export default {
  name: 'DefaultLayout',

  middleware({ store }) {
    if (!store.state.lessons.length) {
      store.dispatch('getLessons');
    }
  },

  data: () => ({
    year: dayjs().format('YYYY')
  })
}
</script>
