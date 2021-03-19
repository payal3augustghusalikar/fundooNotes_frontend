<template>
  <v-row>
    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-icon v-bind="attrs" v-on="on">mdi-bell</v-icon>
      </template>
      <span> Remind me </span>
    </v-tooltip>
    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-icon v-bind="attrs" v-on="on">mdi-account</v-icon>
      </template>
      <span> Collaborator </span>
    </v-tooltip>
    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-icon v-bind="attrs" v-on="on">mdi-brush</v-icon>
      </template>
      <span> Change color</span>
    </v-tooltip>
    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-icon v-bind="attrs" v-on="on">mdi-image</v-icon>
      </template>
      <span>Change image</span>
    </v-tooltip>
    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-icon v-bind="attrs" v-on="on">mdi-download</v-icon>
      </template>
      <span>Archieve</span>
    </v-tooltip>
  </v-row>
</template>

<script>
export default {
  //     data: () => ({
  //     title:"",
  //       description:"",
  //     showIconName: true,
  //     showBottomCard: false,
  //     text: "take a note",
  //     cardHeight: 50,
  //     isActive: true,
  //   }),
};
</script>


<style lang="scss" scoped>
@import url("../scss/dashboard.scss");
</style>

