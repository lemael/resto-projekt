<template>
  <img class="logo" alt="resto logo" src="../assets/resto_logo.jpg">
  <h1>Sign Up</h1>
  <div class="register">
    <input type="text" placeholder="Enter Name">
    <input type="text" placeholder="Enter Email">
    <input type="password" placeholder="Enter Password">
    <button>Sign Up</button>

  </div>
</template>

<script>
export default {
  name: 'SignUp',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.logo {
  width: 100px;
}

.register input {
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-right: auto;
  margin-left: auto;
  border: 1px solid skyblue;
}

.register button {
  width: 320px;
  height: 40px;
  border: 1px solid skyblue;
  background-color: skyblue;
  color: #fff;
  cursor: pointer;

}
</style>
