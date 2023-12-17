<template>
    <div>
        <div>
            <p
                style="font-size: 23px; font-family: 'NPSfontBold'; color:black; 
                backgroundColor: grey; borderRadius: 15px; width:170px; marginbottom:11px; 
                height:28px; margin-left:30px; padding-left:20px; margin-bottom:10px; padding-top: 2px;margin-top:15px">
                {{ nickName }}</p>
        </div>
    </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';

export default {
    name: 'CommentServe',
    props: {
        submittedData: {
            type: String,
            required: true
        }
    },
    setup() {
        const nickName = ref(localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')).name : 'annonymous');

        const updateNickName = () => {
            const currentUser = localStorage.getItem('currentUser');
            if (currentUser) {
                nickName.value = JSON.parse(currentUser).name;
            } else {
                nickName.value = 'annonymous';
            }
        };

        const onStorageChange = (event) => {
            if (event.key === 'currentUser') {
                updateNickName();
            }
        };

        onMounted(() => {
            window.addEventListener('storage', onStorageChange);
            updateNickName();
        });

        onUnmounted(() => {
            window.removeEventListener('storage', onStorageChange);
        });

        return { nickName };
    }
};

</script>

<!-- <template>
    <div>
        <div>
            <p
                style="font-size: 23px; font-family: 'NPSfontBold'; color:black; backgroundColor: grey; borderRadius: 15px; width:170px; marginbottom:11px; height:28px; margin-left:30px; padding-left:20px; margin-bottom:10px; padding-top: 2px;">
                {{ nickName }}</p>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'CommentServe',
    props: {
        submittedData: {
            type: String,
            required: true
        }
    },
    computed: {
        ...mapGetters([
            'nickName'
        ])
    }
};
</script> -->



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
