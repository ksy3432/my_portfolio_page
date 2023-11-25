import React from 'react'
import { Link } from 'react-router-dom'

function Career4() {
    return (
        <div>
            <fieldset>
                <legend className="title_field">개발블로그</legend>
                <Link to={"https://ksy3432.vercel.app/"} style={{ color: 'grey' }}><legend>클릭하면 블로그로 이동합니다</legend></Link>
                <fieldset>
                    <legend>블로그</legend>
                    블로그 시작 시기 : 2023.6<br />
                    블로그 구축 방법 : github의 MoreThanMin님의 프로젝트를 이용하여 블로그 구축<br />
                    이후 vercel을 이용하여 배포<br />
                    notion에 글을 쓰면 자동으로 블로그에 글이 배포되는 형식<br />
                    전공 공부하면서 배운 것, 백준 문제 풀이, 개인 프로젝트하다 막힌 것 등 다양한 주제로 글을 올림(비정기적)<br />
                </fieldset>

            </fieldset>
        </div>
    )
}

export default Career4