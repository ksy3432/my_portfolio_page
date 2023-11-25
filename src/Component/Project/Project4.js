import React from "react";

const Project4 = () => {
  return (
    <div>
      <h1 style={{ display: "flex" }}>나만의 개인 서버 만들기<div style={{ color: "moccasin" }}>(진행 중)</div></h1>
      <img src="/image/Linux.PNG" alt="Linux" style={{ width: "500px" }} />
      <fieldset id="project_field">
        <legend>프로젝트 개요</legend>
        비용걱정과 보안 걱정없이 마음대로 사용할 수 있는 리눅스 개인 서버를 구축하기 위함<br />
        가지고있는 안드로이드 폰은 안드로이드 버전이 너무 낮은 관계로 루팅하여 진행<br />
        LinuxDeploy와 Terminus를 이용하여 리눅스 실행에 성공<br />
        배터리 상태와 속도 이슈로 다른 기기를 몰색 중<br />
        일단 서버를 구축하고 나면 웹페이지 배포와 파일 보관등으로 이용할 예정
      </fieldset>
    </div>
  );
};

export default Project4;
