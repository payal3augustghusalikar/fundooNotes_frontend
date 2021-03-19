<template>
  <div>
    <v-card
      class="mx-auto my-12  window singleCard"
      @mouseover="hover = true"
      @mouseleave="hover = false"
      v-click-outside="hide"
    >
      <v-text-field
        v-model="title"
        autocomplete="off"
        :placeholder="text"
        flat
        solo
        dense
        maxlength="50"
        required
      >
        <template v-slot:append>
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-icon v-bind="attrs" v-on="on" v-show="hover">mdi-pin</v-icon>
            </template>
            <span>Pin note</span>
          </v-tooltip>
        </template>
      </v-text-field>
      <v-text-field
        v-model="title"
        autocomplete="off"
        :placeholder="text"
        flat
        solo
        dense
        maxlength="50"
        required
      />
      <v-row class="cardBottomIcon" v-if="hover">
        <cardIcons />
        <v-spacer />
      </v-row>
    </v-card>
  </div>
</template>

<script>
import cardIcons from "../components/cardIcons.vue";
import note from "../services/note.js";
export default {
  components: {
    cardIcons,
  },
  data: () => ({
    hover: false,
    methods: {
      hide: function() {
        this.showBottomCard = false;
        this.resetCard();
      },

      displayAllNotes() {
        console.warn("inside displayAllNotes");
        note
          .getNotes()
          .then((result) => {
            console.warn("Success getNotes", result.data.data);

            //  console.warn("Success for get notes", result.data.data );
          })
          .catch((error) => {
            console.warn("error for note is ", error);
          });
      },
    },
  }),
};
</script>

<style lang="scss" scoped>
@import url("../scss/noteCards.scss");
</style>
