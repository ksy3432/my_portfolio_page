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
import { Flip } from 'react-reveal';

function Comment({ submittedData }) {
    const [nickName, setNickName] = useState(localStorage.getItem('currentUserName') || "annonymous");

    useEffect(() => {
        setNickName(localStorage.getItem('currentUserName') || "annonymous");
    }, [localStorage.getItem('currentUserName')]);

    return (
        <Flip bottom>
            <div style={{ height: "70px", width: "830px", marginLeft: "35px", borderRadius: "15px", height: "90px", marginBottom: "30px" }}>
                <p id='commenttitle' style={{
                    marginBottom: 10, color: 'black', fontFamily: 'NPSfontBold', fontSize: "23px", paddingLeft: "15px", backgroundColor: "grey", borderRadius: "15px", width: "170px", marginBottom: "11px", height: "30px"
                }}>{nickName} </p>
                <p id='commentcontnet' style={{ backgroundColor: "#9E9E9E", marginTop: 0, fontSize: "28px", paddingLeft: "15px", height: "65px", borderRadius: "15px", fontFamily: 'KOTRAHOPE' }}>{submittedData}</p>
            </div >
        </Flip>
    );
}

export default Comment;


