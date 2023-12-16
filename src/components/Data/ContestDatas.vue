<template>
    <div>
        <div v-for="(contest, idx) in Contests" :key="idx" class="contest-item">
            <component :is="contest.component" />
        </div>
    </div>
</template>

<script>
import ContestNo1 from "../Contest/ContestNo1.vue";
import ContestNo2 from "../Contest/ContestNo2.vue";
import ContestNo3 from "../Contest/ContestNo3.vue";
import ContestNo4 from "../Contest/ContestNo4.vue";
import ContestNo5 from "../Contest/ContestNo5.vue";

export default {
    name: "ContestDatas",
    components: {
        ContestNo1,
        ContestNo2,
        ContestNo3,
        ContestNo4,
        ContestNo5,
    },
    data() {
        return {
            Contests: [
                {
                    tab: "Contest1",
                    component: "ContestNo1"
                },
                {
                    tab: "Contest2",
                    component: "ContestNo2"
                },
                {
                    tab: "Contest3",
                    component: "ContestNo3"
                },
                {
                    tab: "Contest4",
                    component: "ContestNo4"
                },
                {
                    tab: "Contest5",
                    component: "ContestNo5"
                }
            ],
            ContestRefs: []
        };
    }
}
</script>