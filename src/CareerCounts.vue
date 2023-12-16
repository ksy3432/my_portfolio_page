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

<style>
@font-face {
    font-family: 'GmarketSansMedium';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'GoryeongStrawberry';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2304-01@1.0/GoryeongStrawberry.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'KCCMurukmuruk';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2302@1.0/KCCMurukmuruk.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'HakgyoansimGaeulsopungB';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2307-2@1.0/HakgyoansimGaeulsopungB.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
}

#wrapper_field {
    font-size: 1.2em;
}

.i1 {
    padding-right: 10px;
}

.title_field {
    font-size: 35px;
    font-style: italic;
    font-family: 'GoryeongStrawberry';
}

fieldset {
    width: 800px;
    margin-left: 0px;
    font-size: 30px;
    font-family: 'HakgyoansimGaeulsopungB';
}

#button_career {
    width: 160px;
    height: 40px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
    background-color: black;
    border-style: none;
    margin-left: 2px;
    border-radius: 5%;
}

#button_career:hover {
    background-color: white;
    color: black;
    transition: background-color 0.3s, color 0.3s;
}

.int_tit {
    font-family: 'KCCMurukmuruk';
}
</style>