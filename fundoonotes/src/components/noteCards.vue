<template>
  <v-flex>
    <v-layout row wrap>
      <v-flex
        v-for="note in allNotes" v-bind:key="note._id"
        md3
        class="mr-5 mb-10"
      >
            <v-hover v-slot="{ hover }">
              <v-card
              
                class="mx-auto v-list"
                outlined
                :class="{'on-hover':hover}"
              >
              <article class="text-md-right text-lg-right">
                <v-icon v-bind="attrs" v-on="on" v-show="hover"
                  >mdi-pin-outline</v-icon
                >
              </article>
                <v-card-title>{{ note.title }} </v-card-title>
                <v-list-item class="v-list">{{ note.description }}</v-list-item>
                <!--  <p>{{item.dialog}}</P> -->
                <v-list-item></v-list-item>
               
            <cardIcons
                  v-show="hover==true || click==true"
                   />
               
              </v-card>
            </v-hover>
         
      </v-flex>
     
    </v-layout>
  </v-flex>

</template>

<script>
import note from "../services/note.js";
import cardIcons from "../components/cardIcons.vue";

export default {
  name: "noteCards",
  components: {
    cardIcons,
  },

  props: {
    allNotes: Object,
  },

   data: () => ({
  //   hover: false,
   // allNotes: Object,
 allNotes: "",
   }),
    methods: {
     
      displayAllNotes() {
        console.log("inside note com");
        return note
          .getNotes()
          .then((result) => {
            console.log("allNotes in notee ", result.data.data);
            this.allNotes = result.data.data;
            console.log("this.allNotes", this.allNotes)
            return result.data.data;
          })
          .catch((error) => {
            alert("error", error);
          });
      },

      // mounted() {
      //   console.log("mount");
      //   this.displayAllNotes();
      // },
    },

}
</script>

<style lang="scss" scoped>
@import url("../scss/noteCards.scss");
</style>
