<template>
    <div>
        <div v-if="isLogged" style="font-size: 20px">
            {{ Name }}님 <br />환영합니다!
            <form @submit.prevent="handleLogout">
                <button type="submit" style="margin-top: 10px; width: 70px; font-size: 15px">Logout</button>
            </form>
        </div>
        <div v-else>
            <div v-if="showLoginForm">
                <form @submit.prevent="handleLogin" style="display: flex; flex-direction: column">
                    <input type="text" name="ID" placeholder="아이디를 입력하세요" class="logininputset" />
                    <input type="password" name="Password" placeholder="비밀번호를 입력하세요" class="logininputset" />
                    <input type="text" name="Name" placeholder="닉네임을 입력하세요" class="logininputset" />
                    <button type="submit">로그인</button>
                </form>
            </div>
            <div v-else>
                <form>
                    <button type="button" @click="showLoginForm = !showLoginForm" id="LoginButton">
                        Login</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
    name: 'AuthServe',
    setup() {
        const isLogged = ref(false);
        const ID = ref('');
        const Password = ref('');
        const users = ref(JSON.parse(localStorage.getItem("users")) || []);
        const submittedDataList = ref(JSON.parse(localStorage.getItem("comments")) || []);
        const showLoginForm = ref(false);
        const Name = ref('');

        onMounted(() => {
            if (localStorage.getItem("currentUser")) {
                const currentUser = JSON.parse(localStorage.getItem("currentUser"));
                isLogged.value = true;
                Name.value = currentUser.name;
            }
        });

        const handleLogin = async (e) => {
            ID.value = e.target.elements.ID.value;
            Password.value = e.target.elements.Password.value;
            Name.value = e.target.elements.Name.value;
            const newUser = {
                id: ID.value,
                password: Password.value,
                isLogged: true,
            };
            users.value = [...users.value, newUser];
            isLogged.value = true;
            localStorage.setItem("currentUser", JSON.stringify({ name: Name.value, id: ID.value, password: Password.value }));
        };

        const handleLogout = () => {
            localStorage.removeItem("currentUser");
            isLogged.value = false;
            Name.value = "";
            Password.value = "";
            ID.value = "";
            users.value = [];
            submittedDataList.value = [];
        };

        const handleSubmit = (data) => {
            submittedDataList.value.push(data);
            localStorage.setItem("comments", JSON.stringify(submittedDataList.value));
        };

        return {
            isLogged,
            ID,
            Password,
            users,
            submittedDataList,
            handleLogin,
            handleLogout,
            handleSubmit,
            showLoginForm,
            Name
        };
    }
};
</script>

<style>
#LoginForm {
    display: flex;
    flex-direction: column;
}

#LoginButton {
    width: 80px;
    height: 30px;
    border-style: none;
    background-color: black;
    color: aliceblue;
}

#LoginForm {
    border-style: none;
    border-color: black;
}

button {
    width: 100px;
    border-color: white;
    background-color: black;
    color: white;
    font-size: 20px;
}

.logininputset {
    background-color: grey;
    color: black;
}

.logininputset::placeholder {
    color: black;
}
</style>