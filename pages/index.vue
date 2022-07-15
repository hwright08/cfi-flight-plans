<template>
<v-container>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card>
        <v-card-text>
          <v-row>
            <v-col>
              <h1>Lesson Plans</h1>
            </v-col>
            <v-col cols="auto">
              <LessonDialog />
            </v-col>
          </v-row>

          <v-tabs v-model="tab" grow class="mt-4">
            <v-tab active-class="green lighten-5">Ground</v-tab>
            <v-tab active-class="green lighten-5">Flight</v-tab>
          </v-tabs>

          <v-tabs-items v-model="tab">
            <v-tab-item>
              <v-list v-if="ground.length">
                <v-list-item v-for="lesson of ground" :key="lesson.title" :to="`/lesson/${lesson.id}`">
                  <v-list-item-title>{{ lesson.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
              <p class="mt-4" v-else>No ground lessons available</p>
            </v-tab-item>
            <v-tab-item>
              <v-list v-if="flight.length">
                <v-list-item v-for="lesson of flight" :key="lesson.title" :to="`/lesson/${lesson.id}`">
                  <v-list-item-title>{{ lesson.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
              <p class="mt-4" v-else>No flight lessons available</p>
            </v-tab-item>
          </v-tabs-items>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</v-container>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'IndexPage',

  data: () => ({
    tab: 0,
  }),

  computed: {
    ...mapState(['lessons']),

    flight() {
      return this.lessons.filter(l => l.category === 'flight');
    },

    ground() {
      return this.lessons.filter(l => l.category === 'ground');
    }
  },
}
</script>
