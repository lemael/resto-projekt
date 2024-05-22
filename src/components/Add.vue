<template>
  <Header />
  <h1>Hello {{ nameUser }} Add Restaurant</h1>

</template>
<script>
import Header from "./Header.vue"
export default {
  name: "AddPage",
  data() {
    return {
      nameUser: ""
    }
  },
  components: {
    Header
  },
  mounted() {
    let user = localStorage.getItem("user-info");

    this.user = JSON.parse(user);
    this.nameUser = this.user[0].name;

    if (!user) {
      this.$router.push({ name: "SignUp" })
    }
  }
}
</script>
<style scoped></style>