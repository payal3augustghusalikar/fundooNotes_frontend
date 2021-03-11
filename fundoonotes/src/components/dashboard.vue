<template>
<div>
<h3 v-if="token"> hii ,{{firstName}} {{lastName}} 
  welcome to dashboard  
 <h3 v-if="!token"> You are not logged in! please log in.</h3>
  </div>

</template>

<script>
//import axios from 'axios'
export default {
   data () {
       return {
 firstName :null,
 token: null,
       }   
   },
      name : "dashboard",
      async created() {
        //   console.log("created")
        //    const responce = await axios.get(' data.data.user[0]')
        //    console.log(responce)
        const firstName = sessionStorage.getItem("name")
        const firstName1 = sessionStorage.getItem("firstName")
        const lastName = sessionStorage.getItem("lastName")
          const token= sessionStorage.getItem('token')
        console.log("firstName : ", firstName)
        this.firstName=firstName
        this.firstName1=firstName1
        this.lastName=lastName
         this.token=token
      },
};
</script>