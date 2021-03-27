<template>
  <v-flex>
    <v-layout row wrap>
      <v-flex
        v-for="note in trashNotes"
        v-bind:key="note._id"
        md3
        class="mr-5 mb-10"
      >
        <v-hover v-slot="{ hover }">
          <v-card
            class="mx-auto v-list"
            outlined
            :class="{ 'on-hover': hover }"
          >
            <v-card-title>{{ note.title }} </v-card-title>
            <v-list-item class="v-list">{{ note.description }}</v-list-item>

            <v-list-item>
              <v-row v-show="hover == true">
                <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn icon v-bind="attrs" v-on="on">
                      <article class="text-md-left text-lg-left">
                        <v-icon @click="restoreNote(note._id)"
                          >mdi-restore</v-icon
                        >
                      </article>
                    </v-btn>
                  </template>
                  <span>Restore</span>
                </v-tooltip>
                <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn icon v-bind="attrs" v-on="on">
                      <article class="text-md-left text-lg-left">
                        <v-icon @click="note.dialog = true"
                          >mdi-delete-outline</v-icon
                        >
                      </article>
                    </v-btn>
                  </template>
                  <span>Delete Forever</span>
                </v-tooltip>
              </v-row>
            </v-list-item>
            <v-list-item></v-list-item>
            <dialogBox :dialog="note.dialog" :options="note" :trash="true" />
          </v-card>
        </v-hover>
      </v-flex>
    </v-layout>
  </v-flex>
</template>

<script>
import note from "../services/note.js";

import dialogBox from "./dialogBox.vue";

export default {
  name: "Trash",
  components: {
    dialogBox,
  },

  data: () => ({
    IconDialog: false,
    trashNotes: "",
    allNotesForTrash: "",
    trash: true,
    dialog: false,
  }),

  mounted() {
    this.displayAllNotes();
  },

  methods: {
    displayAllNotes() {
      return note
        .getNotes()
        .then((result) => {
          this.result = result.data.data;
          this.allNotes = [...this.result].reverse();
          this.trashNotes = this.allNotes.filter(
            (note) => note.isDeleted == true
          );
         
        })
        .catch((error) => {  
        });
    },
 
  restoreNote(noteId) {
    const noteInput = {
      isDeleted: false,
    };
    note
      .restoreNote(noteId, noteInput)
      .then((data) => {
        if (data.data.status_code.status_code == 200) {
          (this.snackbar.appear = true),
            (this.snackbar.text = "note restore successfully"),
            this.close();
        }
      })
      .catch(
        (error) => (this.snackbar.appear = true),
        (this.snackbar.text = "error while restoring, please try again later")
      );
  },
} }
</script>
