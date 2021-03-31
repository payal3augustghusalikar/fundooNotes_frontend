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

      <v-tooltip v-if="singleNote.isArchived==false" bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-icon  v-bind="attrs" v-on="on" @click="archieve"
            >mdi-download-outline</v-icon
          >
        </template>
        <span>Archieve</span>
      </v-tooltip>

<v-tooltip v-if="singleNote.isArchived==true" bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-icon v-bind="attrs" v-on="on" @click="unArchieve"
            >mdi-download-outline mdi-rotate-180"</v-icon
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
      <dashboard v-show="false" ref="dashboard" />
      <snackbar ref="snackbar" />
    </v-group>
  </div>
</template>

<script>
import note from '../services/note.js';
import dashboard from './dashboard';
import { mapGetters, mapActions } from "vuex";
export default {

   name: 'cardIcons',
  components: {
    dashboard
  },
 data: () => ({
    noteInfo: this.singleNote,
    IconDialog: false,
     snackbarData:'',
      showAddNote: true
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

//...mapActions(["trashNote"],"snackbar", ["showSnack"]),
...mapActions( ["showSnack"]),
//...mapActions(["showSnack"]),
    moveToTrash() {
      const noteInput = {
        isDeleted: true
      };
      this.trashNote(noteInput, this.singleNote._id)
        .then(data => {
          if (data.data.status_code.status_code == 200) {

            const snackbarData = {
              text: 'Note moved to trashhhhhhhhhhhh',
              timeout: 2500
            };
            this.$refs.snackbar.activateSnackbar(snackbarData);
                  this.getAllNotes()
          } 
        })
        .catch(
          (this.snackbarText = 'Note moved to trash '),
          (this.Textappear = true)
        );
    },
//...mapActions(["getAllNotes"]),
    archieve() {
      const noteInput = {
        isArchived: true
      };
      note
        .archieveNote(noteInput, this.singleNote._id)
        .then(data => {
         
          if (data.data.status_code.status_code == 200) {
   console.log("data.data.status_code.status_code", data.data.status_code.status_code)
            //  this.snackbarData = {
            //   text: 'note archieve successfully',
            //   timeout: 2500
            // };
             this.showSnack({
                    text: "Successfully Saved!",
                    color: "success",
                    timeout: 3500,
                });

           // this.getAllNotes()
               
          }
        })
        .catch(
          error => (this.snackbar.appear = true),
          (this.snackbar.text = 'error while archieve, please try again later')
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
    console.log("data.data.status_code.status_code", data.data.status_code.status_code)
           
             this.showSnack({

                    text: "Successfully Saved!",
                    color: "success",
                    timeout: 3500,
                });

            //  this.snackbarData = {
            //   text: 'note archieve successfully',
            //   timeout: 2500
            // };
                 //  this.getAllNotes()
          }
        })
        .catch(
          error => (this.snackbar.appear = true),
          (this.snackbar.text = 'error while archieve, please try again later')
        );
    }
  }
};
</script>

<style lang="scss" scoped>
@import url("../scss/cardIcons.scss");
</style>
