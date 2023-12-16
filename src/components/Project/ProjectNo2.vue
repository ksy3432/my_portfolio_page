<template>
    <div>
        <div style="display: flex; margin-bottom: 10px">
            <h1 style="margin-bottom: 0">React와 Firebase를 이용한 채팅 웹 만들기</h1>
            <a href="https://github.com/ksy3432/chatteringbox" style="text-decoration-color: grey"></a>
        </div>
        <h1 style="color: grey; margin-top: 0">(완료)</h1>

        <img src="/image/chatteringbox.PNG" alt="react" style="width: 500px" />
        <fieldset id="project_field">
            <legend id="id_title">프로젝트 개요</legend>
            <fieldset id="project_field" style="font-size: 1em; margin-left: 0">
                <legend class="title_proj">기능</legend>
                <li>상대에게 1:1로 대화방 생성 및 메시지, 사진 전송</li>
                <li>회원가입 및 로그인 기능</li>
                <li>로그인한 계정이 올린 메시지, 사진 삭제</li>
                <li>로그인한 계정의 프로필 사진 변경 및 닉네임 변경</li>
                <li>상대의 닉네임으로 검색 가능</li>
                <li>지난 대화 확인 가능</li>
                <li>보낸 시간 확인 가능</li>
            </fieldset>
            <fieldset id="project_field" style="font-size: 1em; margin-left: 0">
                <legend class="title_proj">설명</legend>
                <p>카카오톡과 같이 1 대 1로 채팅할 수 있는 웹사이트를 제작</p>
                <p>기본적인 기능 구현</p>
                <p>카카오톡과 비슷하게 자신이 보낸 내용과 상대가 보낸 메시지 색이 다르게 표시됨</p>
                <p>Firebase의 호스팅을 사용하여 실제로 인터넷상에 배포함</p>
            </fieldset>
            <fieldset id="project_field" style="font-size: 1em; margin-left: 0">
                <legend class="title_proj">사용된 기술</legend>
                <p>프론트엔드 : React</p>
                <p>백엔드 : Firebase</p>
                <p>DB : Firestore(Firebase에서 지원되는 DB)</p>
            </fieldset>
        </fieldset>
    </div>
</template>

<script>
export default {
    name: "ProjectNo2"
};
</script>

<style scoped>
/* ../CSS/Project.css 파일의 내용을 여기에 붙여넣으세요 */
</style>
