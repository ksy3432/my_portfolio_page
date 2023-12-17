import '../CSS/Resume.css';
import { Link } from 'react-router-dom'
import { Fade, Flip, Rotate, Zoom, Roll, LightSpeed, Bounce } from 'react-reveal';

const Resume = () => {
	return (
		<div className='resume'>
			<table id='entityTable' style={{ marginBottom: "50px" }}>
				<br />
				<br />
				<Fade left>
					<tr>
						<td colSpan={3} style={{ paddingLeft: "200px", paddingBottom: "30px" }} className='introme'>
							안녕하세요!<br />
						</td>
						<br />
						<br />
					</tr>
				</Fade>
				<Fade right>
					<tr>
						<td colSpan={4} style={{ paddingLeft: "200px", paddingBottom: "30px" }} className='introme'>
							저는 개발자 김세연입니다!
						</td>
						<br />
						<br />
						<br />
						<br />
					</tr>
				</Fade>
				<Flip bottom>
					<tr>
						<td colSpan={5} style={{ paddingLeft: "200px" }} className='introme'>
							간단하게 저에 대해 소개하고자 합니다
							<br />
							<br />
							<br />
						</td>
					</tr>
				</Flip>
				<Flip top>
					<tr>
						<td id='basicheight'>
							<fieldset className='mainfield' id='basic'>
								<legend>
									<em className='restit'>Bascic info</em>
								</legend>
								<table id='basiccontent'>
									<tr>
										<td>이름</td>
										<td colspan="3">김세연</td>
									</tr>
									<tr>
										<td>성별</td>
										<td colspan="3">여자</td>
									</tr>
									<tr>
										<td>생년월일</td>
										<td colspan="3">2002.05.17(2023기준 만 21세)</td>
									</tr>
									<tr>
										<td>최종학력</td>
										<td colspan="3">가천대학교 컴퓨터공학부(컴퓨터공학전공)</td>
									</tr>
									<tr>
										<td>블로그 주소</td>
										<Link to={"https:ksy3432.vercel.app/"} style={{ color: 'white' }}>https:ksy3432.vercel.app/</Link>							</tr>
									<tr>
										<td>github 주소</td>
										<Link to={"https:github.com/ksy3432"} style={{ color: 'white' }}>https:github.com/ksy3432</Link>
									</tr>
								</table>
							</fieldset>
						</td>
					</tr>
				</Flip>
				<tr>
					<td colSpan={5} style={{ paddingLeft: "200px" }} className='introme'>
						<Flip bottom>
							제 기본적인 정보를 나타내는 표입니다.<br></br>
						</Flip>
						<Rotate top left>
							<br />링크를 클릭하면 이동할 수 있습니다!
						</Rotate>
					</td>
				</tr>
				<LightSpeed left>

					<tr>
						<td style={{ paddingLeft: "15px", paddingRight: "30px" }} colSpan={2} className='introme'>
							<Zoom left>
								<p>
									제가 진행한 <br></br>
									프로젝트 목록입니다.<br></br><br />
									더 자세한 내용은 <br />위의 '프로젝트'탭에서 확인하실 수 있습니다.
								</p>
							</Zoom>

						</td>
						<td id='fourth'>
							<fieldset className='mainfield' id='proj'>
								<legend>
									<em className='restit'>Project</em>
								</legend>
								<table style={{ height: "350px" }}>
									<tr><th className='p1'>프로젝트명</th>
										<th className='p2'>진행기간</th></tr>
									<tr><td className='p1'>트위터 클론코딩</td><td className='p2'>2023 여름방학</td></tr>
									<tr><td className='p1'>채팅 프로그램 만들기</td><td className='p2'>2023 여름방학</td></tr>
									<tr><td className='p1'>파이썬 알고리즘 풀이</td><td className='p2'>2023 1학기</td></tr>
									<tr><td className='p1'>나만의 메모앱 만들기</td><td className='p2'>2023 2학기~</td></tr>
									<tr><td className='p1' style={{ width: "280px" }}>오래된 안드로이드폰을 이용하여 개인 서버 만들기</td><td className='p2'>2023 1학기</td></tr>
									<tr><td className='p1'>개발블로그 만들기</td><td className='p2'>2023 1학기</td></tr>

								</table>
							</fieldset>
						</td>
					</tr>

				</LightSpeed>
				<Rotate top left>
					<tr>
						<td colSpan={3}>
							<fieldset className='mainfield' id='intern'>
								<legend>
									<em className='restit'>Intern & experience</em>
								</legend>
								<table id='interncontent'>
									<tr>
										<th className='vector' >기간</th>
										<th>관련</th>
									</tr>
									<tr>
										<td className='vector'>2021~2022</td> <td>  개인 프로젝트</td>
									</tr>
									<tr>
										<td className='vector'>2023-3~2023.6</td> <td>  파이썬 알고리즘 스터디</td>
									</tr>
									<tr>
										<td className='vector'>2023.6~2023.10</td> <td>  네트워크 관리사 자격증 스터디</td>
									</tr>
									<tr>
										<td className='vector'>2023.6~2023.7</td> <td>  리액트 개인프로젝트</td>
									</tr>
									<tr>
										<td className='vector'>2024.3~2024.9</td> <td>  가천대학교 산업 인턴</td>
									</tr>
									<tr>
										<td className='vector'>2024.1~2024.6</td> <td>  대학생 연합동아리</td>
									</tr>
									<tr>
										<td className='vector'>2025.1~2026.1</td> <td>  싸피</td>
									</tr>
								</table>
							</fieldset>
						</td>
						<Bounce left>
							<td colSpan={2} style={{ paddingLeft: "100px" }} className='introme'>대학 재학 중에 <br />활동한 인턴,동아리, 스터디 등 전공 관련 활동입니다<br></br><br /> 더 자세한 내용은 '나의 진로'탭에서 확인하실 수 있습니다</td>
						</Bounce>
					</tr>
				</Rotate>
				<Zoom top>
					<tr>
						<td id='third'>
							<fieldset className='mainfield' id='contest_intro'>
								<legend>
									<em className='restit'>Contsest</em>
								</legend>
								<table style={{ height: "350px" }}>
									<tr><th className='c1'>공모전</th>
										<th>관련 분야</th></tr>
									<tr>
										<td className='c1'>[앨리스코드챌린지]AI 플랫폼 백엔드 개발 콘테스트</td>
										<td>서버,백엔드</td>
									</tr>
									<tr>
										<td className='c1'>구름톤 in JEJU 8기</td>
										<td>프론트,백엔드,DB</td>

									</tr>
									<tr>
										<td className='c1'>2023 제 23회 ICPC 대학생 프로그래밍 경시대회</td>
										<td>알고리즘</td>
									</tr>
									<tr>
										<td className='c1'>웹 2.0/3.0 서비스공모 2023 청년빌더 오디션</td>
										<td>프론트,백엔드,풀스텍</td>
									</tr>
									<tr>
										<td className='c1'>2023 코드프레소 웹 개발 콘테스트</td>
										<td>프론트,백엔드,풀스텍</td>
									</tr>
								</table>
							</fieldset>
						</td>
					</tr>
					<tr>
						<td colSpan={5} style={{ paddingLeft: "200px" }} className='introme'>
							<br />
							<br />
							대학 재학 중에 참여한 공모전입니다
							<br />
							<br />
							더 자세한 내용은 '공모전'탭에서 확인하실 수 있습니다
						</td>
					</tr>
				</Zoom>
				<Roll right>
					<tr>
						<td id='cert' colSpan={4}>
							<fieldset className='mainfield' id='certificate'>
								<legend>
									<em className='restit'>Certificate</em>

								</legend>
								<table id='certcontent'>
									<tr>
										<th>자격증</th>
										<th>분야</th>
										<th>시기</th>
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
							</fieldset>
						</td>
						<td className='introme'>대학 재학 중에 취득한 자격증입니다<br /><br /></td>
					</tr>
					<tr>
						<td>
							<br></br>
							<br></br>
							<br></br>
						</td>
					</tr>
				</Roll>

				<Fade left>
					<tr>
						<td colSpan={2} className='introme'>분야별로 제가 활동한 것을 키워드로 정리해보았습니다 <br></br><br /></td>
						<td id='maj'>
							<fieldset className='mainfield' id='major'>
								<legend>
									<em className='restit'>majors</em>
								</legend>
								<table id='Major'>
									<tr>
										<td colSpan={3}>분야별 활동 키워드 정리</td>
									</tr>
									<tr>
										<td>웹</td>
										<td>React</td>
										<td>HTML&CSS&JS</td>
									</tr>
									<tr>
										<td>앱</td>
										<td>ReactNative</td>
										<td>Flutter</td>
									</tr>
									<tr>
										<td>AI</td>
										<td colSpan={2}>기초수학(통계,미적,정수론 등)</td>
									</tr>
									<tr>
										<td rowSpan={2}>서버</td>
										<td>Linux</td>
										<td>CloudComputing</td>
									</tr>
									<tr>
										<td>nodejs</td>
										<td>django</td>
									</tr>
									<tr>
										<td>DB</td>
										<td>SQLD</td>
										<td>MySQL</td>
									</tr>
								</table>
							</fieldset>
						</td>
					</tr>
				</Fade>
				<tr>
					<td className='introme' colSpan={5} style={{ paddingLeft: "120px" }}>
						<br />
						<br />
						<Roll top>
							자격증과 활동키워드의 더 자세한 내용은<br /> '나의 진로'탭에서 확인하실 수 있습니다
						</Roll>
						<br />
						<br />
						<Rotate top left>
							제 소개는 여기까지입니다.
							봐주셔서 감사합니다!
							<br /><br />
						</Rotate>
					</td>
				</tr>
			</table>
		</div >
	);
};

export default Resume;