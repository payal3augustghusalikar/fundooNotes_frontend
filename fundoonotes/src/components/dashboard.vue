<template>
  <div id="app">
    <v-app id="inspire">
      <v-card class="mx-auto overflow-hidden topBar">
        <v-row>
          <v-col>
            <v-app-bar color="white" class="main-bar" elevation="1">
              <v-app-bar-nav-icon @click="drawer"></v-app-bar-nav-icon>

              <span class="FundooNotes_img">
                <img src="../assets/googleKeep.png" />
              </span>
              <v-toolbar-title>FundooNotes</v-toolbar-title>
              <div id="top-search-bar">
                <v-text-field
                  label="Search"
                  prepend-inner-icon="mdi-magnify"
                  fixed
                  filled
                   autocomplete="off"
                  dense
                  solo
                ></v-text-field>
              </div>
              <v-spacer> </v-spacer>

              <md-avatar class="md-avatar-icon">P</md-avatar>
            </v-app-bar>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <sidenavBar :showIconName="showIconName" />
          </v-col>
          <v-main>
            <v-container>
              <div class="takeNote">
                <v-card
                  class="mx-auto my-12 note-card window"
                  elevation="8"
                  @click="expandCard"
                  :height="cardHeight"
                  v-click-outside="hide"
                  v-bind:class="{ active: showBottomCard }"
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
                      <v-icon v-if="!showBottomCard"
                        >mdi-checkbox-marked-outline</v-icon
                      >
                      <v-icon v-if="!showBottomCard">mdi-brush</v-icon>
                      <v-icon v-if="!showBottomCard">mdi-image-outline</v-icon>
                      <v-tooltip bottom>
                        <template v-slot:activator="{ on, attrs }">
                          <v-icon
                            v-bind="attrs"
                            v-on="on"
                            v-show="showBottomCard"
                            >mdi-pin-outline</v-icon
                          >
                        </template>
                        <span>Pin note</span>
                      </v-tooltip>
                    </template>
                  </v-text-field>

                  <v-text-field
                    v-model="description"
                    placeholder="take a Notee"
                    flat
                    solo
                      autocomplete="off"
                    dense
                    maxlength="400"
                    required
                    v-show="showBottomCard == true"
                  />
                  <v-span class="cardBottomIcon" v-if="showBottomCard">
                    <v-row>
                      <cardIcons />
                      <v-spacer></v-spacer>
                      <v-button
                        type="submit"
                        class="close"
                        @click="creatNewNote"
                        >Close</v-button
                      >
                    </v-row>
                  </v-span>
                </v-card>
              </div>
              <div class="allCards">
                <noteCards ref="childNote"  />
              </div>
            </v-container>
          </v-main>
        </v-row>
      </v-card>
    </v-app>
  </div>
</template>

<script>
import note from '../services/note.js';
import sidenavBar from '../components/sidenavBar.vue';
import cardIcons from '../components/cardIcons.vue';
import noteCards from '../components/noteCards.vue';
export default {
  components: {
    sidenavBar,
    cardIcons,
    noteCards,
  },
  data: () => ({
    title: '',
    description: '',
    showIconName: true,
    showBottomCard: false,
    text: 'take a note...',
    cardHeight: 50,
    isActive: true,
    allNotes: '',
  }), 

  mounted() {
     this.$refs.childNote.displayAllNotes();
    
  },

  methods: {
    resetCard: function() {
      this.cardHeight = 50;
      this.text = 'take a note...';
      this.title= '';
    this.description= '';
    },

    drawer() {
      this.showIconName = !this.showIconName;
      // this.resetCard();
    },

    displayAllNotes() {
    //this.$refs.childNote.displayAllNotes("note")
      this.$refs.childNote.displayAllNotes();

    //  this.allNotes =this.$refs.childNote.methods.displayAllNotes()
// console.log(" this.Notes",  this.Notes)
//       note
//         .getNotes()
//         .then((result) => {
//           this.allNotes = result.data.data;
//           console.log('allNotes ', this.allNotes);

       
//         })
//         .catch((error) => {
//           alert('error', error);
//         });
    },

    hide: function() {
      this.showBottomCard = false;
      this.resetCard();
    },

    expandCard() {
      this.showBottomCard = true;
      this.text = 'title';
      this.cardHeight = 150;
    },

    creatNewNote() {
      let noteData = {
        title: this.title,
        description: this.description,
      };
      note
        .createNote(noteData)
        .then((result) => {
          this.$refs.childNote.displayAllNotes();
          console.log("result", result)
         // this.displayAllNotes();
          alert(':success');
        })
        .catch((error) => {
          console.warn('error for create note is ', error);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("../scss/dashboard.scss");
</style>
