<template>
  <v-container>
    <v-row align="center">
      <v-col>
        <h1>{{ lesson.title }}</h1>
      </v-col>
      <v-col cols="auto" class="text-capitalize">{{ lesson.category }}</v-col>
    </v-row>

    <v-divider></v-divider>

    <h2>Objective</h2>
    <p>{{ lesson.objective }}</p>

    <h2>Content</h2>

    <div class="ml-6">
      <h3>Intro</h3>
      <v-row
        v-for="(i, index) of lesson.intro"
        :key="`intro-${index}`"
        class="ml-6"
        no-gutters
      >
        <v-col cols="auto">
          <v-icon>mdi-checkbox-blank-outline</v-icon>
        </v-col>
        <v-col class="pl-2">
          {{ i }}
        </v-col>
      </v-row>

      <h3 class="mt-4">Time Allotment</h3>
      <div
        style="max-width: 400px;"
        class="pt-3 ml-6"
        no-gutters
      >
        <v-row v-for="(ta, index) of lesson.time_allotment" :key="`ta-${index}`">
          <v-col class="py-0">{{ ta.task }}</v-col>
          <v-col class="py-0 text-right" cols="auto">{{ ta.time }}</v-col>
        </v-row>
      </div>

      <h3 class="mt-4">Tasks</h3>

      <div class="ml-6">
        <h4 class="mt-4">Pre-Flight</h4>
        <v-row
          v-for="(task, index) of lesson.tasks.preflight"
          :key="`pre-${index}`"
          class="ml-6"
          no-gutters
        >
          <v-col cols="auto">
            <v-icon>mdi-checkbox-blank-outline</v-icon>
          </v-col>
          <v-col class="pl-2">
            {{ task }}
          </v-col>
        </v-row>

        <h4 class="mt-4">In-Flight</h4>
        <v-row
          v-for="(task, index) of lesson.tasks.inflight"
          :key="`in-${index}`"
          class="ml-6"
          no-gutters
        >
          <v-col cols="auto">
            <v-icon>mdi-checkbox-blank-outline</v-icon>
          </v-col>
          <v-col class="pl-2">
            {{ task }}
          </v-col>
        </v-row>

        <h4 class="mt-4">Post-Flight</h4>
        <v-row
          v-for="(task, index) of lesson.tasks.postflight"
          :key="`post-${index}`"
          class="ml-6"
          no-gutters
        >
          <v-col cols="auto">
            <v-icon>mdi-checkbox-blank-outline</v-icon>
          </v-col>
          <v-col class="pl-2">
            {{ task }}
          </v-col>
        </v-row>
      </div>
    </div>

    <h2 class="mt-4">Completion Standards</h2>
    <p>{{ lesson.completion_standards }}</p>

  </v-container>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'LessonPreview',

  mounted() {
    this.loadData();
  },

  data: () => ({
    lesson: {
      tasks: {}
    }
  }),

  computed: {
    ...mapState(['lessons']),

    lessonId() {
      return this.$route.params.lesson_id;
    }
  },

  watch: {
    lessons() {
      this.loadData();
    }
  },

  methods: {
    loadData() {
      let lesson = this.lessons.find(l => l.id === this.lessonId);
      this.lesson = lesson || { tasks: {} };
    }
  }
}
</script>
