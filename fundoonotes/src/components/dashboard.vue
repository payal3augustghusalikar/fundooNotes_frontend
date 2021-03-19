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

          <v-col class="takeNote">
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
                  <v-icon v-if="!showBottomCard">mdi-checkbox-marked</v-icon>
                  <v-icon v-if="!showBottomCard">mdi-brush</v-icon>
                  <v-icon v-if="!showBottomCard">mdi-image</v-icon>
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                      <v-icon v-bind="attrs" v-on="on" v-show="showBottomCard"
                        >mdi-pin</v-icon
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
                dense
                maxlength="400"
                required
                v-show="showBottomCard == true"
              />

              <v-row class="cardBottomIcon" v-if="showBottomCard">
              <cardIcons />
              <!--  <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <v-icon v-bind="attrs" v-on="on">mdi-bell</v-icon>
                  </template>
                  <span> Remind me </span>
                </v-tooltip>
                <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <v-icon v-bind="attrs" v-on="on">mdi-account</v-icon>
                  </template>
                  <span> Collaborator </span>
                </v-tooltip>
                <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <v-icon v-bind="attrs" v-on="on">mdi-brush</v-icon>
                  </template>
                  <span> Change color</span>
                </v-tooltip>
                <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <v-icon v-bind="attrs" v-on="on">mdi-image</v-icon>
                  </template>
                  <span>Change image</span>
                </v-tooltip>
                <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <v-icon v-bind="attrs" v-on="on">mdi-download</v-icon>
                  </template>
                  <span>Archieve</span>
                </v-tooltip> -->
                <v-spacer />

                <v-button type="submit" class="close" @click="creatNewNote"
                  >Close</v-button
                >
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-card>
    </v-app>
  </div>
</template>

<script>

import note from '../services/note.js';
import sidenavBar from '../components/sidenavBar.vue';
import cardIcons from '../components/cardIcons.vue';
export default {
  components: {
    sidenavBar,
    cardIcons
  },
  data: () => ({
    title:'',
      description:'',
    showIconName: true,
    showBottomCard: false,
    text: 'take a note',
    cardHeight: 50,
    isActive: true,
  }),
  methods: {
    resetCard: function() {
      this.cardHeight = 50;
      this.text = 'take a note...';
    },
    drawer() {
      console.warn('parent called');
      this.showIconName = !this.showIconName;
      // this.resetCard();
    },

    hide: function() {
      this.showBottomCard = false;
      this.resetCard();
    },
    expandCard() {
      this.showBottomCard = true;
      console.warn(' this.showBottomCard', this.showBottomCard);
      this.text = 'title';
      this.cardHeight = 150;
    },

    creatNewNote() {
      console.warn('inside' );
      let noteData = {
        title: this.title,
        description: this.description};
 note
        .createNote(noteData)
        .then((result) => {
          console.warn('Success', result);
           window.setTimeout(() => {
           alert('note created');
            this.clearForm();
          }, 2000);
        })  .catch((error) => {
          this.isLinkNotSent = true;
           alert('Error');
          console.warn('error for forget password is ', error);
        } );
    }
  }
  
};
</script>

<style lang="scss" scoped>
@import url("../scss/dashboard.scss");
</style>
