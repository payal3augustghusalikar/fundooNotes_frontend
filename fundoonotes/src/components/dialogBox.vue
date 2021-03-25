<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" persistent max-width="450">
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
            <cardIcons />
          </v-form>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" flat @click.native="dialog == false"
            >Close</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-snackbar
      v-model="snackbar.appear"
      :timeout="snackbar.timeout"
      :left="snackbar.x === 'left'"
      :right="snackbar.x === 'right'"
      :top="snackbar.y === 'top'"
    >
      {{ snackbar.text }}</v-snackbar
    >
    <noteCards v-show="false" ref="noteCards" />
  </v-layout>
</template>

<script>
import cardIcons from './cardIcons';

import note from '../services/note.js';

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
      snackbar: {
        appear: false,
        text: '',
        timeout: 2500,
        x: 'right',
        y: 'top',
      },
      editOptions: this.options,
    };
  },
  beforeDestroy() {
    this.$refs.dialog.close();
  },

  methods: {
    close() {
      this.dialog = 'false';
      this.$emit('update:dialog', false);
    },

    onClickOutside() {
      if (this.editOptions.title && this.editOptions.description) {
        const noteInput = {
          title: this.editOptions.title,
          description: this.editOptions.description,
        };
        note
          .updateNote(noteInput, this.editOptions._id)
          .then((data) => {
            if (data.data.status_code.status_code == 200) {
              (this.snackbar.appear = true),
                (this.snackbar.text = 'note updated successfully'),
                this.close();
            }
          })
          .catch(
            (error) => (this.snackbar.appear = true),
            (this.snackbar.text =
              'error while updating, please try again later')
          );
      }
    },
  },
};
</script>
