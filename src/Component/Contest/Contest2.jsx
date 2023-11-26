// import "../CSS/Contest.css";

const Contest2 = () => {
  return (
    <div>
      <h1>구름톤 in JEJU 8기</h1>
      <img src="/image/contest2.JPG" alt="react" />
      <fieldset>
        <legend id="con_title">공모전 개요</legend>
        <ul>
          <li className="con_con">주최 기관 : 카카오 클라우드 9rum & 네이버 goorm</li>
          <li className="con_con">접수 기간 : 2023.11.2 ~ 2023.11.15</li>
          <li className="con_con">대상 : 20세 이상의 대학생,디자이너,개발자,일반인 등 해커톤에 관심있는 사람</li>
          <li className="con_con">3박 4일 합숙으로 진행되는 제주도 해커톤</li>
          <li className="con_con">해커톤과 기술 교육 프로그램(해커톤) 병행</li>
        </ul>
      </fieldset>
    </div>
  );
};

export default Contest2;