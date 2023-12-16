<template>
    <div>
        <div style="display: flex">
            <h1>나만의 메모앱 만들기</h1>
            <a href="https://github.com/ksy3432/myApp2" style="text-decoration-color: moccasin">
                <h1 style="color: moccasin">(진행 중)</h1>
            </a>
        </div>
        <img src="/image/notepad.PNG" alt="python" />
        <fieldset id="project_field">
            <legend id="id_title">프로젝트 개요</legend>
            <fieldset id="project_field" style="font-size: 1em; margin-left: 0">
                <legend class="title_proj">기능</legend>
                <li>기본적인 메모앱 기능(일별 할 일 적기, 중요도 체크) 등</li>
                <li>기존의 달력 (Google Calendar 등)과 동기화 가능</li>
                <li>처리되지 않은 일은 자동으로 미리알림 설정</li>
            </fieldset>
            <fieldset id="project_field" style="font-size: 1em; margin-left: 0">
                <legend class="title_proj">설명</legend>
                <p>나의 취향에 맞춘 나만의 메모앱을 만드는 것이 목적</p>
                <p>React Native를 이용하여 Android와 iOS 모두 이용 가능</p>
                <p>Firebase의 호스팅을 사용하여 배포할 예정</p>
            </fieldset>
            <fieldset id="project_field" style="font-size: 1em; margin-left: 0">
                <legend class="title_proj">사용된 기술</legend>
                <p>프론트엔드: React Native</p>
                <p>백엔드: Firebase, Node.js</p>
                <p>DB: Firestore (Firebase에서 지원되는 DB)</p>
            </fieldset>
        </fieldset>
    </div>
</template>

<script>
export default {
    name: "ProjectNo3"
};
</script>

<style scoped>
/* ../CSS/Project.css 파일의 내용을 여기에 붙여넣으세요 */
</style>
