<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/browse">Browse</router-link> |
      <router-link to="/login">Login</router-link>
      <router-link to="/login" id="loginicon"
        ><a-avatar icon="user" id="avataricon"></a-avatar
      ></router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#loginicon {
  float: right;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  background-color: #2c3e50;
  color: white;
}

#nav a {
  font-weight: bold;
  color: inherit;
  margin-right: 0.7em;
  margin-left: 0.7em;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
