import React from 'react'
import { Link } from 'react-router-dom'

function Career4() {
    return (
        <div>
            <fieldset>
                <Link to={""}><legend>개발블로그</legend></Link>
                블로그 시작 시기 : 2023.6<br />
                블로그 구축 방법 : github의 ____님의 프로젝트를 이용하여 vercel을 이용하여 배포함<br />
                notion에 글을 쓰면 자동으로 블로그에 글이 배포되는 형식<br />
                //현재는 포스팅한 글을 대부분 내린 상태<br />
                전공 공부하면서 배운 것, 관련된 백준 문제 풀이, 개인 프로젝트하다 막힌 것 등 다양한 주제로 글을 올림(비정기적)<br />
            </fieldset>
        </div>
    )
}

export default Career4