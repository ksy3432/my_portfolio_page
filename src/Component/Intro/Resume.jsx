// import '../CSS/Resume.css';
import { Link } from 'react-router-dom'

const Resume = () => {
	return (
		<div id="resume">
			<table>
				<tr>
					<td>
						<em>기초 자료</em>
						<table>
							<tr>
								<td rowspan="7" >사진</td>
							</tr>
							<tr>
								<td bgcolor="#e3fcff">이름</td>
								<td colspan="3">김세연</td>
							</tr>
							<tr>
								<td bgcolor="#e3fcff">성별</td>
								<td colspan="3">여자</td>
							</tr>
							<tr>
								<td bgcolor="#e3fcff">생년월일</td>
								<td colspan="3">2002.05.17(만 21세)</td>
							</tr>
							<tr>
								<td bgcolor="#e3fcff">최종학력</td>
								<td colspan="3">가천대학교 컴퓨터공학부(컴퓨터공학전공)</td>
							</tr>
							<tr>
								<td bgcolor="#e3fcff">블로그 주소</td>
								<Link to={"https://ksy3432.vercel.app/"}>https://ksy3432.vercel.app/</Link>							</tr>
							<tr>
								<td bgcolor="#e3fcff">github 주소</td>
								<Link to={"https://github.com/ksy3432"}>https://github.com/ksy3432</Link>
							</tr>
						</table>
					</td>
					<td>
						<em>경력 및 인턴</em>
						<table>
							<tr>
								<th bgcolor="#e3fcff">기간</th>
								<th bgcolor="#e3fcff">관련</th>
							</tr>
							<tr>
								<td>2021~2022</td> <td>개인 프로젝트</td>
							</tr>
							<tr>
								<td>2023-3~2023.6</td> <td>파이썬 알고리즘 스터디</td>
							</tr>
							<tr>
								<td>2023.6~2023.10</td> <td>네트워크 관리사 자격증 스터디</td>
							</tr>
							<tr>
								<td>2023.6~2023.7</td> <td>리액트 개인프로젝트</td>
							</tr>
							<tr>
								<td>2024.3~2024.9</td> <td>가천대학교 산업 인턴</td>
							</tr>
							<tr>
								<td>2024.1~2024.6</td> <td>대학생 연합동아리</td>
							</tr>
							<tr>
								<td>2025.9~2026.1</td> <td>싸피</td>
							</tr>
						</table>
					</td>
					<td>
						<em>공모전</em>
						<table>
							<tr><th bgcolor="#e3fcff">공모전</th>
								<th bgcolor="#e3fcff">관련 분야</th></tr>
							<tr>
								<td>[앨리스코드챌린지]AI 플랫폼 백엔드 개발 콘테스트</td>
								<td>서버,백엔드</td>
							</tr>
							<tr>
								<td>구름톤 in JEJU 8기</td>
								<td>프론트,백엔드,DB</td>

							</tr>
							<tr>
								<td>2023 제 23회 ICPC 대학생 프로그래밍 경시대회</td>
								<td>알고리즘</td>
							</tr>
							<tr>
								<td>웹 2.0/3.0 서비스공모 2023 청년빌더 오디션</td>
								<td>프론트,백엔드,풀스텍</td>
							</tr>
							<tr>
								<td>2023 코드프레소 웹 개발 콘테스트</td>
								<td>프론트,백엔드,풀스텍</td>
							</tr>
						</table>
					</td>
				</tr>
				<tr>
					<td>
						<em>자격증</em>
						<table>
							<tr>
								<th bgcolor="#e3fcff">자격증</th>
								<th bgcolor="#e3fcff">분야</th>
								<th bgcolor="#e3fcff">시기</th>
							</tr>
							<tr>
								<td>리눅스 마스터 2급</td> <td>서버,네트워크</td> <td>2023-1</td>
							</tr>
							<tr>
								<td>네트워크 관리사 2급</td> <td>서버,네트워크</td> <td>2023-2</td>
							</tr>
							<tr>
								<td>SQLD</td>	<td>데이터베이스</td> <td>2021-2</td>
							</tr>
							<tr>
								<td>정보처리기사 </td> <td>IT 기초지식</td> <td>2025-1</td>
							</tr>
							<tr>
								<td>AWS </td> <td>클라우드</td> <td>2025-2</td>
							</tr>
						</table>
					</td>
					<td>
						<em>관심사</em>
						<table>
							<tr>
								<td>사진</td>
							</tr>
							<tr>
								<td>분야별 활동 정리</td>
							</tr>
							<tr>웹 </tr>
							<tr>앱 </tr>
							<tr>AI </tr>
							<tr>서버</tr>
							<tr>DB</tr>
						</table>
					</td>
					<td>
						<em>Project</em>
						<table>
							<tr><th bgcolor="#e3fcff">프로젝트명</th>
								<th bgcolor="#e3fcff">진행기간</th></tr>
							<tr><td>트위터 클론코딩</td><td>2023 여름방학</td></tr>
							<tr><td>채팅 프로그램 만들기</td><td>2023 여름방학</td></tr>
							<tr><td>파이썬 알고리즘 풀이</td>2023 1학기</tr>
							<tr><td>나만의 메모앱 만들기</td>2023 2학기~</tr>
							<tr><td>오래된 안드로이드폰을 이용하여 개인 서버 만들기</td>2023 1학기</tr>
						</table>
					</td>
				</tr>
			</table>
		</div>
	);
};

export default Resume;