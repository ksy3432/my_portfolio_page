<!-- <template>
    <div>
        <CareerDatas />
    </div>
</template>

<script>
import CareerDatas from './components/Data/CareerDatas.vue';
export default {
    components: {
        CareerDatas
    },
    data() {
        return {
            careerDatas: []
        };
    },
    mounted() {
        this.getCareerDatas();
    },
    methods: {
        getCareerDatas() {
            this.careerDatas = CareerDatas;
        }
    }
};
</script> -->
<template>
    <div>
        <div
            :style="{ height: '10px', width: `${scrollPercent}%`, backgroundColor: 'lightgrey', position: 'fixed', top: '0' }">
        </div>
        <div style="display: flex">
            <!-- <careerDatas /> -->
            <div style="margin-left: 220px">
                <div v-for="(career, idx) in Careers" :key="idx" ref="careerRefs" :id="'career-' + idx" class="career-item"
                    style="display: flex; margin-bottom: 50px">
                    <!-- {{ career.content }} -->
                    <component :is="career.component" />
                </div>
            </div>
            <div style="display: flex; flex-direction: column; position: fixed; margin-top: 50px; margin-left: 10px"
                id="indexbutton">
                <a v-for="(career, idx) in Careers" :key="idx" :href="'#career-' + idx" class="indexbuttoncss"
                    :style="{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: idx === index ? 'lightgrey' : 'black', color: idx === index ? 'black' : 'white' }">
                    {{ career.tab }}
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
// import careerDatas from './components/Data/careerDatas.vue';
import CareerNo1 from "./components/Career/CareerNo1.vue";
import CareerNo2 from "./components/Career/CareerNo2.vue";
import CareerNo3 from "./components/Career/CareerNo3.vue";
import CareerNo4 from "./components/Career/CareerNo4.vue";
import CommentCounts from './CommentCounts.vue';

export default {
    components: {
        CareerNo1,
        CareerNo2,
        CareerNo3,
        CareerNo4,
        CommentCounts
    },
    setup() {
        const index = ref(0);
        const scrollPercent = ref(0);
        const careerRefs = ref([]);

        onMounted(() => {
            const handleScroll = () => {
                const scrollPosition = window.scrollY + window.innerHeight / 2;
                const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
                const scrollPercentage = (window.scrollY / scrollHeight) * 100;
                scrollPercent.value = scrollPercentage;

                careerRefs.value.forEach((ref, idx) => {
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
            careerRefs,
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
            CareerRefs: []
        };
    },
};
</script>