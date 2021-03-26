<template>
  <v-flex>
    <h1>Trashug</h1>

    <v-layout row wrap>
      <v-flex
        v-for="note in trashNotes"
        v-bind:key="note._id"
        md3
        class="mr-5 mb-10"
      >
        <v-hover v-slot="{ hover }">
          <v-card
            class="mx-auto v-list"
            outlined
            :class="{ 'on-hover': hover }"
          >
            <v-card-title>{{ note.title }} </v-card-title>
            <v-list-item class="v-list">{{ note.description }}</v-list-item>

            <v-list-item>
              <v-row v-show="hover == true || click == true">
                <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn icon v-bind="attrs" v-on="on" @click="restoreNote">
                      <article class="text-md-left text-lg-left">
                        <v-icon>mdi-restore</v-icon>
                      </article>
                    </v-btn>
                  </template>
                  <span>Restore</span>
                </v-tooltip>

                <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn icon v-bind="attrs" v-on="on">
                      <article class="text-md-left text-lg-left">
                        <v-icon @click="note.dialog = true"
                          >mdi-delete-outline</v-icon
                        >
                      </article>
                    </v-btn>
                  </template>
                  <span>Delete Forever</span>
                </v-tooltip>
              </v-row>
            </v-list-item>
            <v-list-item></v-list-item>

            <dialogBox :dialog="note.dialog"  :options="note" :trash="true" />
          </v-card>
        </v-hover>
      </v-flex>
    </v-layout>
  </v-flex>
</template>

<script>
import note from "../services/note.js";
// import cardIcons from '../components/cardIcons.vue';
import dialogBox from "./dialogBox.vue";

export default {
  name: "Trash",
  components: {
    dialogBox,
  },

  data: () => ({
    IconDialog: false,
    trashNotes: "",
    allNotesForTrash: "",
    trash: true,
    dialog: false,
  }),

  beforeMount() {
    this.$root.$on("eventing", (passiveNotes) => {
      console.log("allNotesForTrash", passiveNotes);
      this.trashNotes = passiveNotes;
      console.log("trashNotes", this.trashNotes);
    });
  },

  //   methods: {
  //     getTrashNotes(){
  //       console.log("trash");
  //       return note
  //         .getNotes()
  //         .then((result) => {
  //           this.result = result.data.data;

  //           this.allNotes = [...this.result].reverse();
  //           // this.activeNotes = this.allNotes.filter(
  //           //   (note) => note.isDeleted == false
  //           // );
  //           //   console.warn("this.activeNotes", this.activeNotes);
  //           // return this.allNotes
  //           this.passiveNotes = this.allNotes.filter(
  //             (note) => note.isDeleted == true
  //           );
  //           console.warn("this.passiveNotes", this.passiveNotes);
  //         })
  //         .catch((error) => {});
  //  }}
};
</script>
