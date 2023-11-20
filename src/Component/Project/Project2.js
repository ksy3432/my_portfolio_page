import { Link } from "react-router-dom";

const Project2 = () => {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <h1>React와 Firebase를 이용한 채팅 프로그램 만들기</h1>
        <Link to={"https://github.com/ksy3432/chatteringbox"}>
          <h1>(완료)</h1>
        </Link>
      </div>
      <img src="" alt="react" />
      <fieldset id="project_field">
        <legend>프로젝트 개요</legend>
        <fieldset id="project_field" style={{ fontSize: "1em", marginLeft: 0 }}>
          <legend>기능</legend>
          1. 상대에게 1:1로 대화방 생성 및 메시지,사진 전송<br />
          2. 회원가입 및 로그인 기능<br />
          3. 로그인한 계정이 올린 메시지,사진 삭제<br />
          4. 로그인한 계정의 프로필 사진 변경 및 닉네임 변경<br />
          5. 상대의 닉네임으로 검색 가능<br />
          6. 지난 대화 확인 가능<br />
          7. 보낸 시간 확인 가능<br />
        </fieldset>
        <fieldset id="project_field" style={{ fontSize: "1em", marginLeft: 0 }}>
          <legend>설명</legend>
          카카오톡과 같이 1 대 1로 채팅할 수 있는 웹사이트를 제작 <br />
          기본적인 기능 구현 <br />
          카카오톡과 비슷하게 자신이 보낸 내용과 상대가 보낸 메시지 색이 다르게 표시됨 <br />
          Firebase의 호스팅을 사용하여 실제로 인터넷상에 배포함 <br />
        </fieldset>
        <fieldset id="project_field" style={{ fontSize: "1em", marginLeft: 0 }}>
          <legend>사용된 기술</legend>
          프론트엔드 : React <br />
          백엔드 : Firebase <br />
          DB : Firestore(Firebase에서 지원되는 DB) <br />
        </fieldset>
      </fieldset>
    </div>
  );
};

export default Project2;
