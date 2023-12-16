<template>
    <div>
        <div v-for="(career, idx) in Careers" :key="idx" class="career-item">
            <component :is="career.component" />
        </div>
    </div>
</template>

<script>
import CareerNo1 from "../Career/CareerNo1.vue";
import CareerNo2 from "../Career/CareerNo2.vue";
import CareerNo3 from "../Career/CareerNo3.vue";
import CareerNo4 from "../Career/CareerNo4.vue";

export default {
    name: "CareerDatas",
    components: {
        CareerNo1,
        CareerNo2,
        CareerNo3,
        CareerNo4
    },
    data() {
        return {
            Careers: [
                {
                    tab: "Intern",
                    component: "CareerNo1"
                },
                {
                    tab: "Interest",
                    component: "CareerNo2"
                },
                {
                    tab: "Study",
                    component: "CareerNo3"
                },
                {
                    tab: "Blog",
                    component: "CareerNo4"
                }
            ],
            careerRefs: []
        };
    }
};
</script>

<style scoped>
/* ./CSS/Career.css 파일의 내용을 여기에 붙여넣으세요 */
</style>
