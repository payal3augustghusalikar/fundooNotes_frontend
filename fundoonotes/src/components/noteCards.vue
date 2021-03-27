<template>
  <v-flex>
 
    <v-layout row wrap  >
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
            @click.stop="note.dialog = true"
          >
            <article class="text-md-right text-lg-right">
              <v-icon v-bind="attrs" v-on="on" v-show="hover"
                >mdi-pin-outline</v-icon
              >
            </article>
            <v-card-title>{{ note.title }} </v-card-title>
            <v-list-item>{{ note.description }}</v-list-item>
            <v-list-item></v-list-item>
            <cardIcons
              v-show="hover == true || click == true"
              :singleNote="note"
            />
            <v-list-item></v-list-item>
            <dialogBox
          
             
              :options="note"
            />
          </v-card>
        </v-hover>
       
      </v-flex>
     
    </v-layout>
      <trashNotes v-show="false" :passiveNotes="passiveNotes"/>
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
  data: () => ({
    allNotes: "",
    activeNotes: "",
      passiveNotes: "",
    result: "",
    dialog: false,
  }),


  mounted() {
    this.displayAllNotes();
  },
  methods: {
    displayAllNotes() {
      console.log("disply on dash");
      return note
        .getNotes()
        .then((result) => {
          this.result = result.data.data;
          this.allNotes = [...this.result].reverse();
          this.activeNotes = this.allNotes.filter(
            (note) => note.isDeleted == false
          );


        //   console.log(" this.activeNotes",  this.activeNotes);
        //   this.passiveNotes = this.allNotes.filter(
        //     (note) => note.isDeleted == true
        //   );
        //  this.$root.$emit('eventing', this.passiveNotes);
        //  return this.allNotes
        })
        .catch((error) => {});
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("../scss/noteCards.scss");
</style>
