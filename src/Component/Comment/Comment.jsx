import React, { useState, useEffect } from 'react';
import "../CSS/Comment.css"

function Comment({ submittedData, name, isLogged }) {
    const [nickName, setNickName] = useState("annonymous");

    useEffect(() => {
        if (isLogged && name !== "annonymous") {
            setNickName(name);
        }
    }, [isLogged, name]);

    return (
        <div>
            <p>{nickName} : {submittedData}</p>
        </div>
    );
}

export default Comment;

