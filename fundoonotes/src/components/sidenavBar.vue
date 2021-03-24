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
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title v-if="showIconName">
              <div class="icon-name">{{ item.title }}</div>
            </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  props: {
    showIconName: Boolean,
  },
  data: () => ({
    sideNavBar: [
      {
        title: "Note",
        icon: "mdi-lightbulb-outline",
      },
      {
        title: "Reminders",
        icon: "mdi mdi-bell-outline",
      },
      {
        title: "Label",
        icon: " mdi-label-outline",
      },
      {
        title: "Edit labels",
        icon: "mdi-pencil-outline",
      },
      {
        title: "Archieve",
        icon: "mdi-download-outline",
      },
      {
        title: "Trash",
        icon: "mdi-delete-outline",
      },
    ],
  }),
  methods: {},
};
</script>
<style lang="scss" scoped>
@import url("../scss/sidenavBar.scss");
</style>
