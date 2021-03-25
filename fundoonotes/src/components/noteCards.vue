<template>
  <v-flex>
    <v-layout row wrap>
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
            @click.stop="note.dialog=true"
          >
            <article class="text-md-right text-lg-right">
              <v-icon v-bind="attrs" v-on="on" v-show="hover"
                >mdi-pin-outline</v-icon
              >
            </article>
            <v-card-title>{{ note.title }} </v-card-title>
            <v-list-item>{{ note.description }}</v-list-item>

            <cardIcons v-show="hover == true || click == true" />
             <dialogBox :dialog.sync="dialog"  ref="dialogue"
                :options="note" />
          </v-card>
        </v-hover>
      </v-flex>
     <div>
     
    
   </div>
    </v-layout>
     
  </v-flex>
</template>

<script>
import note from '../services/note.js';
import cardIcons from '../components/cardIcons.vue';
import dialogBox from './dialogBox.vue';

export default {
  name: 'noteCards',
  components: {
    cardIcons,
    dialogBox,
  },
  data: () => ({
    allNotes: '',
    result: '',
     dialog: false
   
  }),


  methods: {
    displayAllNotes() {
      return note
        .getNotes()
        .then((result) => {
          this.result = result.data.data;
          this.allNotes = [...this.result].reverse();
        
        })
        .catch((error) => {
         
        });
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("../scss/noteCards.scss");
</style>
