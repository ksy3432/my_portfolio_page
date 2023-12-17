<template>
    <div>
        <div
            :style="{ height: '10px', width: `${scrollPercent}%`, backgroundColor: 'lightgrey', position: 'fixed', top: '0' }">
        </div>
        <div style="display: flex">
            <!-- <contestDatas /> -->
            <div style="margin-left: 220px">
                <div v-for="(contest, idx) in Contests" :key="idx" ref="contestRefs" :id="'contest-' + idx"
                    class="contest-item" style="display: flex; margin-bottom: 50px">
                    <!-- {{ contest.content }} -->
                    <component :is="contest.component" />
                </div>
            </div>
            <div style="display: flex; flex-direction: column; position: fixed; margin-top: 50px; margin-left: 10px"
                id="indexbutton">
                <a v-for="(contest, idx) in  Contests " :key="idx" :href="'#contest-' + idx" class="indexbuttoncss" :style="{
                    display: 'flex', justifyContent: 'center', alignItems: 'center',
                    backgroundColor: idx === index ? 'lightgrey' : 'black', color: idx === index ? 'black' : 'white'
                }">
                    {{ contest.tab }}
                </a>
            </div>
        </div>
        <div style="margin-left: 220px">
            <CommentCounts />

        </div>
    </div>
</template>

<script>
import { onMounted, ref } from 'vue';
// import contestDatas from './components/Data/contestDatas.vue';
import ContestNo1 from "./components/Contest/ContestNo1.vue";
import ContestNo2 from "./components/Contest/ContestNo2.vue";
import ContestNo3 from "./components/Contest/ContestNo3.vue";
import ContestNo4 from "./components/Contest/ContestNo4.vue";
import ContestNo5 from './components/Contest/ContestNo5.vue';
import CommentCounts from './CommentCounts.vue';

export default {
    components: {
        ContestNo1,
        ContestNo2,
        ContestNo3,
        ContestNo4,
        ContestNo5,
        CommentCounts
    },
    setup() {
        const index = ref(0);
        const scrollPercent = ref(0);
        const contestRefs = ref([]);

        onMounted(() => {
            const handleScroll = () => {
                const scrollPosition = window.scrollY + window.innerHeight / 2;
                const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
                const scrollPercentage = (window.scrollY / scrollHeight) * 100;
                scrollPercent.value = scrollPercentage;

                contestRefs.value.forEach((ref, idx) => {
                    if (ref.offsetTop <= scrollPosition && ref.offsetTop + ref.offsetHeight > scrollPosition) {
                        index.value = idx;
                    }
                });
            };

            window.addEventListener('scroll', handleScroll);

            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        });

        return {
            index,
            scrollPercent,
            contestRefs,
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
    },
};
</script>
