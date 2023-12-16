<template>
    <div id="resume">
        <table id='entityTable'>
            <tr>
                <td id='basicheight'>
                    <fieldset className='mainfield' id='basic'>
                        <legend>
                            <em className='restit'>Bascic info</em>
                        </legend>
                        <table id='basiccontent'>
                            <!-- <tr>
                                <td rowspan="7">사진</td>
                            </tr> -->
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
                                <td colspan="3">2002.05.17(만 21세)</td>
                            </tr>
                            <tr>
                                <td>최종학력</td>
                                <td colspan="3">가천대학교 컴퓨터공학부(컴퓨터공학전공)</td>
                            </tr>
                            <tr>
                                <td>블로그 주소</td>
                                <a>
                                    https://ksy3432.vercel.app/</a>
                            </tr>
                            <tr>
                                <td>github 주소</td>
                                <a>
                                    https://github.com/ksy3432</a>
                            </tr>
                        </table>
                    </fieldset>
                </td>
                <td>
                    <fieldset className='mainfield' id='intern'>
                        <legend>
                            <em className='restit'>Intern experience</em>
                        </legend>
                        <table id='interncontent'>
                            <tr>
                                <th className='vector'>기간</th>
                                <th>관련</th>
                            </tr>
                            <tr>
                                <td className='vector'>2021~2022</td>
                                <td> 개인 프로젝트</td>
                            </tr>
                            <tr>
                                <td className='vector'>2023-3~2023.6</td>
                                <td> 파이썬 알고리즘 스터디</td>
                            </tr>
                            <tr>
                                <td className='vector'>2023.6~2023.10</td>
                                <td> 네트워크 관리사 자격증 스터디</td>
                            </tr>
                            <tr>
                                <td className='vector'>2023.6~2023.7</td>
                                <td> 리액트 개인프로젝트</td>
                            </tr>
                            <tr>
                                <td className='vector'>2024.3~2024.9</td>
                                <td> 가천대학교 산업 인턴</td>
                            </tr>
                            <tr>
                                <td className='vector'>2024.1~2024.6</td>
                                <td> 대학생 연합동아리</td>
                            </tr>
                            <tr>
                                <td className='vector'>2025.1~2026.1</td>
                                <td> 싸피</td>
                            </tr>
                        </table>
                    </fieldset>
                </td>

            </tr>
            <tr>
                <td id='maj'>
                    <fieldset className='mainfield' id='major'>
                        <legend>
                            <em className='restit'>majors</em>
                        </legend>
                        <table id='Major'>
                            <tr>
                                <td v-bind:colspan="3">분야별 활동 키워드 정리</td>
                            </tr>
                            <tr>
                                <td>웹</td>
                                <td>React</td>
                                <td>HTML,CSS,JS</td>
                            </tr>
                            <tr>
                                <td>앱</td>
                                <td>ReactNative</td>
                                <td>Flutter</td>
                            </tr>
                            <tr>
                                <td>AI</td>
                                <td v-bind:colspan="3">기초수학(통계,미적,정수론 등)</td>
                            </tr>
                            <tr>
                                <td rowSpan="2">서버</td>
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
                <td id='third'>
                    <fieldset className='mainfield' id='contest_intro'>
                        <legend>
                            <em className='restit'>Contsest</em>
                        </legend>
                        <table style="height: 350px;">
                            <tr>
                                <th className='c1'>공모전</th>
                                <th>관련 분야</th>
                            </tr>
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
                <td id='cert'>
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
                                <td>리눅스 마스터 2급</td>
                                <td>서버,네트워크</td>
                                <td>2023-1</td>
                            </tr>
                            <tr>
                                <td>네트워크 관리사 2급</td>
                                <td>서버,네트워크</td>
                                <td>2023-2</td>
                            </tr>
                            <tr>
                                <td>SQLD</td>
                                <td>데이터베이스</td>
                                <td>2021-2</td>
                            </tr>
                            <tr>
                                <td>정보처리기사 </td>
                                <td>IT 기초지식</td>
                                <td>2025-1</td>
                            </tr>
                            <tr>
                                <td>AWS </td>
                                <td>클라우드</td>
                                <td>2025-2</td>
                            </tr>
                        </table>
                    </fieldset>
                </td>
                <td id='fourth'>
                    <fieldset className='mainfield' id='proj'>
                        <legend>
                            <em className='restit'>Project</em>
                        </legend>
                        <table style="350px">
                            <tr>
                                <th className='p1'>프로젝트명</th>
                                <th className='p2'>진행기간</th>
                            </tr>
                            <tr>
                                <td className='p1'>트위터 클론코딩</td>
                                <td className='p2'>2023 여름방학</td>
                            </tr>
                            <tr>
                                <td className='p1'>채팅 프로그램 만들기</td>
                                <td className='p2'>2023 여름방학</td>
                            </tr>
                            <tr>
                                <td className='p1'>파이썬 알고리즘 풀이</td>
                                <td className='p2'>2023 1학기</td>
                            </tr>
                            <tr>
                                <td className='p1'>나만의 메모앱 만들기</td>
                                <td className='p2'>2023 2학기~</td>
                            </tr>
                            <tr>
                                <td className='p1'>오래된 안드로이드폰을 이용하여 개인 서버 만들기</td>
                                <td className='p2'>2023 1학기</td>
                            </tr>
                            <tr>
                                <td className='p1'>개발블로그 만들기</td>
                                <td className='p2'>2023 1학기</td>
                            </tr>

                        </table>
                    </fieldset>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    name: 'ResumeContent',
}
</script>

