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
          <v-icon v-bind="attrs" v-on="on" @click="archieve"
            >mdi-download-outline</v-icon
          >
        </template>
        <span>Archieve</span>
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
      <Snackbar ref="snackbar" />
    </v-group>
  </div>
</template>

<script>
import note from "../services/note.js";
import dashboard from "./dashboard";
export default {

   name: 'cardIcons',
  components: {
    dashboard
  },

  mounted() {
    console.log("mount", this.singleNote);
  },
  props: {
    singleNote: Object
  },
  data: () => ({
    noteInfo: this.singleNote,
    IconDialog: false,
     snackbarData:"",
    // Textappear:false
  }),
  methods: {
    moveToTrash() {
      const noteInput = {
        isDeleted: true
      };
      // console.log("moveToTrash note");
      // console.log("this.singleNote", this.singleNote);
      console.log("moveToTrash note", this.singleNote._id);
      note
        .moveToTrash(noteInput, this.singleNote._id)
        .then(data => {
          console.log("res is", data);
          console.log(data.data.status_code.status_code);
          if (data.data.status_code.status_code == 200) {
            // this.snackbarText =  "Note moved to trash ";
            //   this.Textappear= true
             console.log("inside ifff")

            const snackbarData = {
              text: "Note moved to trashhhhhhhhhhhh",
              timeout: 2500
            };
            console.log("this.snackbarData : ", this.snackbarData);

            this.$refs.snackbar.activateSnackbar(snackbarData);
            this.$refs.dashboard.displayAllNotes();
          }
    console.log("outside ifff")
          // (this.snackbar.appear = true),
          //   (this.snackbar.text = "Note moved to trash ");
          //this.close();
        })
        .catch(
          (this.snackbarText = "Note moved to trash "),
          (this.Textappear = true)
        );
    },

    archieve() {
      console.log("archieveNote note");
      console.log("this.singleNote", this.singleNote);
      console.log("archieveNote note", this.singleNote._id);
      const noteInput = {
        isArchived: true
      };
      note
        .archieveNote(noteInput, this.singleNote._id)
        .then(data => {
           console.log("res is", data);
          if (data.data.status_code.status_code == 200) {
      console.log("note arch")
             this.snackbarData = {
              text: "note archieve successfully",
              timeout: 2500
            };
            // (this.snackbar.appear = true),
            //   (this.snackbar.text = "note archieve successfully"),
            console.log("this.snackbarData : ", this.snackbarData);
               this.$refs.dashboard.displayAllNotes();
          }
        })
        .catch(
          error => (this.snackbar.appear = true),
          (this.snackbar.text = "error while archieve, please try again later")
        );
    }
  }
};
</script>

<style lang="scss" scoped>
@import url("../scss/cardIcons.scss");
</style>
