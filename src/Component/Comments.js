import React, { useEffect, useState } from 'react'
import Comment from './Comment/Comment';
import "./CSS/Comment.css"

function Comments() {
    const [submittedDataList, setSubmittedDataList] = useState(
        JSON.parse(localStorage.getItem('comments')) || []
    );

    useEffect(() => {
        localStorage.setItem('comments', JSON.stringify(submittedDataList));
    }, [submittedDataList]);

    const handleSubmit = (data) => {
        setSubmittedDataList((prev) => [...prev, data]);
    }

    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault();
                const formData = e.target.elements.inputfield.value;
                handleSubmit(formData);
            }}>
                <div id='commentline'>
                    <input id='commentinput' type='text' name='inputfield' placeholder='댓글을 입력해주세요' />
                    <button id='commentbuttonsubmit' type='submit'>댓글달기</button>
                </div>
            </form>
            {submittedDataList.map((data, index) => {
                return <Comment key={index} submittedData={data} />
            })}
        </div>
    )
}

export default Comments