<template>
  <v-flex>
    <v-layout row wrap>
      <v-flex
        v-for="note in activeNotes"
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
            <v-card-title  @click.stop="note.dialog = true">{{ note.title }} </v-card-title>
            <v-list-item  @click.stop="note.dialog = true">{{ note.description }}</v-list-item>
            <v-list-item></v-list-item>
            <cardIcons v-show="hover == true" :singleNote="note" />
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
import note from "../services/note.js";
import cardIcons from "../components/cardIcons.vue";
import dialogBox from "./dialogBox.vue";
import trashNotes from "../components/trashNotes.vue";
export default {


  name: "Note",
  components: {
    cardIcons,
    dialogBox,
    trashNotes
  },

 props: {
   snackbars: Object,  
  },
  data: () => ({
    allNotes: "",
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

  mounted() {
    this.displayAllNotes();
  },
  
  methods: {
    displayAllNotes() {
       note
        .getNotes()
        .then(result => {
          this.result = result.data.data;
          this.allNotes = [...this.result].reverse();
          this.activeNotes = this.allNotes.filter(
            note => note.isDeleted == false
          );
        })
        .catch(error => {
          console.log("error", error);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
@import url("../scss/noteCards.scss");
</style>
