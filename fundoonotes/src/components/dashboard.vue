<template>
  <div id="app">
    <v-app id="inspire">
      <v-card class="mx-auto overflow-hidden topBar">
        <v-row>
          <v-col>
            <v-app-bar color="white" class="main-bar">
              <v-app-bar-nav-icon @click="drawer"></v-app-bar-nav-icon>

              <!-- <v-app-bar-nav-icon @click.stop="mini != mini"></v-app-bar-nav-icon> -->

              <v-toolbar-title>FundooNotes</v-toolbar-title>
              <span class="FundooNotes_img">
                <img src="../assets/googleKeep.png" />
              </span>

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

              <span class="FundooNotes_img" id="settings"
                ><img src="../assets/settings.png"
              /></span>

              <span class="FundooNotes_img" id="allApps"
                ><img src="../assets/allApps.png"
              /></span>
              <md-avatar class="md-avatar-icon">P</md-avatar>
            </v-app-bar>
          </v-col>
        </v-row>

        <!-- <v-navigation-drawer 
    clipped 
    :mini-variant="mini"
    v-model="drawer"
    :permanent="$vuetify.breakpoint.mdOnly"
    :temporary="$vuetify.breakpoint.smAndDown"
    app
    hide-overlay>

    <v-list dense>
        <v-list-tile
            v-for="(item, index) in items"
            :key="index"
        >
            <v-list-tile-action>
                <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
        </v-list-tile>
    </v-list>
</v-navigation-drawer>
 -->

        <v-navigation-drawer permanent hide-overlay>
          <!-- <v-list>
         <v-list-item
              v-for="item in items"
              :key="item.title"
              @click="show"
            >
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title v-if="showIconName">{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list> -->

          <v-list nav dense>
            <v-list-item-group
              v-model="group"
              active-class="deep-purple--text text--accent-4"
            >
              <v-list-item v-for="item in sideNavBar" :key="item.icon" >
                <v-list-item-icon >
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-title v-if="showIconName">{{
                  item.title
                }}</v-list-item-title>
              </v-list-item>

              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-lightbulb</v-icon>
                </v-list-item-icon>
                <v-list-item-title v-if="showIconName">Note</v-list-item-title>
              </v-list-item>

              <!-- <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-bell</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Reminder</v-list-item-title>
              </v-list-item>

              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-pencil</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Edit Labels</v-list-item-title>
              </v-list-item>

              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-download</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Archieve</v-list-item-title>
              </v-list-item>

              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-delete</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Trash</v-list-item-title>
              </v-list-item> -->
            </v-list-item-group>
          </v-list>
        </v-navigation-drawer>
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
      icon: 'mdi-lightbulb'
    },
{
      title: 'Reminders',
      icon: ' mdi-bell'
    },
   
     {
      title: 'Edit labels',
      icon: 'mdi-pencil'
    },
     {
      title: 'Archieve',
      icon: 'mdi-download'
    },
     {
      title: 'Trash',
      icon: 'mdi-delete'
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
