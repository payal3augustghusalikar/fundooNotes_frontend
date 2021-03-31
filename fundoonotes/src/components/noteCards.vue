<template>
  <v-flex>
    <v-layout class="noteCards" row wrap>
      <v-flex
        v-for="note in allNotes"
        v-bind:key="note._id"
        md3
        class="mr-5 mb-5"
      >
        <v-hover v-slot="{ hover }">
          <v-card
            class="mx-auto singleCard card-container"
            outlined
            :class="{ 'on-hover': hover }"
          >
            <article class="text-md-right text-lg-right">
              <v-icon v-bind="attrs" v-on="on" v-show="hover"
                >mdi-pin-outline</v-icon
              >
            </article>
            <v-card-title @click.stop="note.dialog = true"
              >{{ note.title }}
            </v-card-title>
            <v-list-item @click.stop="note.dialog = true">{{
              note.description
            }}</v-list-item>
            <v-list-item></v-list-item>
            <cardIcons
              v-show="hover == true"
              @displayActiveNotesevent="displayAllNotes"
              :singleNote="note"
            />
            <v-list-item></v-list-item>
            <dialogBox :dialog.sync="note.dialog == true" :options="note" />
          </v-card>
        </v-hover>
      </v-flex>
    </v-layout>
    <v-snackbar v-model="snackbar.appear" :timeout="snackbar.timeout">
      {{ snackbar.text }}</v-snackbar
    >
    <trashNotes v-show="false" :passiveNotes="passiveNotes" />
  </v-flex>
</template>

<script>
//import note from '../services/note.js';
import cardIcons from "../components/cardIcons.vue";
import dialogBox from "./dialogBox.vue";
import trashNotes from "../components/trashNotes.vue";

import { mapGetters, mapActions } from "vuex";

export default {
  name: "Note",
  components: {
    cardIcons,
    dialogBox,
    trashNotes
  },

  props: {
    snackbars: Object
  },
  data: () => ({
     allNotes1: '',
    activeNotes: "",
    passiveNotes: "",
    result: "",
    dialog: false,
    snackbar: {
      appear: false,
      text: "",
      timeout: 2500
    }
  }),

  methods: {
    ...mapActions(["getAllNotes"]),
    
    // displayAllNotes() {
    //   this.getAllNotes();
    //   console.log("allNotes", this.allNotes)
    // }
  },
// ...mapGetters([
// 'allNotes',
// ])
  created() {
    this.getAllNotes();
     console.log("allNotes1", this.allNotes)
  },


  // this.allNotes1 = [...this.allNotes].reverse();
  //         this.activeNotes = this.allNotes1.filter(
  //           note => (note.isDeleted == false && note.isArchived == false)
  //         );


  computed: {
    ...mapGetters([ "allNotes"]),
    }
};
</script>
<style lang="scss" scoped>
@import url("../scss/noteCards.scss");
</style>
