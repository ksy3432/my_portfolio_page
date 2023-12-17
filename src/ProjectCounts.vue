<template>
    <div>
        <div
            :style="{ height: '10px', width: `${scrollPercent}%`, backgroundColor: 'lightgrey', position: 'fixed', top: '0' }">
        </div>
        <div style="display: flex">
            <!-- <ProjectDatas /> -->
            <div style="margin-left: 220px">
                <div v-for="(project, idx) in Projects" :key="idx" ref="projectRefs" :id="'project-' + idx"
                    class="project-item" style="display: flex; margin-bottom: 50px">
                    <!-- {{ project.content }} -->
                    <component :is="project.component" />
                </div>
            </div>
            <div style="display: flex; flex-direction: column; position: fixed; margin-top: 50px; margin-left: 10px"
                id="indexbutton">
                <a v-for="(project, idx) in Projects" :key="idx" :href="'#project-' + idx" class="indexbuttoncss"
                    :style="{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: idx === index ? 'lightgrey' : 'black', color: idx === index ? 'black' : 'white' }">
                    {{ project.tab }}
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
// import ProjectDatas from './components/Data/ProjectDatas.vue';
import ProjectNo1 from "./components/Project/ProjectNo1.vue";
import ProjectNo2 from "./components/Project/ProjectNo2.vue";
import ProjectNo3 from "./components/Project/ProjectNo3.vue";
import ProjectNo4 from "./components/Project/ProjectNo4.vue";
import CommentCounts from './CommentCounts.vue';

export default {
    components: {
        ProjectNo1,
        ProjectNo2,
        ProjectNo3,
        ProjectNo4,
        CommentCounts
    },
    setup() {
        const index = ref(0);
        const scrollPercent = ref(0);
        const projectRefs = ref([]);

        onMounted(() => {
            const handleScroll = () => {
                const scrollPosition = window.scrollY + window.innerHeight / 2;
                const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
                const scrollPercentage = (window.scrollY / scrollHeight) * 100;
                scrollPercent.value = scrollPercentage;

                projectRefs.value.forEach((ref, idx) => {
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
            projectRefs,
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
        };
    },
};
</script>

<style>
img {
    width: 300px;
    height: 300px;
    margin-bottom: 10px;
}

@font-face {
    font-family: '양진체';
    src: url('https://cdn.jsdelivr.net/gh/supernovice-lab/font@0.9/yangjin.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'YClover-Bold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_231029@1.1/YClover-Bold.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
}

@font-face {
    font-family: 'iceSotong-Rg';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2307-2@1.0/iceSotong-Rg.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'HakgyoansimGaeulsopungB';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2307-2@1.0/HakgyoansimGaeulsopungB.woff2') format('woff2');
    font-weight: 700;
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

ul {
    margin-top: 0;
    margin-bottom: 0;
    margin-left: 0;
}

p {
    margin-top: 0px;
    margin-bottom: 0px;
}

#project_field {
    font-size: 35px;
    width: 800px;
    font-family: 'HakgyoansimGaeulsopungB';
}

.title_proj {
    font-family: 'KCCMurukmuruk';
    ;
    font-size: 25px;
}

#id_title {
    font-family: 'GoryeongStrawberry';
    font-size: 25px;
}

#projectswitchbutton {
    width: 130px;
    height: 30px;
    border-style: none;
    margin-left: 1px;
    border-radius: 5%;
}

#projectswitchbutton:hover {
    background-color: white;
    color: black;
    transition: background-color 0.5s, color 0.5s;
}

#projcontent {
    border-color: white;
    border-style: 2px double white;
}

.indexbuttoncss {
    width: 150px;
    height: 80px;
    font-size: 30px;
    font-family: DOSPilgiMedium;
    border-style: none;
    margin-top: 1px;
    border-radius: 5%;
    background-color: black;
    text-align: center;
}

h1 {
    font-family: 'YClover-Bold';
    margin-bottom: 10px;
    font-size: 40px;
}
</style>
