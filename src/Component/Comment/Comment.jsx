import React, { useState, useEffect } from 'react';

function Comment({ submittedData, name, isLogged }) {
    const [nickName, setNickName] = useState("anonymous");

    useEffect(() => {
        if (isLogged && name !== "anonymous") {
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

