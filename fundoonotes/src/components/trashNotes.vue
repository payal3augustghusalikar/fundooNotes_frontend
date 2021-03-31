<template>
  <v-flex>
    <v-layout class="noteCards" row wrap>
      <v-flex
        v-for="note in allTrashNotes"
        v-bind:key="note._id"
        md3
        class="mr-5 mb-10"
      >
        <v-hover v-slot="{ hover }">
          <v-card
            class="mx-auto v-list  singleCard card-container"
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
            <dialogBox :dialog.sync="note.dialog == true" @displayTrashNotesevent="displayAllNotes" :options="note" :trash="true" />
          </v-card>
        </v-hover>
      </v-flex>
       <snackbar ref="snackbar" />
    </v-layout>
  </v-flex>
</template>

<script>
import note from '../services/note.js';
import { mapGetters, mapActions } from "vuex";
import dialogBox from './dialogBox.vue';


export default {
  name: 'Trash',
  components: {
    dialogBox,
  },

  data: () => ({
    IconDialog: false,
    trashNotes: '',
    allNotesForTrash: '',
    trash: true,
    dialog: false,
  }),

  
created() {
    this.getAllNotes();
  },

  computed: {
    ...mapGetters([ "allTrashNotes"]),
    },

  methods: {

 ...mapActions(["getAllNotes"]),

  ...mapActions(["edit"]),
   
  restoreNote(noteId) {
    const noteInput = {
      isDeleted: false,
    };
   },
} };
</script>

<style lang="scss" scoped>
@import url("../scss/noteCards.scss");
</style>