<template>
  <div>
    <h3 v-if="token">
      hii,{{ firstName }} {{ lastName }} welcome to dashboard
    </h3>
    <h3 v-if="!token">You are not logged in! please log in.</h3>
  </div>
</template>

<script>

export default {
  data() {
    return {
      firstName: null,
      token: null,
    };
  },
  name: 'dashboard',
  async created() {
    const firstName = sessionStorage.getItem('firstName');
    const lastName = sessionStorage.getItem('lastName');
    const token = sessionStorage.getItem('token');
    const emailId = sessionStorage.getItem('emailId');
    this.firstName = firstName;
    this.lastName = lastName;
    this.token = token;
    this.emailId = emailId;
  },
};
</script>
