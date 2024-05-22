<template>
  <router-view />
</template>



<script>

export default {
  name: 'App',
  components: {

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
body{
  padding: 0px;
  margin: 0px;
}
.logo {
  width: 100px;
}

.register input, .login input , .add input{
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-right: auto;
  margin-left: auto;
  border: 1px solid skyblue;
}

.register button, .login button, .add button {
  width: 320px;
  height: 40px;
  border: 1px solid #cd5c5c;
  background-color: #cd5c5c;
  color: #fff;
  border-radius: 5px; 
  box-shadow: 7px 6px 28px 1px rgba(0, 0, 0, 0.24); 
  cursor: pointer;
  outline: none;
  transition: 0.2s;

}
.register button:active, .login button:active{
  transform: scale(0.98);
  box-shadow: 3px 2px 22px 1px rgb(0,0,0,0.24);
}

</style>
