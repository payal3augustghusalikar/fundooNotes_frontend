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
          <v-navigation-drawer class="sideNavBar" permanent hide-overlay>
            <v-list nav dense>
              <v-list-item-group
                v-model="group"
                active-class="deep-purple--text text--accent-4"
              >
                <v-list-item v-for="item in sideNavBar" :key="item.icon">
                  <v-list-item-icon>
                    <v-icon>{{ item.icon }}</v-icon>
                  </v-list-item-icon>
                  <v-list-item-title v-if="showIconName">
                    <div class="icon-name">{{ item.title }}</div>
                  </v-list-item-title>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-navigation-drawer>
          </v-col>
     <v-col>
        <v-card
          :loading="loading"
          class="mx-auto my-12 note-card"
         elevation="8"
        >
          <v-text-field
                v-model="title"
                placeholder="take a Note"
              >
                 <v-icon>mdi-checkbox-marked</v-icon>
                  <v-icon  >mdi-brush</v-icon>
                  <v-icon>mdi-image</v-icon>
            
         </v-text-field>
       

          <v-card-title>Tonight's availability</v-card-title>

          <v-card-text>
            <v-chip-group
              v-model="selection"
              active-class="deep-purple accent-4 white--text"
              column
            >
              <v-chip>5:30PM</v-chip>

              <v-chip>7:30PM</v-chip>

              <v-chip>8:00PM</v-chip>

              <v-chip>9:00PM</v-chip>
            </v-chip-group>
          </v-card-text>

          <v-card-actions>
            <v-btn color="deep-purple lighten-2" text @click="reserve">
              Reserve
            </v-btn>
          </v-card-actions>
        </v-card>
        
         </v-col>
        </v-row>
 
      </v-card>
    </v-app>
  </div>
</template>

<script>
export default {
  data: () => ({
    showIconName: true,

    sideNavBar: [
      {
        title: 'Note',
        icon: 'mdi-lightbulb',
      },
      {
        title: 'Reminders',
        icon: ' mdi-bell',
      },

      {
        title: 'Edit labels',
        icon: 'mdi-pencil',
      },
      {
        title: 'Archieve',
        icon: 'mdi-download',
      },
      {
        title: 'Trash',
        icon: 'mdi-delete',
      },
    ],
  }),
  methods: {
    drawer() {
      this.showIconName = !this.showIconName;
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("../scss/dashboard.scss");
</style>
