<template>
  <v-layout wrap>
    <v-flex md4 v-for="note in allNotes" v-bind:key="note._id" wrap-grid>
      <v-card
        class="mx-auto my-12 xs12 md6 lg3 note-card window card-container"
        @mouseover="hover = true"
        @mouseleave="hover = false"
      >
        <div right>
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <article class="text-md-right text-lg-right">
                <v-icon v-bind="attrs" v-on="on" v-show="hover"
                  >mdi-pin-outline</v-icon
                >
              </article>
            </template>
            <span>Pin note</span>
          </v-tooltip>
        </div>
        <v-layout>
          <v-flex md12 lg12>
            <v-row>
              <div>
                <v-card-title>
                  {{ note.title }}
                </v-card-title>
              </div>
            </v-row>
            <article class="text-md-left text-lg-left">
              <v-card-content> {{ note.description }} </v-card-content>
            </article>
            <v-flex>
              <v-row class="cardBottomIcon" v-if="hover">
                <span bottom>
                  <cardIcons />
                </span>
              </v-row>
            </v-flex>
          </v-flex>
        </v-layout>
      </v-card>
    </v-flex>
  </v-layout>
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
    hover: false,
    allNotes: Object,

    methods: {
      // hide: function() {
      //   this.showBottomCard = false;
      //   this.resetCard();
      // },

      displayAllNotes() {
        console.log("inside note com");
        return note
          .getNotes()
          .then((result) => {
            console.log("allNotes in notee ", result.data.data);
            this.allNotes = result.data.data;
            return result.data.data;
          })
          .catch((error) => {
            alert("error", error);
          });
      },

      mounted() {
        console.log("mount");
        this.displayAllNotes();
      },
    },
  }),
};
</script>

<style lang="scss" scoped>
@import url("../scss/noteCards.scss");
</style>
