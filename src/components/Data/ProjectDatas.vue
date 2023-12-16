<template>
    <div>
        <div v-for="(project, idx) in Projects" :key="idx" class="project-item">
            <component :is="project.component" />
        </div>
    </div>
</template>

<script>
import ProjectNo1 from "../Project/ProjectNo1";
import ProjectNo2 from "../Project/ProjectNo2";
import ProjectNo3 from "../Project/ProjectNo3";
import ProjectNo4 from "../Project/ProjectNo4";

export default {
    name: "ProjectDatas",
    components: {
        ProjectNo1,
        ProjectNo2,
        ProjectNo3,
        ProjectNo4
    },
    data() {
        return {
            Projects: [
                {
                    tab: "project1",
                    component: "ProjectNo1"
                },
                {
                    tab: "project2",
                    component: "ProjectNo2"
                },
                {
                    tab: "project3",
                    component: "ProjectNo3"
                },
                {
                    tab: "project4",
                    component: "ProjectNo4"
                }
            ],
            ProjectRefs: []
        };
    }
}
</script>
