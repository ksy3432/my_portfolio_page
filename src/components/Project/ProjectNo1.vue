<template>
    <div>
        <div id="projcontent" style="margin-bottom: 0">
            <h1 style="margin-bottom: 0">React와 Firebase를 이용한 트위터 클론코딩</h1>
            <a href="https://github.com/ksy3432/nwitter" style="text-decoration-color: grey">
                <h1 style="color: grey; margin-top: 0">(완료)</h1>
            </a>
        </div>
        <div>

        </div>
        <a href="https://nwitter-b14ca.web.app/#/">
            <img src="/image/twitter_cloning.PNG" alt="react" />
        </a>
        <fieldset id="project_field">
            <legend id="id_title">프로젝트 개요</legend>
            <ul style="padding-left: 0">
                <fieldset id="project_field" style="font-size: 1em; margin-left: 0">
                    <legend class="title_proj">기능</legend>
                    <li>사이트에 메시지, 사진 전송</li>
                    <li>회원가입 및 로그인 기능, 소셜 로그인 지원</li>
                    <li>로그인한 계정이 올린 메시지, 사진 삭제</li>
                    <li>로그인한 계정의 프로필 사진 변경 및 닉네임 변경</li>
                </fieldset>

                <fieldset id="project_field" style="font-size: 1em; margin-left: 0">
                    <legend class="title_proj">설명</legend>
                    <p>트위터의 기본적인 기능을 구현</p>
                    <p>nomadcoder의 강의를 참고하여 만듦</p>
                    <p>Firebase hosting을 이용하여 배포하여 완성된 프로젝트를 웹사이트로 접속 가능</p>
                </fieldset>

                <fieldset id="project_field" style="font-size: 1em; margin-left: 0">
                    <legend class="title_proj">사용된 기술</legend>
                    <p>프론트엔드 : React</p>
                    <p>백엔드 : Firebase로 대체</p>
                    <p>데이터베이스 : Firestore(Firebase의 DB)</p>
                </fieldset>
            </ul>
        </fieldset>
    </div>
</template>

<script>
export default {
    name: "ProjectNo1"
};
</script>

<style scoped>
/* ../CSS/Project.css 파일의 내용을 여기에 붙여넣으세요 */
</style>
