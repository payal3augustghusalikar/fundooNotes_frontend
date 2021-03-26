<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" @close="close" persistent max-width="400" min-height="200">
      <v-card v-click-outside="onClickOutside">
        <v-card-text>
          <v-form ref="editForm">
            <v-text-field
              solo
              label="id"
              v-model="editOptions._id"
              v-show="false"
            ></v-text-field>
            <v-textarea
              v-if="!trash"
              flat
              solo
              dense
              auto-grow
              rows="1"
              row-height="10"
              required
              label="title"
              v-model="editOptions.title"
            ></v-textarea>
            <v-textarea
              v-if="!trash"
              autocomplete="off"
              flat
              solo
              dense
              auto-grow
              rows="1"
              row-height="10"
              required
              label="description"
              v-model="editOptions.description"
            ></v-textarea>
            <cardIcons v-if="!trash" />
          </v-form>
        </v-card-text>

        <h4 v-if="trash">Do you want to delete forever?</h4>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn v-if="trash" color="red darken-1" flat @click="deleteForever"
            >Yes</v-btn
          >

          <v-btn color="green darken-1" flat @click.native="close">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-snackbar v-model="snackbar.appear" :timeout="snackbar.timeout">
      {{ snackbar.text }}</v-snackbar
    >
    <noteCards v-show="false" ref="noteCards" />
  </v-layout>
</template>

<script>
import cardIcons from "./cardIcons";

import note from "../services/note.js";

export default {
  components: {
    cardIcons,
  },
  props: {
    dialog: {
      default: false,
    },
    options: Object,
    trash: Boolean,
  },
  data() {
    return {
      snackbar: {
        appear: false,
        text: "",
        timeout: 2500,
      },
      editOptions: this.options,
    };
  },
  // beforeDestroy() {
  //   this.$refs.dialog.close();
  // },

  // watch: {
  //   dialog(val) {
  //     !val && alert("Dialog is closing");
  //   },
  // },

watch: {
    dialog(val) {
        val || this.close();
    },
},


  // watch: {
  //     dialog: function(val) {
  //       console.log("closing dialog")
  //       if(val) {
  //         // this.editOptions._id = '';
  //         // this.editOptions.title = '';
  //         // this.editOptions.description = '';
  //        this.dialog==false
  //       }
  //     }
  //   },
  methods: {
    close() {
      this.dialog = "false";
     
    },

    onClickOutside() {
      if (this.trash == true) {
        console.log("it is trash");
      } else if (this.editOptions.title && this.editOptions.description) {
        const noteInput = {
          title: this.editOptions.title,
          description: this.editOptions.description,
        };
        note
          .updateNote(noteInput, this.editOptions._id)
          .then((data) => {
            if (data.data.status_code.status_code == 200) {
              (this.snackbar.appear = true),
                (this.snackbar.text = "note updated successfully"),
                this.close();
            }
          })
          .catch(
            (error) => (this.snackbar.appear = true),
            (this.snackbar.text =
              "error while updating, please try again later")
          );
      }
    },

    deleteForever() {
      console.log("deleteForever note");
      console.log("this.editOptions._id", this.editOptions._id);
      console.log("this.editOptions._id", this.editOptions);
      note
        .deleteForever(this.editOptions._id)
        .then((data) => {
          console.log(data.data);
          if (data.data.status_code.status_code == 200) {
            (this.snackbar.appear = true),
              (this.snackbar.text = "note deleted successfully"),
              this.close();
          }
        })
        .catch(
          (error) => console.log("error", error),
          (this.snackbar.appear = true),
          (this.snackbar.text = "error while updating, please try again later")
        );
    },
  },
};
</script>
