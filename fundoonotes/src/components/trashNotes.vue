<template>
  <div>
    <h1>Trash gg</h1>
    <noteCards v-show="false" ref="childNote" />


   
  <v-flex>
    <v-layout row wrap>
      <v-flex
        v-for="note in passiveNotes"
        v-bind:key="note._id"
        md3
        class="mr-5 mb-10"
      >
   
          <v-hover v-slot="{ hover }">
            <v-card
              @click.stop="note.dialog = true"
              class="mx-auto v-list"
              outlined
              :class="{ 'on-hover': hover }"
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
                v-show="hover == true || click == true"
                :singleNoteDetails="note"
              />
              <v-flex>
                <dialogBox
                  ref="dialog"
                  :options="note"
                  :dialog.sync="dialog"
                ></dialogBox>
              </v-flex>
            </v-card>
          </v-hover>
       
      </v-flex>
    </v-layout>
  </v-flex>
   </div>
</template>

<script>
import note from '../services/note.js';
import cardIcons from '../components/cardIcons.vue';
import dialogBox from './dialogBox.vue';

 



import noteCards from '../components/noteCards.vue';

export default {
  name: 'Trash',
components: {
    noteCards,
  },
 // props: ['passiveNotes'],
   mounted() {
     console.log("mountd treadsh")
     this.getTrashNotes()
   },

  // components: {
  //   cardIcons,
  //   dialogBox,
  // },

  data: () => ({
    dialog: false,
   trashNotes: "",
   allNotesForTrash:""
  }),

//   mounted() {
//   console.log("inside mounted trash")
//   this.editOptions=this.passiveNotes
//   console.log("allNotesForTrash", this.editOptions)
// },
  methods: {

    getTrashNotes(){

 
      console.log("disply on dash");
      return note
        .getNotes()
        .then((result) => {
          this.result = result.data.data;

          this.allNotes = [...this.result].reverse();
          // this.activeNotes = this.allNotes.filter(
          //   (note) => note.isDeleted == false
          // );
          //   console.warn("this.activeNotes", this.activeNotes);
          // return this.allNotes


          this.passiveNotes = this.allNotes.filter(
            (note) => note.isDeleted == true
          );
          console.warn("this.passiveNotes", this.passiveNotes);
        })
        .catch((error) => {});
 }}
};
</script>
