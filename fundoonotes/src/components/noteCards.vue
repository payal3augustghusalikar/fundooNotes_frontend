<template>
  <v-flex>
    <v-layout class="noteCards row wrap" style="overflow:auto">
   
      <v-flex
        v-for="note in allActiveNotes"
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
              :singleNote="note"
            />
            <v-list-item></v-list-item>
            <dialogBox :dialog.sync="note.dialog == true" :options="note" />
          </v-card>
        </v-hover>
     
       </v-flex>
    </v-layout>

  </v-flex>
</template>

<script>
import cardIcons from '../components/cardIcons.vue';
import dialogBox from './dialogBox.vue';

import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Note',
  components: {
    cardIcons,
    dialogBox,
   
  },

  props: {
    snackbars: Object
  },
  data: () => ({
     allNotes1: '',
    activeNotes: '',
    passiveNotes: '',
    result: '',
    dialog: false,
    snackbar: {
      appear: false,
      text: '',
      timeout: 2500
    }
  }),

  methods: {
    ...mapActions(['getAllNotes']),
  },

  created() {
    this.getAllNotes();
  },

  computed: {
    ...mapGetters([ 'allActiveNotes']),
    }
};
</script>
<style lang="scss" scoped>
@import url("../scss/noteCards.scss");
</style>
