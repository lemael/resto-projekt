<template>
    <Header />
    <h1>Hello {{ nameUser }} , Welcome on Home Page</h1>
    <div class="container">
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Contact</th>
                    <th>Address</th>
                </tr>
            </thead>

            <tr v-for="item in restaurants" :key="item.id">
                <td> {{ item.id }}</td>


                <td> {{ item.name }}</td>


                <td> {{ item.contact }}</td>

                <td> {{ item.address }}</td>
            </tr>

        </table>
    </div>
</template>
<script>
import Header from "./Header.vue"
import axios from "axios";

export default {
    name: "HomePage",
    data() {
        return {
            nameUser: "",
            restaurants: []
        }
    },
    components: {
        Header
    },


    async mounted() {
        let user = localStorage.getItem("user-info");
        this.user = JSON.parse(user);
        // const infoUser =JSON.parse(user)

        console.warn(this.user)
        console.warn(this.user[0])
        console.warn(this.user[0].name)
        this.nameUser = this.user[0].name
        console.warn(this.nameUser)


        if (!user) {
            this.$router.push({ name: "SignUp" })
        }
        let result = await axios.get("http://localhost:3000/restaurants");
        console.warn(result);
        this.restaurants = result.data;
        console.warn(this.restaurants);

        // console.warn(result)
        //this.restaurants=result.data;

        //console.warn(this.restaurants);
    }
}
</script>
<style scoped>
.container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

table {
    width: 800px;
    border-collapse: collapse;
    overflow: hidden;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}

th {
    padding: 15px;
    background-color: rgba(255, 255, 255, 0.2);
    color: #ffffff;
    text-align: center;
}

thead {
    th {
        background-color: #55608f;
    }
}


tr {
    &:hover {
        background-color: rgba(255, 255, 255, 0.3);
    }
}

td {
    padding: 15px;
    position: relative;


    &:before {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        top: -9999px;
        bottom: -9999px;
        background-color: rgba(255, 255, 255, 0.2);
        z-index: -1;
        height: 10px;
    }
}
</style>