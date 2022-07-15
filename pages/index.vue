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
              <v-btn color="primary white--text">
                <v-icon left>mdi-plus</v-icon>
                New Lesson Plan
              </v-btn>
            </v-col>
          </v-row>

          <v-tabs v-model="tab" grow class="mt-4">
            <v-tab active-class="green lighten-5">Ground</v-tab>
            <v-tab active-class="green lighten-5">Flight</v-tab>
          </v-tabs>

          <v-tabs-items v-model="tab">
            <v-tab-item>
              <v-list>
                <v-list-item v-for="lesson of ground" :key="lesson.title" to="/lesson">
                  <v-list-item-title>{{ lesson.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-tab-item>
            <v-tab-item>
              <v-list>
                <v-list-item v-for="lesson of flight" :key="lesson.title" to="/lesson">
                  <v-list-item-title>{{ lesson.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-tab-item>
          </v-tabs-items>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</v-container>
</template>

<script>
export default {
  name: 'IndexPage',

  data: () => ({
    tab: 0,
    flight: [
      { title: 'Auto-rotations' },
      { title: 'Vortex Ring State'}
    ],
    ground: [
      { title: 'Auto-rotations' },
      { title: 'Vortex Ring State'}
    ]
  })
}
</script>
