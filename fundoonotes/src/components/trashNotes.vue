<template>
  <v-flex>
    <h1>Trashug</h1>

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

            <v-list-item></v-list-item>
            <v-icon>mdi-restore</v-icon>
            <v-flex> </v-flex>
          </v-card>
        </v-hover>
      </v-flex>
    </v-layout>
  </v-flex>
</template>

<script>
import note from "../services/note.js";
// import cardIcons from '../components/cardIcons.vue';
// import dialogBox from './dialogBox.vue';

import noteCards from "../components/noteCards.vue";

export default {
  name: "Trash",
  components: {
    // noteCards,
  },
  // props: ['passiveNotes'],
  //  mounted() {
  //    console.log("mountd treadsh")
  //   this.getTrashNotes()
  //  },

  // components: {
  //   cardIcons,
  //   dialogBox,
  // },

  data: () => ({
    dialog: false,
    trashNotes: "",
    allNotesForTrash: "",

    // passiveNotes:""
  }),

  //   mounted() {
  //   console.log("inside mounted trash")
  //   this.editOptions=this.passiveNotes
  //   console.log("allNotesForTrash", this.editOptions)
  // },

  mounted() {
    this.$root.$on("eventing", (passiveNotes) => {
      console.log("allNotesForTrash", passiveNotes);
      this.trashNotes=passiveNotes;
       console.log("trashNotes",  this.trashNotes);
    });
  },

  //   methods: {
  //     getTrashNotes(){
  //       console.log("trash");
  //       return note
  //         .getNotes()
  //         .then((result) => {
  //           this.result = result.data.data;

  //           this.allNotes = [...this.result].reverse();
  //           // this.activeNotes = this.allNotes.filter(
  //           //   (note) => note.isDeleted == false
  //           // );
  //           //   console.warn("this.activeNotes", this.activeNotes);
  //           // return this.allNotes
  //           this.passiveNotes = this.allNotes.filter(
  //             (note) => note.isDeleted == true
  //           );
  //           console.warn("this.passiveNotes", this.passiveNotes);
  //         })
  //         .catch((error) => {});
  //  }}
};
</script>
