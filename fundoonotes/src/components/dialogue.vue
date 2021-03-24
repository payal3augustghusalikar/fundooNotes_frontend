<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" max-width="300px">
      <v-card v-click-outside="onClickOutside">
        <v-card-text>
          <v-form>
            <v-text-field
              solo
              label="id"
              v-model="editOptions._id"
              v-show="false"
            ></v-text-field>
            <v-text-field
              solo
              label="title"
              v-model="editOptions.title"
              required
            ></v-text-field>
            <v-text-field
              solo
              label="description"
              v-model="editOptions.description"
              required
            ></v-text-field>
            <cardIcons />
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
    <noteCards v-show="false" ref="noteCards" />
  </v-layout>
</template>

<script>
import cardIcons from "./cardIcons";
import note from "../services/note";
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
  },

  data() {
    return {
      editOption: this.options,
    };
  },

  methods: {
    onClickOutside() {
      if (this.editOptions.title && this.editOptions.description) {
        const noteInput = {
          title: this.editOptions.title,
          description: this.editOptions.description,
        };
        note
          .updateNote(noteInput, this.editOptions._id)
          .then((data) => {
            this.$refs.noteCards.displayAllNotes();
           
          })
          .catch((error) => console.log("error while updating", error));
      }
    },
  },
};
</script>
