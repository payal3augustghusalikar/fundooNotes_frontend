<template>

<v-group>
    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-icon v-bind="attrs" v-on="on">mdi-bell-outline</v-icon>
      </template>
      <span> Remind me </span>
    </v-tooltip>
    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-icon v-bind="attrs" v-on="on">mdi-account-outline</v-icon>
      </template>
      <span> Collaborator </span>
    </v-tooltip>
    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-icon v-bind="attrs" v-on="on">mdi-palette-outline</v-icon>
      </template>
      <span> Change color</span>
    </v-tooltip>
    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-icon v-bind="attrs" v-on="on">mdi-image-outline</v-icon>
      </template>
      <span>Add image</span>
    </v-tooltip>
    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-icon v-bind="attrs" v-on="on">mdi-download-outline</v-icon>
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
     <v-list-item @click="deletNote">Delete note</v-list-item>
        <v-list-item v-on="on" link>Add label</v-list-item>
    </v-list>
   </v-group>
  
</template>

<script>
export default {
name:'cardIcons',
 props: ['singleNoteDetails', 'trashField', 'mainField'],
  data: () => ({
    dialog: false,
   methods: {
     
   },
  }),
};
</script>

<style lang="scss" scoped>
@import url("../scss/cardIcons.scss");
</style>
