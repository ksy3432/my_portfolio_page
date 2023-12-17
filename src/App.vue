<template>
  <div>
    <header id="title_name" style="display: flex; margin-top: 20px; margin-left: 40px">
      <div id="title">
        KSY'S
        <div id="title_left">
          Portfolio
        </div>
      </div>
      <nav class="category" style="display: flex">
        <router-link to='/intro'>나의 소개</router-link> <br />
        <router-link to="/project">프로젝트</router-link> <br />
        <router-link to="/contest">공 모 전</router-link> <br />
        <router-link to="/career">나의 경력</router-link> <br />
        <div id="loginstyle">
          <AuthServe />
        </div>
      </nav>
      <br />
    </header>
    <div id="container" style="display: flex">
      <main>
        <router-view />
        <!-- <router-view  :component="currentComponent" /> -->
      </main>
    </div>
    <footer style="width: 1300px; text-align: center; margin-bottom: 50px">
      <i style="font-size: 25px; margin-left: 300px">
        Copyright 2023. seyeonkim_ksy3432 all rights reserved.
        <br />
      </i>
    </footer>
  </div>
</template>

<script>
import AuthServe from '@/components/Auth/AuthServe.vue';
import { createWebHistory, createRouter } from 'vue-router';
import ResumeContent from '@/components/Intro/ResumeContent.vue';
import ProjectCountsVue from '@/ProjectCounts.vue';
import ContestCountsVue from '@/ContestCounts.vue';
import CareerCountsVue from '@/CareerCounts.vue';
// import ProjectDatas from '@/components/Data/ProjectDatas.vue';
// import ContestDatas from '@/components/Data/ContestDatas.vue';
// import CareerDatas from '@/components/Data/CareerDatas.vue';

const routes = [
  {
    path: '/',
    component: ResumeContent,
  },
  {
    path: '/intro',
    component: ResumeContent,
  },
  {
    path: '/project',
    component: ProjectCountsVue,
  },
  {
    path: '/contest',
    component: ContestCountsVue,
  },
  {
    path: '/career',
    component: CareerCountsVue,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default {
  components: {
    AuthServe,
  },
  router,

};
</script>

<style>
body {
  background-color: rgba(0, 0, 0, 0.805);
}

#loginstyle {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 30px;
  margin-left: 30px;
  margin-top: 50px;
}

@font-face {
  font-family: 'Cafe24Moyamoya-Face-v1.0';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_231029@1.1/Cafe24Moyamoya-Face-v1.0.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'DOSPilgiMedium';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2304-2@1.0/DOSPilgiMedium.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
}

#my_image {
  width: 10px !important;
}

#title_name {
  font-size: 50px;
  font-family: 'Cafe24Moyamoya-Face-v1.0';
  height: 150px;
}

#title_left {
  font-size: 60px;
  font-family: 'Cafe24Moyamoya-Face-v1.0';
  margin-left: 40px;
}



.category {
  font-size: 35px;
  width: 1000px;
  height: 40px;
  margin-left: 20px;
  font-family: DOSPilgiMedium;
}

.category a {
  text-decoration: none;
  color: white;
  padding: 10px;
  /* background-color: #000; */
  border-radius: 5px;
  /* transition: background-color 0.3s, color 0.3s; */
  transition: color 0.3s;
  text-align: center;
  margin-top: 40px;
  width: 180px;
  height: 30px;
}

.category a:hover {
  /* background-color: white; */
  color: lightslategray;
}

main {
  margin-left: 150px;
  margin-top: 20px;
}
</style>

