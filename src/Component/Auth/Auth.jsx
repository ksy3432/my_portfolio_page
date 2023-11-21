import React, { useState, useEffect } from 'react';
import "../CSS/Auth.css";


function Auth() {
    const [isLogged, setIsLogged] = useState(false);
    const [Name, setName] = useState("");
    const [ID, setID] = useState("");
    const [Password, setPassword] = useState("");
    const [users, setUsers] = useState(JSON.parse(localStorage.getItem('users')) || []);
    const [showLoginForm, setShowLoginForm] = useState(false);
    const [submittedDataList, setSubmittedDataList] = useState(
        JSON.parse(localStorage.getItem('comments')) || []
    );

    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(users));
    }, [users]);

    useEffect(() => {
        localStorage.setItem('comments', JSON.stringify(submittedDataList));
    }, [submittedDataList]);

    const handleLogin = (e) => {
        e.preventDefault();
        if (ID !== "" && Password !== "" && Name !== "") {
            setIsLogged(true);
            setUsers(prevUsers => [...prevUsers, { id: ID, password: Password, name: Name }]);
        }
    }

    const handleLogout = () => {
        localStorage.clear();
        setIsLogged(false);
        setName("");
        setPassword("");
        setID("");
        setUsers([]);
        setSubmittedDataList([]);
    }

    const handleShowLoginForm = () => {
        setShowLoginForm(true);
    }

    const handleSubmit = (data) => {
        setSubmittedDataList(prev => [...prev, data]);
    }

    if (isLogged) {
        return (
            <div style={{ display: 'flex' }}>
                {Name}님 환영합니다!
                <form onSubmit={handleLogout}>
                    <button type='submit'>로그아웃</button>
                </form>
            </div>
        )
    } else {
        if (showLoginForm) {
            return (
                <div>
                    <form onSubmit={handleLogin} id='LoginForm'>
                        <input type='text' value={ID} onChange={e => setID(e.target.value)} placeholder='아이디를 입력하세요'></input>
                        <input type='password' value={Password} onChange={e => setPassword(e.target.value)} placeholder='비밀번호를 입력하세요'></input>
                        <input type='text' value={Name} onChange={e => setName(e.target.value)} placeholder='닉네임을 입력하세요'></input>
                        <button type='submit'>로그인</button>
                    </form>
                </div>
            );
        } else {
            return (
                <div>
                    <form>
                        <button type='button' onClick={handleShowLoginForm} id='LoginButton'>Login</button>
                    </form>
                </div>
            );
        }
    }
}

export default Auth;
