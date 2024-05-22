<template>
  <Header />
  <h1>Hello {{ nameUser }} Add Restaurant</h1>
  <form class="add">
    <input type="text" name="name" placeholder="Enter Name" v-model="restaurant.name"/>
    <input type="text" name="address" placeholder="Enter Address" v-model="restaurant.address"/>
    <input type="text" name="contact" placeholder="Enter Contact" v-model="restaurant.contact"/>
    <button type="button" v-on:click="addRestaurant">Add new Restaurant</button>
  </form>

</template>
<script>
import Header from "./Header.vue"
export default {
  name: "AddPage",
  data() {
    return {
      nameUser: "",
      restaurant: {
        name:"",
        address:"",
        contact:""
      }
    }
  },
  methods:{
    addRestaurant()
    {
      console.warn(this.restaurant);
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