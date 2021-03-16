
<template>

  <v-card-title class="md-title">
     <span class="text-family-size" id="col">F</span>
    <span class="md-title" id="col1">u</span>
    <span class="md-title" id="col2">n</span>
    <span class="md-title" id="col3">d</span>
    <span class="md-title" id="col4">o</span>
    <span class="md-title" id="col5">o</span>
    <span class="md-title" id="col6">N</span>
    <span class="md-title" id="col7">o</span>
    <span class="md-title" id="col8">t</span>
    <span class="md-title" id="col9">e</span>
    <span class="md-title" id="col10">s</span>
 
  </v-card-title>
   
</template>

<script>

import '@/scss/colors.scss';
export default {

};
</script>
<style lang="scss" scoped>

$myBlue: #0a39c7;
$myRed: #ff0000;
$myOrange:  #ff6600;
$myGreen: #025e21;

.md-title #col {
    color: $myBlue;
}

.md-title #col1 {
    color: $myRed;
}

.md-title #col2 {
    color:$myOrange;
}

.md-title #col3 {
    color: $myBlue;
}

.md-title #col4 {
    color:$myGreen;
}

.md-title #col5 {
    color: $myRed;
}

.md-title #col6 {
    color: $myBlue;
}

.md-title #col7 {
    color: $myRed;
}

.md-title #col8 {
    color: $myOrange;
}

.md-title #col9 {
    color:$myBlue;
}

.md-title #col10 {
    color:$myGreen;
}
@import url("../scss/fundooTitle.scss");
</style>
