import React, { useEffect, useState } from 'react'
import Comment from './Comment/Comment';

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
                <input type='text' name='inputfield' placeholder='댓글을 입력해주세요' />
                <button type='submit'>제출</button>
            </form>
            {submittedDataList.map((data, index) => {
                return <Comment key={index} submittedData={data} />
            })}
        </div>
    )
}

export default Comments