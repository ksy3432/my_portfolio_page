<template>
    <div>
        <div>
            <p
                style="font-size: 23px; font-family: 'NPSfontBold'; color:black; backgroundColor: grey; borderRadius: 15px; width:170px; marginbottom:11px; height:30px; margin-left:30px; padding-left:13px; margin-bottom:10px;">
                {{ nickName }}</p>
            <!-- marginBottom: 10, color: 'black', fontFamily: 'NPSfontBold', fontSize: "23px", paddingLeft: "15px",
                 backgroundColor: "grey", borderRadius: "15px", width: "170px", marginBottom: "11px", height: "30px" -->
        </div>
    </div>
</template>

<script>
export default {
    name: 'CommentServe',
    props: {
        submittedData: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            nickName: localStorage.getItem('currentUserName') || 'annonymous'
        };
    },
    created() {
        this.nickName = localStorage.getItem('currentUserName') || 'annonymous';
    }
};
</script>

<style scoped>
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
</style>