<style>
@font-face {
    font-family: '양진체';
    src: url('https://cdn.jsdelivr.net/gh/supernovice-lab/font@0.9/yangjin.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'YClover-Bold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_231029@1.1/YClover-Bold.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
}

@font-face {
    font-family: 'iceSotong-Rg';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2307-2@1.0/iceSotong-Rg.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'HakgyoansimGaeulsopungB';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2307-2@1.0/HakgyoansimGaeulsopungB.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
}

@font-face {
    font-family: 'GoryeongStrawberry';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2304-01@1.0/GoryeongStrawberry.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'KCCMurukmuruk';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2302@1.0/KCCMurukmuruk.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}

#resume {
    width: 1300px;
    display: 'flex';
    margin-left: "80px";
}

body {
    background-color: rgba(0, 0, 0, 0.805);
    color: aliceblue;
}

#container {
    width: 1300px;
}

em {
    font-weight: bolder;
    font-size: 1em;
}

tr {
    width: 400px;
}

/* #entityTable {
  border: 1px solid black;
} */
#entityTable {
    border: 3px solid white;
    table-layout: fixed;
    /* 테이블 레이아웃을 고정으로 설정 */
    width: 1260px;
    /* 테이블 전체 너비를 100%로 설정 */
    height: 1300px;
    margin-bottom: 50px;
}

#basiccontent {
    height: 340px;
    text-align: left;
}

#vector {
    width: 30px;
}

.restit {
    font-size: 1.5em;
    font-family: 'KOTRAHOPE';
}

.c1 {
    width: 520px;
}


.mainfield {
    width: 550px;
    height: 400px;
    border-color: white;
    border-width: 5px;
    border-style: double;

}


#basic {
    margin-left: 10px;
    width: 570px;
    height: 380px;
}

#intern {
    width: 530px;
    height: 380px;
    margin-left: 25px;
}

fieldset#major {
    margin-top: 0;
    height: 398px;
    width: 370px;
    margin-left: 10px;
    vertical-align: top;
}

#certificate {
    width: 480px;
    height: 380px;
    margin-left: 10px;
    margin-top: 0;
}

td#cert {
    width: 500px;
    vertical-align: top;
}

td#maj {
    vertical-align: top;
    width: 100%;
}

#Major {
    height: 360px;
}

td#basicheight {
    height: 300px;
}

td#third {
    vertical-align: top;
}

td#fourth {
    vertical-align: top;
}

#contest_intro {
    margin-top: 0;
    margin-left: -170px;
    width: 730px;
    height: 400px;
    vertical-align: top;
}

.c2 {
    width: 60px;
}

#proj {
    margin-top: 0;
    width: 630px;
    margin-left: -70px;
    height: 380px;
}

.p1 {
    width: 450px;
}

.p2 {
    width: 180px;
}

/* td#major {
  width: 550px;
  height: 250px;
  margin-left: 12px;
} */

/* fieldset {
  width: 550px;
  height: 400px;
} */

table {
    /* border: 1px solid black; */
    /* border-collapse: collapse; */
    text-align: left;
    font-size: 1.1em;
}

#certcontent {
    width: 100%;
    height: 350px;
}


tr {
    width: 600px;
}


tr {
    width: 400px;
}

/*
#pledge {
  text-align: right;
  width: 50%;
  font-family: "Song Myung";
  margin-left: 950px;
  font-size: 1.5em;
} */

.vector {
    margin-right: 20px;
}

fieldset {
    width: 800px;
    margin-left: 0px;
    font-size: 30px;
    font-family: 'HakgyoansimGaeulsopungB';
}
</style>
