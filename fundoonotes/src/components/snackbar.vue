<template>
    <v-snackbar
            v-model="snackbar.appear"
           
            :timeout="snackbar.timeout"
           
          >
            {{ snackbar.text }}</v-snackbar
          >
          
</template>

<script>
export default {
  props: {
    appear: Boolean,
  },
    data: () => ({
    snackbar: {
      appear: false,
      text: '',
      timeout: 2500,
     
    }
    })
};
</script>