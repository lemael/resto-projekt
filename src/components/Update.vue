<template>
  <Header />
  <h1>Hello {{ nameUser }} Update rastaurant</h1>
  <form class="add">
    <input type="text" name="name" placeholder="Enter Name" v-model="restaurant.name"/>
    <input type="text" name="address" placeholder="Enter Address" v-model="restaurant.address"/>
    <input type="text" name="contact" placeholder="Enter Contact" v-model="restaurant.contact"/>
    <button type="button" v-on:click="addRestaurant">Update new Restaurant</button>
  </form>
</template>
<script>
import Header from "./Header.vue"
import axios from "axios";
export default {
  name: "UpdatePage",
  data() {
    return {
      nameUser: "",
      restaurant: {
        id:"",
        name:"",
        address:"",
        contact:""
      }
    }
  },
  components: {
    Header
  },
  async mounted() {
    let user = localStorage.getItem("user-info");
    this.user = JSON.parse(user);
    this.nameUser = this.user[0].name;

    if (!user) {
      this.$router.push({ name: "SignUp" });
    }
    console.warn(this.$route.params.id)
    const result = await axios.get("http://localhost:3000/restaurants/"+this.$route.params.id);
    console.warn(result);   
    console.warn(result.data);
    this.restaurant=result.data; 
  }
}
</script>
<style scoped></style>