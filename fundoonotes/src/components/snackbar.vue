<template>
  <v-snackbar v-model="showSnackbar" :timeout="timeout">
    {{ text }}
    <template v-slot:action="{ attrs }">
      <v-btn color="blue" text v-bind="attrs" @click="snackbarAppear = false">
        Close
      </v-btn>
    </template></v-snackbar
  >
</template>

<script>
export default {

   name: 'snackbar',
  // props: {
  //   snackbarAppear: Boolean,
  //   text: String,
  //   timeout: String
  // },
  data: () => ({
  timeout: "",
  text:"",
  showSnackbar: false,
  }),

methods: {
     activateSnackbar(snackbarData) {
console.log(" activateSnackbar(snackbarData)")
        this.showSnackbar = true;
       this.text = snackbarData.text;
      
       this.timeout = snackbarData.timeout;
     }
   }
};
</script>
