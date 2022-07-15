<template>
  <v-dialog v-model="dialogOpen" max-width="1000px" persistent>
    <template #activator="{ on }">
      <v-btn
        v-on="on"
        color="primary white--text"
      >
        <v-icon left>mdi-plus</v-icon>
        New Lesson Plan
      </v-btn>
    </template>

    <v-card>
      <v-form ref="form">
        <h2 class="pa-3">
          {{ !!id ? 'Edit' : 'Add' }}
          Lesson
        </h2>
        <v-divider></v-divider>
        <v-card-text>
          <Label for="category" required>Category</Label>
          <v-btn-toggle
            v-model="formData.category"
            active-class="primary white--text"
            id="category"
            hide-details="auto"
            dense
          >
            <v-btn value="ground">Ground</v-btn>
            <v-btn value="flight">Flight</v-btn>
          </v-btn-toggle>

          <Label for="title" required>Lesson Title</Label>
          <TextField v-model="formData.title" id="title" :rules="[required]" />

          <Label for="objective" required>Objective</Label>
          <TextArea v-model="formData.title" id="objective" :rules="[required]" />

          <Label for="completion_standards" required>Completion Standards</Label>
          <TextArea v-model="formData.completion_standards" id="completion_standards" :rules="[required]" />
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text>
          <h3>Content</h3>
          <Label required>Intro</Label>
          <v-row v-for="(intro, index) of formData.intro" :key="`intro-${index}`" no-gutters>
            <v-col>
              <TextField v-model="formData.intro[index]" :rules="[required]" />
            </v-col>
            <v-col cols="auto">
              <v-btn
                icon
                color="error"
                :disabled="!index"
                @click="deleteField('intro', index)"
              >
                <v-icon>mdi-minus-circle-outline</v-icon>
              </v-btn>
            </v-col>
          </v-row>
          <v-btn
            color="primary"
            class="mt-2"
            block
            @click="formData.intro.push('')"
          >
            <v-icon left>mdi-plus</v-icon>
            Add Intro Step
          </v-btn>
        </v-card-text>

        <v-card-text>
          <Label required>Time Allotment</Label>
          <v-row v-for="(task, index) of formData.time_allotment" :key="`time_allotment-${index}`" no-gutters>
            <v-col>
              <TextField
                v-model="formData.time_allotment[index].task"
                placeholder="Task description"
                :rules="[required]"
              />
            </v-col>
            <v-col cols="3">
              <TextField
                v-model="formData.time_allotment[index].time"
                placeholder="Time Allotted"
                :rules="[required]"
                type="number"
                step="1"
              />
            </v-col>
            <v-col cols="auto">
              <v-btn
                icon
                color="error"
                :disabled="!index"
                @click="deleteField('time_allotment', index)"
              >
                <v-icon>mdi-minus-circle-outline</v-icon>
              </v-btn>
            </v-col>
          </v-row>
          <v-btn
            color="primary"
            class="mt-2"
            block
            @click="formData.time_allotment.push({})"
          >
            <v-icon left>mdi-plus</v-icon>
            Add Time Allotment Slot
          </v-btn>
        </v-card-text>

        <v-card-text>
          <Label required>Pre-Flight Tasks</Label>
          <v-row v-for="(task, index) of formData.tasks.preflight" :key="`pre-${index}`" no-gutters>
            <v-col>
              <TextField v-model="formData.tasks.preflight[index]" :rules="[required]" />
            </v-col>
            <v-col cols="auto">
              <v-btn
                icon
                color="error"
                :disabled="!index"
                @click="deleteField('preflight', index)"
              >
                <v-icon>mdi-minus-circle-outline</v-icon>
              </v-btn>
            </v-col>
          </v-row>
          <v-btn
            color="primary"
            class="mt-2"
            block
            @click="formData.tasks.preflight.push('')"
          >
            <v-icon left>mdi-plus</v-icon>
            Add Pre-Flight Task
          </v-btn>
        </v-card-text>

        <v-card-text>
          <Label required>In-Flight Tasks</Label>
          <v-row v-for="(task, index) of formData.tasks.inflight" :key="`pre-${index}`" no-gutters>
            <v-col>
              <TextField v-model="formData.tasks.inflight[index]" :rules="[required]" />
            </v-col>
            <v-col cols="auto">
              <v-btn
                icon
                color="error"
                :disabled="!index"
                @click="deleteField('inflight', index)"
              >
                <v-icon>mdi-minus-circle-outline</v-icon>
              </v-btn>
            </v-col>
          </v-row>
          <v-btn
            color="primary"
            class="mt-2"
            block
            @click="formData.tasks.inflight.push('')"
          >
            <v-icon left>mdi-plus</v-icon>
            Add In-flight Task
          </v-btn>
        </v-card-text>

        <v-card-text>
          <Label required>Post-Flight Tasks</Label>
          <v-row v-for="(task, index) of formData.tasks.postflight" :key="`pre-${index}`" no-gutters>
            <v-col>
              <TextField v-model="formData.tasks.postflight[index]" :rules="[required]" />
            </v-col>
            <v-col cols="auto">
              <v-btn
                icon
                color="error"
                :disabled="!index"
                @click="deleteField('postflight', index)"
              >
                <v-icon>mdi-minus-circle-outline</v-icon>
              </v-btn>
            </v-col>
          </v-row>
          <v-btn
            color="primary"
            class="mt-2"
            block
            @click="formData.tasks.postflight.push('')"
          >
            <v-icon left>mdi-plus</v-icon>
            Add Post-Flight Task
          </v-btn>
        </v-card-text>
      </v-form>

      <v-divider></v-divider>

      <v-card-actions>
        <v-row>
          <v-spacer></v-spacer>
          <v-col cols="auto">
            <v-btn text @click="cancel">Cancel</v-btn>
            <v-btn color="primary white--text" @click="save">Save</v-btn>
          </v-col>
        </v-row>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import required from '~/mixins/required';
import { mapActions } from 'vuex';

export default {
  name: 'LessonDialog',

  mixins: [required],

  props: {
    id: { type: String, default: undefined }
  },

  data: () => ({
    formData: {
      intro: [''],
      time_allotment: [{}],
      tasks: {
        preflight: [''],
        inflight: [''],
        postflight: [''],
      }
    },
    dialogOpen: false,
  }),

  methods: {
    ...mapActions(['getLessons']),

    async save() {
      if (!this.$refs.form.validate()) return;

      // create a new lesson
      if (!this.id) {
        let ref = await this.$fire.firestore.collection('lesson').doc();
        ref.set(this.formData);
      } else {
        // edit lesson
        let ref = await this.$fire.firestore.collection('lesson')
          .doc(this.id)
          .update(this.formData);
      }

      await this.getLessons();
      this.cancel();
    },

    cancel() {
      this.dialogOpen = false;
      this.formData = {
        intro: [''],
        time_allotment: [{}],
        tasks: {
          preflight: [''],
          inflight: [''],
          postflight: [''],
        }
      };
    },

    deleteField(field, index) {
      if (['preflight', 'inflight', 'postflight'].includes(field)) {
        this.formData.tasks[field].splice(index, 1);
      } else {
        this.formData[field].splice(index, 1);
      }
    }
  },
}
</script>
