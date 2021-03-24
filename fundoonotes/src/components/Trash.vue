<template>
  <v-flex>
    <v-layout row wrap>
  
      <v-flex 
        v-for="note in allNotes" v-bind:key="note._id"
        md3
        class="mr-5 mb-10"
      >  <div v-if="note.isDeleted == true">
            <v-hover v-slot="{ hover }">
              <v-card
             @click.stop="note.dialog = true"
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
               
                <v-list-item></v-list-item>
               
            <cardIcons
                  v-show="hover==true || click==true"
                    :singleNoteDetails="note"
                   />
                <v-flex>
                 <dialogue ref="dialogue"   :options="note" :dialog.sync="dialog" ></dialogue>
                </v-flex>
              </v-card>

            </v-hover>
            </div>
      </v-flex>
  
    </v-layout>

    <div>
     <button @click="dialog=true">Open Dialog</button>
     <dialogue :dialog.sync="dialog" />
   </div>
  </v-flex>

</template>

<script>
import note from '../services/note.js';
import cardIcons from '../components/cardIcons.vue';
import dialogue from  './dialogue.vue';



export default {
  name: 'noteCards',
  components: {
    cardIcons,
    dialogue
  },

  
   data: () => ({
     dialog:false,
 allNotes: '',

   }),
    methods: {
     
    },

};
</script>

<style lang="scss" scoped>
@import url("../scss/noteCards.scss");
</style>
