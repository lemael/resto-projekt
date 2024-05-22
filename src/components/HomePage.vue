<template>
    <Header />
    <h1>Hello {{ nameUser }} , Welcome on Home Page</h1>

</template>
<script>
import Header from "./Header.vue"
export default {
    name: "HomePage",
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
        // const infoUser =JSON.parse(user)

        console.warn(this.user)
        console.warn(this.user[0])
        console.warn(this.user[0].name)
        this.nameUser = this.user[0].name
        console.warn(this.nameUser)


        if (!user) {
            this.$router.push({ name: "SignUp" })
        }
    }
}
</script>
<style scoped></style>