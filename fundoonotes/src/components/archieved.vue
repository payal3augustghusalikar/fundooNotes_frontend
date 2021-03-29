<template>
  <v-flex>
    <v-layout class="noteCards" row wrap>
      <v-flex
       v-for="note in archievedNotes"
      
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
            <v-card-title>{{ note.title }} </v-card-title>
            <v-list-item>{{ note.description }}</v-list-item>
            <v-list-item></v-list-item>
            <cardIcons
              v-show="hover == true || click == true"
              :singleNote="note"
            />
            <v-list-item></v-list-item>
           
          </v-card>
        </v-hover>
       
      </v-flex>
        <dashboard v-show="false" :navBarOption="false"/>
    </v-layout>
     
  </v-flex>
</template>

<script>
import note from "../services/note.js";
import cardIcons from "../components/cardIcons.vue";

export default {
  name: "Archieved",
  components: {
    cardIcons,
  },
  data: () => ({
    allNotes: "",
    archievedNotes: "",
    result: "",
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
          console.log("data.data", this.result)
          this.allNotes = [...this.result].reverse();
          this.archievedNotes = this.allNotes.filter(
            (note) => note.isArchived == true
          );
        })
        .catch((error) => {});
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("../scss/noteCards.scss");
</style>
