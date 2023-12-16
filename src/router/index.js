import { createWebHistory, createRouter } from "vue-router";
import ResumeContentVue from "@/components/Intro/ResumeContent.vue";
import ProjectCountsVue from "@/ProjectCounts.vue";
import ContestCountsVue from "@/ContestCounts.vue";
import CareerCountsVue from "@/CareerCounts.vue";

const routes = [
    {
        path: "/",
        component: ResumeContentVue,
    },
    {
        path: "/intro",
        component: ResumeContentVue,
    },
    {
        path: "/project",
        component: ProjectCountsVue,
    },
    {
        path: "/contest",
        component: ContestCountsVue,
    },

    {
        path: "/career",
        component: CareerCountsVue,
    },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;