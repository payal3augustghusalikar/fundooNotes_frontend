<template>
  <div>
    <v-navigation-drawer class="sideNavBar" fixed permanent>
      <v-list>
        <v-list-item-group
          v-model="group"
          shaped
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item v-for="item in sideNavBar" :key="item.icon">
            <v-list-item-icon>
              <v-icon @click="goToItem(item)">{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title v-if="showIconName">
              <div class="icon-name" @click="goToItem(item)">
                {{ item.title }}
              </div>
            </v-list-item-title>
          </v-list-item>
         
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <dashboard v-show="false" :navBarOption.sync="this.navBarOption"/>
  </div>
</template>

<script>
import router from '../router/route.js';
import dashboard from "./dashboard.vue";
export default {
 components: {
    dashboard
  },

  props: {
    showIconName: Boolean,
  },
  data: () => ({
    navBarOption:true,
    sideNavBar: [
      {
        title: 'Note',
        icon: 'mdi-lightbulb-outline',
      },
      {
        title: 'Reminders',
        icon: 'mdi mdi-bell-outline',
      },
      {
        title: 'Label',
        icon: ' mdi-label-outline',
      },
      {
        title: 'Edit labels',
        icon: 'mdi-pencil-outline',
      },
      {
        title: 'Archieved',
        icon: 'mdi-download-outline',
      },
      {
        title: 'Trash',
        icon: 'mdi-delete-outline',
      },
    ],
  }),

//  router.push({ name: 'login' });

  methods: {
    goToItem(item) {
      console.log("pushing to : ",item.title )
      if(item.title=='Trash')
      {
         this.navBarOption=false
      }
console.log("item.title==Trash",item.title=='Trash' )
      
      this.$router.push({
        name: item.title,
      });
     
    },
  },
};
</script>
<style lang="scss" scoped>
@import url("../scss/sidenavBar.scss");
</style>
