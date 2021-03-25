<template>
  <div>
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
          <v-btn icon v-bind="attrs" v-on="on" @click="IconDialog = true">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
        <span>more</span>
      </v-tooltip>
    </v-group>

    <v-list v-show="IconDialog">
      <v-list-item @click="deletNote">Delete note</v-list-item>
      <v-list-item v-on="on">Add label</v-list-item>
    </v-list>
   
  </div>
</template>

<script>
import note from '../services/note.js';
export default {
  data: () => ({
    props: ['singleNote'],
    dialog: false,

    methods: {
      deletNote() {
        note
          .delete(this.singleNote._id)
          .then((data) => {
            if (data.data.status_code.status_code == 200) {
              (this.snackbar.appear = true),
                (this.snackbar.text = 'note deleted successfully'),
                this.close();
            }
          })

          .catch(
            (error) => (this.snackbar.appear = true),
            (this.snackbar.text =
              'error while deleting, please try again later')
          );
      },
    },
  }),
};
</script>

<style lang="scss" scoped>
@import url("../scss/cardIcons.scss");
</style>
