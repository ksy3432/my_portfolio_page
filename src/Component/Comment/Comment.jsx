// import React, { useState, useEffect, useContext } from 'react';
// import "../CSS/Comment.css"

// function Comment({ submittedData, isLogged }) {
//     const [nickName, setNickName] = useState("annonymous");
//     const [users, setUsers] = useState([]);

//     useEffect(() => {
//         const storedUsers = JSON.parse(localStorage.getItem('users'));
//         if (storedUsers) {
//             setUsers(storedUsers);
//         }
//     }, []);

//     useEffect(() => {
//         const currentUser = users[users.length - 1];
//         if (isLogged && currentUser && currentUser.name) {
//             setNickName(currentUser.name);
//         } else {
//             setNickName("annonymous");
//         }
//     }, [users, isLogged]);



//     return (
//         <div>
//             <p>{nickName} : {submittedData}</p>
//         </div>
//     );
// }

// export default Comment;

// Comment.js
import React, { useState, useEffect } from 'react';

function Comment({ submittedData }) {
    const [nickName, setNickName] = useState(localStorage.getItem('currentUserName') || "annonymous");

    useEffect(() => {
        setNickName(localStorage.getItem('currentUserName') || "annonymous");
    }, [localStorage.getItem('currentUserName')]);

    return (
        <div>
            <p>{nickName} : {submittedData}</p>
        </div>
    );
}

export default Comment;


