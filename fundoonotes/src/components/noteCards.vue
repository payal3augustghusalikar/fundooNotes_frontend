<template>
  
    <v-layout wrap>
      <v-flex md4 v-for="note in allNotes" v-bind:key="note._id">
        <v-card
          class="mx-auto my-12 xs12 md6 lg3 note-card window card-container"
          @mouseover="hover = true"
          @mouseleave="hover = false"
        >
          <v-layout>
            <v-flex md12 lg12>
              <v-row>
                <v-col>
                  <div>{{ note.title }}</div>
                </v-col>
                
                <v-col>
                  <template>
                    <v-tooltip bottom>
                      <template v-slot:activator="{ on, attrs }">
                       <article class="text-md-right text-lg-right">
                        <v-icon v-bind="attrs" v-on="on" v-show="hover"
                          >mdi-pin</v-icon
                        >  </article>
                      </template>
                      <span>Pin note</span>
                    </v-tooltip>
                  </template>
                </v-col>
              </v-row>
              <article class="text-md-left text-lg-left">
                <v-card-content> {{ note.description }} </v-card-content>
              </article>
              <v-row class="cardBottomIcon" v-if="hover">
                <cardIcons />
                <v-spacer />
              </v-row>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>

</template>

<script>
import cardIcons from "../components/cardIcons.vue";

export default {
  components: {
    cardIcons,
  },
  props: ["allNotes"],
  data: () => ({
    hover: false,
    allNotes: Object,
    methods: {
      hide: function() {
        this.showBottomCard = false;
        this.resetCard();
      },
    },
  }),
};
</script>

<style lang="scss" scoped>
@import url("../scss/noteCards.scss");
</style>
