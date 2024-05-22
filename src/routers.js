import HomePage from "./components/HomePage.vue";
import SignUp from "./components/SignUp.vue";
import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from "./components/LoginPage.vue"
import Add from "./components/Add.vue"
import Update from "./components/Update.vue"
const routes = [
    {
        name: "Home",
        component: HomePage,
        path: "/"
    },
    {
        name: "SignUp",
        component: SignUp,
        path: "/sign-up"
    },
    {
        name: "Login",
        component: LoginPage,
        path: "/login-page"
    },
    {
        name: "Add",
        component: Add,
        path: "/add"
    },
    {
        name: "Update",
        component: Update,
        path: "/update"
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;