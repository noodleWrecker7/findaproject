<template>
  <div></div>
</template>

<script>
export default {
  name: 'login',
  mounted() {
    let x = new XMLHttpRequest();
    x.open('POST', 'http://localhost:12345/auth/login');

    x.onreadystatechange = function () {
      console.log(this.response);
      this.res;
    };
    x.onload = function () {
      this.response;
    };
    x.setRequestHeader('Content-Type', 'application/json');
    x.send(JSON.stringify({ username: 'testaccount', password: 'tesPass&1' }));
  }
};
</script>

<style scoped></style>
