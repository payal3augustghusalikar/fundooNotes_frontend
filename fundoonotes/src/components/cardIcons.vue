<template>
  <v-row>
    <v-tooltip bottom>
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
      <span>Add image</span>
    </v-tooltip>
    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-icon v-bind="attrs" v-on="on">mdi-download</v-icon>
      </template>
      <span>Archieve</span>
    </v-tooltip>
    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" v-on="on" @click="dialog = true">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>
      
      <span>more</span>
     
    </v-tooltip>
    <v-list v-show="dialog">
      <v-list-item v-for="(item, i) in items" :key="i" @click="() => {}" >
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-row>
   
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    items: [
      {
        title: "Click Me",
      },
      {
        title: "Click Me",
      },
      {
        title: "Click Me",
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
@import url("../scss/dashboard.scss");
</style>
