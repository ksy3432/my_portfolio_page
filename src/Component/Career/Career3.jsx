import { Roll } from "react-reveal";
import "../CSS/Career.css";

const Career3 = () => {
  return (
    <Roll top>
      <div>
        <fieldset>
          <legend className="title_field">스터디 & 동아리</legend>
          <fieldset>
            <legend className="int_tit">스터디</legend>
            <table>
              <tr>
                <td>활동 시기</td>
                <td>스터디</td>
              </tr>
              <tr>
                <td style={{ paddingRight: "15px" }}>2023.3~2023.6</td>
                <td>23-1 파이썬 알고리즘 스터디</td>
              </tr>
              <tr>
                <td style={{ paddingRight: "15px" }}>
                  2023.9~2023.12
                </td>
                <td>
                  23-2 네트워크 스터디
                </td>
              </tr>
            </table>
          </fieldset>
          <fieldset>
            <legend className="int_tit">동아리</legend>
            <table>
              <tr>
                <td style={{ paddingRight: "15px" }}>활동 시기</td>
                <td>동아리</td>
              </tr>
              <tr>
                <td style={{ paddingRight: "15px" }}>2024.3 ~ 2025.3</td>
                <td>대학생 연합 개발 동아리</td>
              </tr>
            </table>
          </fieldset>
        </fieldset>
      </div >
    </Roll>
  );
};

export default Career3;