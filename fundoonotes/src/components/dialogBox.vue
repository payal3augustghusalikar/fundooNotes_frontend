<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" persistent max-width="400" min-height="200">
      <v-card v-click-outside="onClickOutside">
        <v-card-text>
          <v-form >
       <br />
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
         <br />
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn v-if="trash" color="darken-1" flat @click="deleteForever"
            >Yes</v-btn
          >
          <v-btn color="darken-1" flat @click.native="close">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
   
   
  </v-layout>
</template>

<script>
import cardIcons from './cardIcons';

import note from '../services/note.js';
import { mapGetters, mapActions } from 'vuex';

export default {

   name: 'dialogBox',
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
      editOptions: this.options,
    };
  },
 

  methods: {
   ...mapActions(['showSnack', 'getAllNotes']),

    close() {
      this.dialog = false; 
    },

deleteForever() {   
      note
        .deleteForever(this.editOptions._id)
        .then((data) => {
          if (data.data.status_code.status_code == 200) {
             this.showSnack({
              text: 'Deleted Forever!',
              timeout: 3500
            });
            this.getAllNotes();
            }
             this.close();     
        })
        .catch(
          (error) => 
          this.showSnack({
              text: 'Error, Please try again!',
              timeout: 3500
            }),
             this.close()    
        );
    },

    onClickOutside() {
      if (this.trash == true) {
         this.deleteForever();
      }
       else if (this.editOptions.title && this.editOptions.description) {
        const noteInput = {
          title: this.editOptions.title,
          description: this.editOptions.description,
        };
       return note
          .updateNote(noteInput, this.editOptions._id)
          .then((data) => {
            if (data.data.status_code.status_code == 200) {
             this.showSnack({
              text: 'Successfully updated!',
              timeout: 3500
            });
            this.getAllNotes();
              this.close();    
            }
          })
          .catch(
            (error) =>  this.showSnack({
               text: 'Error, Please try again!',
              timeout: 3500
            }),
              this.close()    
          );
      }
    },  
  },
};
</script>
