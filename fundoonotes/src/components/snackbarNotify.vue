<template>
  <div name="snackbar">
    <v-snackbar v-model="show"  :timeout="timeout" >
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn dark text v-bind="attrs" @click="show = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
export default {
   data() {
    return {
      show: false,
     
      text: "",
      timeout: 0,
    };
  },
  created() {
    console.log("inside created snackbar ")
    this.$store.subscribe((mutation, state) => {
      console.log("mutation", mutation)
        console.log("state", state)
    //     console.log("state.cards",state.cards )
    //       this.text = state.cards.text;
    //         console.log("state.snackBar.text", state.cards.text)
    //              console.log("this.text", this.text)
    //     //console.log("mutation.type === snackbar||SHOW_MESSAGE :", mutation.type === "snackbar"||"SHOW_MESSAGE")
    //  // if (mutation.type === ("snackbar"||"SHOW_MESSAGE")) {
    //     this.timeout = state.cards.timeout;
        this.show = true;
        console.log("this.show", this.show)
    //  }
    });
  },
 
};
</script>