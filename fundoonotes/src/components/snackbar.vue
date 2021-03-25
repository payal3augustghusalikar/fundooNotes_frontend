<template>
    <v-snackbar
            v-model="snackbar.appear"
           
            :timeout="snackbar.timeout"
            :left="snackbar.x === 'left'"
            :right="snackbar.x === 'right'"
            :top="snackbar.y === 'top'"
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
      x: 'right',
      y: 'top',
    }
    })
}
</script>