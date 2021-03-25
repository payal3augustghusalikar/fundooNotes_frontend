<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" persistent max-width="450">
     <v-card v-click-outside="onClickOutside">
        <v-card-text>
          <v-form>
            <v-text-field
              solo
              label="id"
              v-model="editOptions._id"
              v-show="true"
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
          <v-btn color="green darken-1" flat @click.native="close">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
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
        default: false
      }, options: Object,
    },
    data () {
    return {
     
      editOptions: this.options
    };
  },
  
   mounted() {
   console.log("options", this.options )
  },
    methods: {
        close() {
        this.$emit('update:dialog', false)
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
            this.$refs.noteCards.displayAllNotes();
           
          })
          .catch((error) => console.log("error while updating", error));
      }
    }
  }
  }
  </script>