<template>
    <div style="background-color: #424242; border-radius: 30px; margin-bottom: 50px">
        <br />
        <form @submit.prevent="handleSubmit">
            <div id="commentline">
                <input id="commentinput" type="text" v-model="inputField" placeholder="댓글을 입력해주세요" />
                <button id="commentbuttonsubmit" type="submit">댓글달기</button>
            </div>
        </form>
        <div v-for="(data, index) in submittedDataList" :key="index">
            <CommentServe :submittedData="submittedDataList" />
            <p id='commentcontent'
                style="background-color: #9E9E9E; marginTop: 0; fontSize: 28px; margin-left:30px; padding-left:12px; padding-top:3px;height: 65px; borderRadius: 15px; fontFamily: 'KOTRAHOPE'; width:92%;">
                {{ data.content }}</p>
        </div>
        <br />
    </div>
</template>

<script>
import { reactive, ref } from "vue";
import CommentServe from "./components/Comment/CommentServe.vue";

export default {
    name: "CommentCounts",
    components: {
        CommentServe
    },
    setup() {
        const submittedDataList = reactive(
            JSON.parse(localStorage.getItem("comments")) || []
        );
        const inputField = ref('');

        const handleSubmit = () => {
            const data = {
                content: inputField.value
            };
            submittedDataList.push(data);
            console.log(data);
            localStorage.setItem("comments", JSON.stringify(submittedDataList));
            inputField.value = "";
        };

        return {
            submittedDataList,
            inputField,
            handleSubmit,
        };
    },
};
</script>

<style scoped>
#commentbuttonsubmit {
    width: 120px;
    height: 45px;
    font-size: 20px;
    border-radius: 20px;
}

@font-face {
    font-family: 'NPSfontBold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2310@1.0/NPSfontBold.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
}

@font-face {
    font-family: 'KOTRAHOPE';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2110@1.0/KOTRAHOPE.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}

#commentinput {
    width: 720px;
    height: 40px;
    background-color: grey;
    color: aliceblue;
    margin-left: 35px;
    border-radius: 30px;
}

#commentinput::placeholder {
    color: black;
}

#commentline {
    margin-top: 10px;
    display: flex;

}
</style>
