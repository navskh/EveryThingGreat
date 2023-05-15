<template>
    <div class="signup-page">
        <div class="signup-form w-1/3">
            <h1 class="text-2xl mb-6">회원가입</h1>
            <div class="form-control">
                <label class="label" for="username">이름</label>
                <input class="input input-bordered" type="text" id="username" name="username" v-model="username" />
            </div>
            <div class="form-control">
                <label class="label" for="email">아이디(Email)</label>
                <input class="input input-bordered" type="text" id="email" name="email" v-model="email" />
            </div>
            <div class="form-control">
                <label class="label" for="password">비밀번호</label>
                <input class="input input-bordered" type="password" id="password" name="password" v-model="password" />
            </div>
            <button class="btn btn-primary mt-6 w-full" @click="signUp">
                회원가입
            </button>
            <router-link to="/login">
                <button class="btn btn-outline mt-4 w-full">
                    돌아가기(로그인)
                </button>
            </router-link>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const username = ref('');
const email = ref('');
const password = ref('');

const signUp = () => {
    console.log(
        username.value,
        email.value,
        password.value
    )
}

</script>

<style>
.signup-page {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f7fafc;
    font-family: "Noto Sans KR", sans-serif;
}

.signup-form {
    max-width: 500px;
    padding: 24px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.form-control {
    margin-bottom: 16px;
}

.label {
    display: block;
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 8px;
}

.input {
    display: block;
    width: 100%;
    height: 36px;
    padding: 0 12px;
    font-size: 14px;
    line-height: 1.5;
    color: #333;
    background-color: #fff;
    border: 1px solid #d2d6dc;
    border-radius: 4px;
    outline: none;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.input:focus {
    border-color: #3182ce;
    box-shadow: 0 0 0 3px rgba(49, 130, 206, 0.2);
}

.btn {
    display: inline-block;
    height: 36px;
    padding: 0 16px;
    font-size: 14px;
    font-weight: 500;
    line-height: 36px;
    text-align: center;
    text-decoration: none;
    white-space: nowrap;
    background-color: #3182ce;
    color: #fff;
}
</style>
