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
import axios from "axios";
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
    async addRestaurant()
    {
      console.warn(this.restaurant);
      const result = await axios.post("http://localhost:3000/restaurants", {
        name:this.restaurant.name,
        address: this.restaurant.address,
        contact:this.restaurant.contact
      });
      console.warn("resulut: ", result);
      if(result.status==201)
      {
        this.$router.push({name:"Home"})
      }
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