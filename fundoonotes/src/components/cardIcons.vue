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

      <v-tooltip v-if="singleNote.isArchived == false" bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-icon v-bind="attrs" v-on="on" @click="archieve"
            >mdi-download-outline</v-icon
          >
        </template>
        <span>Archieve</span>
      </v-tooltip>
      <v-tooltip v-if="singleNote.isArchived == true" bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-icon v-bind="attrs" v-on="on" @click="unArchieve"
            >present_to_all</v-icon
          >
        </template>
        <span>unArchieve</span>
      </v-tooltip>
      <v-menu>
        <template v-slot:activator="{ on: menu, attrs }">
          <v-tooltip bottom>
            <template v-slot:activator="{ on: tooltip }">
              <v-icon v-bind="attrs" v-on="{ ...tooltip, ...menu }"
                >mdi-dots-vertical</v-icon
              >
            </template>
            <span>more</span>
          </v-tooltip>
        </template>
        <v-list>
          <v-list-item @click="moveToTrash">Delete note</v-list-item>
          <v-list-item v-on="on">Add label</v-list-item>
        </v-list>
      </v-menu>
    </v-group>
  </div>
</template>

<script>
import note from '../services/note.js';
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'cardIcons',
  components: {
 
  },
  data: () => ({
    showAddNote: true,
  }),
  mounted() {
    this.$root.$on('archieved', navBarOption => {
      this.showAddNote = navBarOption;
    });
  },
  props: {
    singleNote: Object
  },

  methods: {
    ...mapActions(['showSnack', 'getAllNotes', 'trashNote']),
  
   async moveToTrash() {
      
      console.log("get allhhh", await this.trashNote( this.singleNote._id)) 
    },
   
    archieve() {
      const noteInput = {
        isArchived: true
      };
      note
        .archieveNote(noteInput, this.singleNote._id)
        .then(data => {
          if (data.data.status_code.status_code == 200) {
            this.showSnack({
              text: 'Successfully Archieved!',
              timeout: 3500
            });
            this.getAllNotes();
          }
          //  this.showSnack({
          //   text: 'Error archieving, please try again later!',
          //   timeout: 3500
          // });
        })
        .catch(
          error => this.showSnack({
              text: 'archive error, Please try again!',           
              timeout: 3500
            })
        );
    },

    unArchieve() {
      const noteInput = {
        isArchived: false
      };
      note
        .unArchieveNote(noteInput, this.singleNote._id)
        .then(data => {
          
          if (data.data.status_code.status_code == 200) {
            this.showSnack({
              text: 'note unarchieve successfully',
              timeout: 3500
            });
            this.getAllNotes();
          }
          //  this.showSnack({
          //   text: 'Error, please try again later!',
          //   timeout: 3500
          // });
        })
        .catch(
           error => this.showSnack({
              text: 'unarchive Error, Please try again!',           
              timeout: 3500
            })
        );
    }
  }
};
</script>

<style lang="scss" scoped>
@import url("../scss/cardIcons.scss");
</style>
