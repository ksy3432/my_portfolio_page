// import "../CSS/Contest.css";

const Contest3 = () => {
  return (
    <div>
      <h1>
        2023 제 23회 ICPC 대학생 프로그래밍 경시대회</h1>
      <img src="/image/contest3.JPG" alt="react" />
      <fieldset>
        <legend id="con_title">공모전 개요</legend>
        <ul>
          <li className="con_con">주최 기관 : 과학기술정보통신부</li>
          <li className="con_con">주관 기관 : NIA 한국지능정보사회진흥원</li>
          <li className="con_con">접수 기간 : 2023.9.26 ~ 2023.10.13</li>
          <li className="con_con">대상 : 대학생,대학원생</li>
          <li className="con_con">국내 대학(원)생들이 3인 1팀을 이루어 제한시간 내에 주어진 프로그래밍 문제를 풀어 알고리즘을 작성한다.</li>
        </ul>
      </fieldset>
    </div>
  );
};

export default Contest3;