<template>
  <v-flex>
    <div id="app">
      <v-app id="inspire">
        <v-card class="mx-auto overflow-hidden topBar">
          <v-row>
            <v-col>
              <v-app-bar color="white" class="main-bar" fixed elevation="1">
                <v-app-bar-nav-icon @click="drawer"></v-app-bar-nav-icon>
                <span class="FundooNotes_img">
                  <img src="../assets/googleKeep.png" />
                </span>
                <v-toolbar-title>FundooNotess</v-toolbar-title>
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
            <v-flex>
              <v-main>
                <v-container class="main">
                <!--  <div class="takeNote" v-if="showAddNote"> -->
                <div class="takeNote" v-if="navBarOption"> 
                    <v-card
                      class="mx-auto my-12 note-card window"
                      elevation="8"
                      @click="expandCard"
                      :height="cardHeight"
                      v-click-outside="hide"
                      v-bind:class="{ active: showBottomCard }"
                    >
                      <v-textarea
                        v-model="title"
                        autocomplete="off"
                        :placeholder="text"
                        flat
                        solo
                        dense
                        auto-grow
                        rows="1"
                        row-height="10"
                        required
                      >
                        <template v-slot:append>
                          <v-icon v-if="!showBottomCard"
                            >mdi-checkbox-marked-outline</v-icon
                          >
                          <v-icon v-if="!showBottomCard">mdi-brush</v-icon>
                          <v-icon v-if="!showBottomCard"
                            >mdi-image-outline</v-icon
                          >
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
                      </v-textarea>

                      <v-textarea
                        v-model="description"
                        placeholder="take a Note"
                        flat
                        solo
                        dense
                        auto-grow
                        rows="1"
                        row-height="10"
                        required
                        autocomplete="off"
                        v-show="showBottomCard == true"
                      >
                      </v-textarea>
                      <v-span class="cardBottomIcon" v-if="showBottomCard">
                        <v-row>
                          <cardIcons />
                          <v-spacer></v-spacer>
                          <v-button
                            type="submit"
                            class="close"
                          ref='close'
                            @click="createNewNote"
                            >Close</v-button
                          >
                        </v-row>
                      </v-span>
                    </v-card>
                  </div>


                  <div class="allCards">
                    <router-view></router-view>

                    <!--<noteCards v-if="showAddNote" ref="childNote" /> -->
                  <noteCards v-if="navBarOption" ref="childNote" />

                  </div>
                </v-container>
              </v-main>
            </v-flex>
          </v-row>

         <snackbarNotify />

        </v-card>
      </v-app>
    </div>
  </v-flex>
</template>

<script>
import note from '../services/note.js';
import sidenavBar from '../components/sidenavBar.vue';
import cardIcons from '../components/cardIcons.vue';
import noteCards from '../components/noteCards.vue';
import { mapGetters, mapActions } from 'vuex';
import snackbarNotify from '../components/snackbarNotify.vue';
export default {
  name: 'dashboard',
  components: {
    sidenavBar,
    cardIcons,
    noteCards,
    snackbarNotify
  },

  props: {
    navBarOption: {
      default: true
    },
    Textappear: Boolean,
    snackbarText: String
  },

  data: () => ({
    snackbar: {
      appear: false,
      text: '',
      timeout: 2500
    },

    title: '',
    description: '',
    showIconName: true,
    showBottomCard: false,
    text: 'take a note...',
    cardHeight: 50,
    isActive: true,

    allNotes: '',
    showAddNote: false

  }),
 
  mounted() {
    this.$root.$on('navBarRendering', navBarOption => {

      this.showAddNote = navBarOption;
    });

  },

  methods: {
    resetCard: function() {
      this.cardHeight = 50;
      this.text = 'take a note...';
      this.title = '';
      this.description = '';
    },

    drawer() {
      this.showIconName = !this.showIconName;
    },

    // displayAllNotes() {
    //   this.$refs.childNote.displayAllNotes();
    // },

    hide: function() {
      this.showBottomCard = false;
      this.resetCard();
    },

    expandCard() {
      this.showBottomCard = true;
      this.text = 'title';
      this.cardHeight = 150;
    },
  ...mapActions(['addNote']),
  
    createNewNote() {
      let noteData = {
        title: this.title,
        description: this.description
      };

      this.addNote(noteData);
     // this.$refs.childNote.displayAllNotes();
      this.hide();

    }
  }
};
</script>

<style lang="scss" scoped>
@import url("../scss/dashboard.scss");
</style>
