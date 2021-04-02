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
            class="mx-auto singleCard card-container"
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
            <dialogBox
              :dialog.sync="note.dialog == true"
            
              :options="note"
              :trash="true"
            />
          </v-card>
        </v-hover>
      </v-flex>
      <snackbar ref="snackbar" />
    </v-layout>
  </v-flex>
</template>

<script>
import note from '../services/note.js';
import { mapGetters, mapActions } from 'vuex';
import dialogBox from './dialogBox.vue';

export default {
  name: 'Trash',
  components: {
    dialogBox
  },

  data: () => ({
    IconDialog: false,
    trashNotes: '',
    allTrashNotes: this.allTrashNotes,
    trash: true,
    dialog: false
  }),

  created() {
    this.getAllNotes();
  },

  computed: {
    ...mapGetters(['allTrashNotes'])
  },

  methods: {
   
  ...mapActions(['showSnack', 'getAllNotes']),
    restoreNote(noteId) {
      const noteInput = {
        isDeleted: false
      };
      note
        .restoreNote(noteId, noteInput)
        .then(data => {
          if (data.data.status_code.status_code == 200) {
             this.showSnack({
              text: 'Successfully Restored!',
              timeout: 3500
            });
            this.getAllNotes();
          }else{this.showSnack({
            text: 'Error, please try again later!',
            timeout: 3500
          });}  
        })
        .catch(
          this.showSnack({
            text: 'Error, please try again later!',
            timeout: 3500
          })
        );
    }
  }
};
</script>

<style lang="scss" scoped>
@import url("../scss/noteCards.scss");
</style>